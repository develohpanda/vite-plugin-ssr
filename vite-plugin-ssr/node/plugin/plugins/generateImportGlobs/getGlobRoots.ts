export { getGlobRoots }

import fs from 'fs'
import { assertUsage, assertPosixPath, toPosixPath, assert, isNotNullish } from '../../utils'
import path from 'path'
import symlinkDir from 'symlink-dir'
import resolve from 'resolve'
import type { ResolvedConfig } from 'vite'
import { assertConfigVpsResolved } from '../config/assertConfigVps'

type GlobRoot =
  | {
      fsAllowRoot: null
      includePath: '/'
      includePageFile: null
    }
  | {
      fsAllowRoot: string
      includePath: null | string
      includePageFile: null
    }
  | {
      fsAllowRoot: null
      includePath: null
      includePageFile: string
    }

async function getGlobRoots(config: ResolvedConfig): Promise<GlobRoot[]> {
  assertConfigVpsResolved(config)
  const { root } = config
  assertPosixPath(root)
  const globRoots: GlobRoot[] = [
    {
      fsAllowRoot: null,
      includePath: '/',
      includePageFile: null
    },
    ...(
      await Promise.all(config.vitePluginSsr.pageFiles.include.map((pkgName) => processIncludeSrc(pkgName, root)))
    ).filter(isNotNullish),
    ...config.vitePluginSsr.pageFiles.includeDist.map((includeDistEntry) => ({
      fsAllowRoot: null,
      includePath: null,
      includePageFile: includeDistEntry
    }))
  ]
  return globRoots
}

async function processIncludeSrc(
  pkgName: string,
  root: string
): Promise<{ fsAllowRoot: string; includePath: string | null; includePageFile: null }> {
  assertUsage(
    isNpmName(pkgName),
    `Wrong vite-plugin-ssr config \`pageFiles.include\`: the string \`${pkgName}\` is not a valid npm package name.`
  )
  const { pkgJson, pkgRoot } = resolvePackage(pkgName, { preserveSymlinks: true, root })
  const pageFilesDir = pkgJson['vite-plugin-ssr']?.pageFilesDir ?? ''
  assertUsage(
    !pageFilesDir,
    'package.json#vite-plugin-ssr.pageFilesDir is deprecated. Reach out to a vite-plugin-ssr maintainer.'
  )
  const fsAllowRoot = resolvePackageRoot(pkgName, { preserveSymlinks: false, root })

  {
    assertPosixPath(root)
    assertPosixPath(fsAllowRoot)
    const appRootIncludedInPkgRoot = root.startsWith(fsAllowRoot)
    if (appRootIncludedInPkgRoot) {
      return { fsAllowRoot, includePath: null, includePageFile: null }
    }
  }

  const crawlRoot = path.posix.join(fsAllowRoot, pageFilesDir)
  assertUsage(
    !root.startsWith(crawlRoot),
    `The page files include path ${crawlRoot} is a parent of the app's root ${root}. You need to use/change the \`pageFilesDir\` options. Contact the vite-plugin-ssr maintainer on GitHub / Discord for more information.`
  )

  const pkgRootRelative = path.posix.relative(root, pkgRoot)
  if (!pkgRootRelative.startsWith('..')) {
    const includePath = path.posix.join(pkgRootRelative, pageFilesDir)
    return { fsAllowRoot, includePath, includePageFile: null }
  }

  const includePath = path.posix.join('node_modules', '.vite-plugin-ssr', pkgName, pageFilesDir)
  if (!fs.existsSync(includePath)) {
    const sourceAbsolute = crawlRoot
    const targetAbsolute = `${root}/${includePath}`
    assert(!root.startsWith(crawlRoot)) // See above
    assert(!targetAbsolute.startsWith(sourceAbsolute)) // Ensure it's not a cyclic symlink
    const source = path.posix.relative(root, sourceAbsolute)
    const target = path.posix.relative(root, targetAbsolute)
    await symlinkDir(source, target)
  }
  return { fsAllowRoot, includePath, includePageFile: null }
}

function isNpmName(str: string) {
  if (str.includes('.')) {
    return false
  }
  if (str.includes('\\')) {
    return false
  }
  if (!str.includes('/')) {
    return true
  }
  if (str.split('/').length === 2 && str.startsWith('@')) {
    return true
  }
  return false
}

function resolvePackage(pkgName: string, options: ResolveOptions) {
  const pkgJsonPath = resolvePackageJson(pkgName, options)
  const pkgRoot = path.posix.dirname(pkgJsonPath)
  const pkgJson: { ['vite-plugin-ssr']?: { pageFilesDir?: string } } = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'))
  return { pkgJson, pkgRoot }
}
function resolvePackageRoot(pkgName: string, options: ResolveOptions) {
  const pkgJsonPath = resolvePackageJson(pkgName, options)
  const pkgRoot = path.posix.dirname(pkgJsonPath)
  return pkgRoot
}
type ResolveOptions = { preserveSymlinks: boolean; root: string }
function resolvePackageJson(pkgName: string, { preserveSymlinks, root }: ResolveOptions) {
  let pkgJsonPath: string
  try {
    // We cannot use Node.js's `require.resolve()`: https://stackoverflow.com/questions/10111163/in-node-js-how-can-i-get-the-path-of-a-module-i-have-loaded-via-require-that-is/63441056#63441056
    pkgJsonPath = resolve.sync(`${pkgName}/package.json`, { preserveSymlinks, basedir: root })
  } catch (_err) {
    assertUsage(false, `Cannot find \`${pkgName}\`. Did you install it?`)
  }
  pkgJsonPath = toPosixPath(pkgJsonPath)
  return pkgJsonPath
}
