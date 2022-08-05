var te=Object.defineProperty;var k=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var A=(e,t,r)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&A(e,r,t[r]);if(k)for(var r of k(t))oe.call(t,r)&&A(e,r,t[r]);return e};function ne(e,t){e.stack=ae(e.stack,t)}function ae(e,t){if(!e)return e;const r=le(e);let n=0;return r.filter(l=>l.includes(" (internal/")||l.includes(" (node:internal")?!1:n<t&&se(l)?(n++,!1):!0).join(`
`)}function se(e){return e.startsWith("    at ")}function le(e){return e.split(/\r?\n/)}function R(e,t){let r;{var n=Error.stackTraceLimit;Error.stackTraceLimit=1/0,r=new Error(e),Error.stackTraceLimit=n}return ne(r,t),r}const _e="0.4.17",m={projectName:"vite-plugin-ssr",projectVersion:_e,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"},j=`[${m.npmPackageName}@${m.projectVersion}]`,ie=`${j}[Bug]`,ue=`${j}[Wrong Usage]`,ce=`${j}[Warning]`,de=`${j}[Info]`,F=2;function a(e,t){if(e)return;const r=(()=>{if(!t)return"";const o=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${m.projectName} maintainers; you can ignore this): ${o}.`})();throw R([`${ie} You stumbled upon a bug in ${m.projectName}'s source code.`,`Reach out at ${m.githubRepository}/issues/new or ${m.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Do not hesitate to reach out as it makes ${m.projectName} more robust.`,r].join(" "),F)}function g(e,t){if(e)return;const r=t.startsWith("[")?"":" ";throw R(`${ue}${r}${t}`,F)}function fe(e){return R(`${j} ${e}`,F)}let P=new Set;function ge(e,t,{onlyOnce:r,showStackTrace:n}){if(e)return;const o=`${ce} ${t}`;if(r){const l=r===!0?o:r;if(P.has(l))return;P.add(l)}console.warn(n?new Error(o):o)}function zo(e,t,{onlyOnce:r}){if(e)return;const n=`${de} ${t}`,o=n;P.has(o)||(P.add(o),console.log(n))}function T(e,t,r){return typeof e=="string"?C(e.split(""),t,r).join(""):C(e,t,r)}function C(e,t,r){const n=[];let o=t>=0?t:e.length+t;a(o>=0&&o<=e.length);let l=r>=0?r:e.length+r;for(a(l>=0&&l<=e.length);!(o===l||(o===e.length&&(o=0),o===l));){const s=e[o];a(s!==void 0),n.push(s),o++}return n}function pe(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function be(e,t){a(pe(e),{url:e}),a(t.startsWith("/"),{url:e,baseUrl:t});const[r,...n]=e.split("#");a(r!==void 0);const o=["",...n].join("#")||null;a(o===null||o.startsWith("#"));const l=o===null?"":w(o.slice(1)),[s,..._]=r.split("?");a(s!==void 0);const i=["",..._].join("?")||null;a(i===null||i.startsWith("?"),{url:e,searchOriginal:i});const d={},y={};Array.from(new URLSearchParams(i||"")).forEach(([b,v])=>{d[b]=v,y[b]=[...y[b]||[],v]});const{origin:f,pathnameResolved:h}=ve(e,t);a(f===null||f===w(f),{origin:f}),a(h.startsWith("/"),{url:e,pathnameResolved:h}),a(f===null||e.startsWith(f),{url:e,origin:f});const z=s.slice((f||"").length);{const b=`${f||""}${z}${i||""}${o||""}`;a(e===b,{url:e,urlRecreated:b})}let{pathname:u,hasBaseUrl:p}=he(h,t);return u=me(u),a(u.startsWith("/")),{origin:f,pathname:u,pathnameOriginal:z,hasBaseUrl:p,search:d,searchAll:y,searchOriginal:i,hash:l,hashOriginal:o}}function w(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function me(e){return e.split("/").map(t=>w(t).split("/").join("%2F")).join("/")}function ve(e,t){var r;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let n,o;try{const l=new URL(e);n=l.origin,o=l.pathname}catch{n=null;let s=typeof window!="undefined"&&((r=window==null?void 0:window.document)===null||r===void 0?void 0:r.baseURI);s=s||"http://fake.example.org"+t,o=new URL(e,s).pathname}return a(o.startsWith("/"),{url:e,pathnameResolved:o}),a(o===o.split("?")[0].split("#")[0]),{origin:n,pathnameResolved:o}}function xe(e){a(e.startsWith("/"))}function ye(e){a(e.startsWith("/")),a(!e.includes("?")),a(!e.includes("#"))}function he(e,t){ye(e),xe(t);let r=e;if(a(r.startsWith("/")),a(t.startsWith("/")),t==="/")return{pathname:e,hasBaseUrl:!0};let n=t;return t.endsWith("/")&&r===T(t,0,-1)&&(n=T(t,0,-1),a(r===n)),r.startsWith(n)?(a(r.startsWith("/")||r.startsWith("http")),a(r.startsWith(n)),r=r.slice(n.length),r.startsWith("/")||(r="/"+r),a(r.startsWith("/")),{pathname:r,hasBaseUrl:!0}):{pathname:e,hasBaseUrl:!1}}function V(e,t){Object.assign(e,t)}function I(e){return e instanceof Function||typeof e=="function"}function S(e){return typeof e=="object"&&e!==null}function Se(e){return Array.from(new Set(e))}function Mo(e){return(t,r)=>{const n=e(t),o=e(r);return n===o?0:n>o?-1:1}}function je(e){return(t,r)=>{const n=e(t),o=e(r);if(a([!0,!1,null].includes(n)),a([!0,!1,null].includes(o)),n===o)return 0;if(n===!0||o===!1)return-1;if(o===!0||n===!1)return 1;a(!1)}}function Oe(e){return je(t=>{const r=e(t);return r===null?null:!r})}function q(){return typeof window!="undefined"&&typeof window.scrollY=="number"}function c(e,t,r="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return r==="undefined";if(r==="unknown")return!0;const o=e[t];return r==="array"?Array.isArray(o):r==="string[]"?Array.isArray(o)&&o.every(l=>typeof l=="string"):r==="function"?I(o):Array.isArray(r)?typeof o=="string"&&r.includes(o):r==="null"?o===null:r==="undefined"?o===void 0:r==="true"?o===!0:r==="false"?o===!1:typeof o===r}function Ne(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const $e=e=>e!=null,Pe="\\";function x(e){a(e&&!e.includes(Pe),`Wrongly formatted path: ${e}`)}const Te=["clientRouting"];function ze(e){Te.forEach(t=>{if(a(e.fileExports),!(t in e.fileExports))return;const r=`The value of \`${t}\` is only allowed to be \`true\`.`;g(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is forbidden: remove \`export { ${t} }\` instead. (${r})`),g(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${r}`)})}const Y=["render","clientRouting","prerender","doNotPrerender"];function Me(e,t){g(!Y.includes(e),`${t} has \`export default { ${e} }\` which is forbidden, use \`export { ${e} }\` instead.`)}function we(e){const t={};e.forEach(o=>{Ee(o).forEach(({exportName:s,exportValue:_,isFromDefaultExport:i})=>{var d;a(s!=="default"),t[s]=(d=t[s])!==null&&d!==void 0?d:[],t[s].push({exportValue:_,_filePath:o.filePath,_fileType:o.fileType,_isFromDefaultExport:i})})});const r=Re(),n={};return Object.entries(t).forEach(([o,l])=>{l.forEach(({exportValue:s,_fileType:_,_isFromDefaultExport:i})=>{var d;n[o]=(d=n[o])!==null&&d!==void 0?d:s,_===".page"&&!i&&(o in r||(r[o]=s))})}),a(!("default"in n)),a(!("default"in t)),{exports:n,exportsAll:t,pageExports:r}}function Ee(e){const{filePath:t,fileExports:r}=e;a(r);const n=[];return Object.entries(r).sort(Oe(([o])=>o==="default")).forEach(([o,l])=>{let s=o==="default";if(s)if(!We(t))o="Page";else{g(S(l),`The \`export default\` of ${t} should be an object.`),Object.entries(l).forEach(([_,i])=>{Me(_,t),n.push({exportName:_,exportValue:i,isFromDefaultExport:s})});return}n.push({exportName:o,exportValue:l,isFromDefaultExport:s})}),n.forEach(({exportName:o,isFromDefaultExport:l})=>{a(!(l&&Y.includes(o)))}),n}function We(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Re(){return new Proxy({},{get(...e){return q()||ge(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function K(e){const t=".page.",r=T(e.split(t),0,-1).join(t);return a(!r.includes("\\")),r}function wo(e){const t=e.filter(r=>L(r));if(g(t.length<=1,`Only one \`_error.page.js\` is allowed. Found several: ${t.join(" ")}`),t.length>0){const r=t[0];return a(r),r}return null}function L(e){return a(!e.includes("\\")),e.includes("/_error")}function Fe(e){const t=o=>n.pageId===o||n.isDefaultPageFile&&(n.isRendererPageFile||ke(o,n.filePath)),r=Ie(e),n={filePath:e,fileType:r,isRelevant:t,isDefaultPageFile:E(e),isRendererPageFile:E(e)&&Le(e),isErrorPageFile:L(e),pageId:K(e)};return n}function Ie(e){x(e);const r=e.split("/").slice(-1)[0].split("."),n=r.slice(-3)[0],o=r.slice(-2)[0];if(o==="page")return".page";if(a(n==="page",{filePath:e}),o==="server")return".page.server";if(o==="client")return".page.client";if(o==="route")return".page.route";a(!1,{filePath:e})}function E(e){return x(e),a(e.startsWith("/")),L(e)?!1:e.includes("/_default")}function Le(e){return x(e),a(e.startsWith("/")),e.includes("/renderer/")}function ke(e,t){x(e),x(t),a(e.startsWith("/")),a(t.startsWith("/")),a(!e.endsWith("/")),a(!t.endsWith("/")),a(E(t));const r=T(t.split("/"),0,-1).filter(n=>n!=="_default").join("/");return e.startsWith(r)}const Ae=[".page",".page.server",".page.route",".page.client"];function De(e){a(c(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),a(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),a(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),a(c(e,"pageFilesLazy","object")),a(c(e,"pageFilesEager","object")),a(c(e,"pageFilesExportNamesLazy","object")),a(c(e,"pageFilesExportNamesEager","object")),a(c(e.pageFilesLazy,".page")),a(c(e.pageFilesLazy,".page.client")||c(e.pageFilesLazy,".page.server"));const t={};O(e.pageFilesLazy).forEach(({filePath:n,pageFile:o,globValue:l})=>{var s;o=t[n]=(s=t[n])!==null&&s!==void 0?s:o;const _=l;U(_),o.loadFile=async()=>{"fileExports"in o||(o.fileExports=await _(),ze(o))}}),O(e.pageFilesExportNamesLazy).forEach(({filePath:n,pageFile:o,globValue:l})=>{var s;o=t[n]=(s=t[n])!==null&&s!==void 0?s:o;const _=l;U(_),o.loadExportNames=async()=>{if(!("exportNames"in o)){const i=await _();a(c(i,"exportNames","string[]"),o.filePath),o.exportNames=i.exportNames}}}),O(e.pageFilesEager).forEach(({filePath:n,pageFile:o,globValue:l})=>{var s;o=t[n]=(s=t[n])!==null&&s!==void 0?s:o;const _=l;a(S(_)),o.fileExports=_}),O(e.pageFilesExportNamesEager).forEach(({filePath:n,pageFile:o,globValue:l})=>{var s;o=t[n]=(s=t[n])!==null&&s!==void 0?s:o;const _=l;a(S(_)),a(c(_,"exportNames","string[]"),o.filePath),o.exportNames=_.exportNames});const r=Object.values(t);return r.forEach(({filePath:n})=>{a(!n.includes("\\"))}),r}function O(e){const t=[];return Object.entries(e).forEach(([r,n])=>{a(Ae.includes(r)),a(S(n)),Object.entries(n).forEach(([o,l])=>{const s=Fe(o);a(s.fileType===r),t.push({filePath:o,pageFile:s,globValue:l})})}),t}function U(e){a(I(e))}Ce();let $,M;function Eo(e){$=De(e)}async function Wo(e,t){e?(a(!M),a(t===void 0)):(a(M),a(typeof t=="boolean"),(!$||!t)&&await M()),a($);const r=$,n=Ue(r);return{pageFilesAll:r,allPageIds:n}}function Ce(){const e=Symbol(),t=q()?window:global;a(!t[e]),t[e]=!0}function Ue(e){const t=e.filter(({isDefaultPageFile:n})=>!n).map(({filePath:n})=>n).map(K);return Se(t)}function Be(e,t){return Q(e,t,!0)}function Ro(e,t){return Q(e,t,!1)}function Q(e,t,r){const n=r?".page.client":".page.server",o=Ge(n,t),l=e.filter(u=>u.isRelevant(t)),s=u=>l.filter(p=>p.isRendererPageFile&&p.fileType===u).sort(o)[0],_=u=>{const p=l.filter(v=>v.pageId===t&&v.fileType===u);g(p.length<=1,`Merge the following files into a single file: ${p.map(v=>v.filePath).join(" ")}`);const b=p[0];return a(b===void 0||!b.isDefaultPageFile),p[0]},i=l.filter(u=>u.isDefaultPageFile&&!u.isRendererPageFile&&(u.fileType===n||u.fileType===".page"));i.sort(o);const d=s(n),y=s(".page"),f=_(n),h=_(".page");return[f,h,...i,d,y].filter($e)}function Ge(e,t){return(l,s)=>{a(l.isDefaultPageFile&&s.isDefaultPageFile);{const _=l.isRendererPageFile,i=s.isRendererPageFile;if(!_&&i)return-1;if(!i&&_)return 1;a(_===i)}{const _=B(t,l.filePath),i=B(t,s.filePath);if(_<i)return-1;if(i<_)return 1;a(_===i)}{if(l.fileType===e&&s.fileType!==e)return-1;if(s.fileType===e&&l.fileType!==e)return 1}{if(l.fileType===".page"&&s.fileType!==".page")return 1;if(s.fileType===".page"&&l.fileType!==".page")return-1}return 0}}function B(e,t){x(e),x(t),a(e.startsWith("/")),a(t.startsWith("/"));let r=0;for(;r<e.length&&r<t.length&&e[r]===t[r];r++);const n=e.slice(r),o=t.slice(r),l=n.split("/").length,s=o.split("/").length;return l+s}function He(e,t){return Be(e,t)}const Je="modulepreload",G={},Ve="/",Fo=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${Ve}${n}`,n in G)return;G[n]=!0;const o=n.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${l}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":Je,o||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),o)return new Promise((_,i)=>{s.addEventListener("load",_),s.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},qe=["overrideDefaultPages"];var Io=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qe},Symbol.toStringTag,{value:"Module"}));const Ye=[];var Lo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ye},Symbol.toStringTag,{value:"Module"}));const Ke=[];var ko=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ke},Symbol.toStringTag,{value:"Module"}));const Qe=[];var Ao=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qe},Symbol.toStringTag,{value:"Module"}));const Xe=[];var Do=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xe},Symbol.toStringTag,{value:"Module"}));const Ze=["headings","default"];var Co=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ze},Symbol.toStringTag,{value:"Module"}));const et=["headings","default"];var Uo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:et},Symbol.toStringTag,{value:"Module"}));const tt=["headings","default"];var Bo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tt},Symbol.toStringTag,{value:"Module"}));const rt=["headings","default"];var Go=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rt},Symbol.toStringTag,{value:"Module"}));const ot=["headings","default"];var Ho=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ot},Symbol.toStringTag,{value:"Module"}));const nt=["headings","default"];var Jo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nt},Symbol.toStringTag,{value:"Module"}));const at=["headings","default"];var Vo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:at},Symbol.toStringTag,{value:"Module"}));const st=["headings","default"];var qo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:st},Symbol.toStringTag,{value:"Module"}));const lt=["headings","default"];var Yo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lt},Symbol.toStringTag,{value:"Module"}));const _t=["headings","default"];var Ko=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_t},Symbol.toStringTag,{value:"Module"}));const it=["headings","default"];var Qo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:it},Symbol.toStringTag,{value:"Module"}));const ut=["headings","default"];var Xo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ut},Symbol.toStringTag,{value:"Module"}));const ct=["render","Page"];var Zo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ct},Symbol.toStringTag,{value:"Module"}));const dt=["headings","default"];var en=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dt},Symbol.toStringTag,{value:"Module"}));const ft=["headings","default"];var tn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ft},Symbol.toStringTag,{value:"Module"}));const gt=["headings","default"];var rn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gt},Symbol.toStringTag,{value:"Module"}));const pt=["headings","default"];var on=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pt},Symbol.toStringTag,{value:"Module"}));const bt=["headings","default"];var nn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:bt},Symbol.toStringTag,{value:"Module"}));const mt=["headings","default"];var an=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mt},Symbol.toStringTag,{value:"Module"}));const vt=["headings","default"];var sn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vt},Symbol.toStringTag,{value:"Module"}));const xt=["headings","default"];var ln=Object.freeze(Object.defineProperty({__proto__:null,exportNames:xt},Symbol.toStringTag,{value:"Module"}));const yt=["headings","default"];var _n=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yt},Symbol.toStringTag,{value:"Module"}));const ht=["headings","default"];var un=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ht},Symbol.toStringTag,{value:"Module"}));const St=["headings","default"];var cn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:St},Symbol.toStringTag,{value:"Module"}));const jt=["headings","default"];var dn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jt},Symbol.toStringTag,{value:"Module"}));const Ot=["headings","default"];var fn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ot},Symbol.toStringTag,{value:"Module"}));const Nt=["headings","default"];var gn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Nt},Symbol.toStringTag,{value:"Module"}));const $t=["headings","default"];var pn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:$t},Symbol.toStringTag,{value:"Module"}));const Pt=["headings","default"];var bn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Pt},Symbol.toStringTag,{value:"Module"}));const Tt=["headings","default"];var mn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tt},Symbol.toStringTag,{value:"Module"}));const zt=["headings","default"];var vn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:zt},Symbol.toStringTag,{value:"Module"}));const Mt=["headings","default"];var xn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Mt},Symbol.toStringTag,{value:"Module"}));const wt=["headings","default"];var yn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:wt},Symbol.toStringTag,{value:"Module"}));const Et=["headings","default"];var hn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Et},Symbol.toStringTag,{value:"Module"}));const Wt=["headings","default"];var Sn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Wt},Symbol.toStringTag,{value:"Module"}));const Rt=["headings","default"];var jn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Rt},Symbol.toStringTag,{value:"Module"}));const Ft=["headings","default"];var On=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ft},Symbol.toStringTag,{value:"Module"}));const It=["headings","default"];var Nn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:It},Symbol.toStringTag,{value:"Module"}));const Lt=["headings","default"];var $n=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lt},Symbol.toStringTag,{value:"Module"}));const kt=["headings","default"];var Pn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:kt},Symbol.toStringTag,{value:"Module"}));const At=["headings","default"];var Tn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:At},Symbol.toStringTag,{value:"Module"}));const Dt=["headings","default"];var zn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Dt},Symbol.toStringTag,{value:"Module"}));const Ct=["headings","default"];var Mn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ct},Symbol.toStringTag,{value:"Module"}));const Ut=["headings","default"];var wn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ut},Symbol.toStringTag,{value:"Module"}));const Bt=["headings","default"];var En=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Bt},Symbol.toStringTag,{value:"Module"}));const Gt=["headings","default"];var Wn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Gt},Symbol.toStringTag,{value:"Module"}));const Ht=["headings","default"];var Rn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ht},Symbol.toStringTag,{value:"Module"}));const Jt=["headings","default"];var Fn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Jt},Symbol.toStringTag,{value:"Module"}));const Vt=["headings","default"];var In=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Vt},Symbol.toStringTag,{value:"Module"}));const qt=["headings","default"];var Ln=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qt},Symbol.toStringTag,{value:"Module"}));const Yt=["headings","default"];var kn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Yt},Symbol.toStringTag,{value:"Module"}));const Kt=["headings","default"];var An=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Kt},Symbol.toStringTag,{value:"Module"}));const Qt=["headings","default"];var Dn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qt},Symbol.toStringTag,{value:"Module"}));const Xt=["headings","default"];var Cn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xt},Symbol.toStringTag,{value:"Module"}));const Zt=["headings","default"];var Un=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Zt},Symbol.toStringTag,{value:"Module"}));const er=["headings","default"];var Bn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:er},Symbol.toStringTag,{value:"Module"}));const tr=["headings","default"];var Gn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tr},Symbol.toStringTag,{value:"Module"}));const rr=["headings","default"];var Hn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rr},Symbol.toStringTag,{value:"Module"}));const or=["headings","default"];var Jn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:or},Symbol.toStringTag,{value:"Module"}));const nr=["headings","default"];var Vn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nr},Symbol.toStringTag,{value:"Module"}));const ar=["headings","default"];var qn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ar},Symbol.toStringTag,{value:"Module"}));const sr=["headings","default"];var Yn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:sr},Symbol.toStringTag,{value:"Module"}));const lr=["Page"];var Kn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lr},Symbol.toStringTag,{value:"Module"}));const _r=["headings","default"];var Qn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_r},Symbol.toStringTag,{value:"Module"}));const ir=["headings","default"];var Xn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ir},Symbol.toStringTag,{value:"Module"}));const ur=["headings","default"];var Zn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ur},Symbol.toStringTag,{value:"Module"}));const cr=["headings","default"];var ea=Object.freeze(Object.defineProperty({__proto__:null,exportNames:cr},Symbol.toStringTag,{value:"Module"}));const dr=["headings","default"];var ta=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dr},Symbol.toStringTag,{value:"Module"}));const fr=["headings","default"];var ra=Object.freeze(Object.defineProperty({__proto__:null,exportNames:fr},Symbol.toStringTag,{value:"Module"}));const gr=["headings","default"];var oa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gr},Symbol.toStringTag,{value:"Module"}));const pr=["headings","default"];var na=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pr},Symbol.toStringTag,{value:"Module"}));const br=["headings","default"];var aa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:br},Symbol.toStringTag,{value:"Module"}));const mr=["headings","default"];var sa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mr},Symbol.toStringTag,{value:"Module"}));const vr=["headings","default"];var la=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vr},Symbol.toStringTag,{value:"Module"}));const xr=["headings","default"];var _a=Object.freeze(Object.defineProperty({__proto__:null,exportNames:xr},Symbol.toStringTag,{value:"Module"}));const yr=["headings","default"];var ia=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yr},Symbol.toStringTag,{value:"Module"}));const hr=["headings","default"];var ua=Object.freeze(Object.defineProperty({__proto__:null,exportNames:hr},Symbol.toStringTag,{value:"Module"}));const Sr=["headings","default"];var ca=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Sr},Symbol.toStringTag,{value:"Module"}));const jr=["headings","default"];var da=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jr},Symbol.toStringTag,{value:"Module"}));const Or=["headings","default"];var fa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Or},Symbol.toStringTag,{value:"Module"}));const Nr=["headings","default"];var ga=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Nr},Symbol.toStringTag,{value:"Module"}));const $r=["headings","default"];var pa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:$r},Symbol.toStringTag,{value:"Module"}));const Pr=["headings","default"];var ba=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Pr},Symbol.toStringTag,{value:"Module"}));const Tr=["headings","default"];var ma=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tr},Symbol.toStringTag,{value:"Module"}));const zr=["headings","default"];var va=Object.freeze(Object.defineProperty({__proto__:null,exportNames:zr},Symbol.toStringTag,{value:"Module"}));const Mr=["headings","default"];var xa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Mr},Symbol.toStringTag,{value:"Module"}));const wr=["headings","default"];var ya=Object.freeze(Object.defineProperty({__proto__:null,exportNames:wr},Symbol.toStringTag,{value:"Module"}));const Er=["headings","default"];var ha=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Er},Symbol.toStringTag,{value:"Module"}));const Wr=["headings","default"];var Sa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Wr},Symbol.toStringTag,{value:"Module"}));const Rr=["headings","default"];var ja=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Rr},Symbol.toStringTag,{value:"Module"}));const Fr=["headings","default"];var Oa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Fr},Symbol.toStringTag,{value:"Module"}));const Ir=["headings","default"];var Na=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ir},Symbol.toStringTag,{value:"Module"}));const Lr=["headings","default"];var $a=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lr},Symbol.toStringTag,{value:"Module"}));const kr=["headings","default"];var Pa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:kr},Symbol.toStringTag,{value:"Module"}));const Ar=["headings","default"];var Ta=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ar},Symbol.toStringTag,{value:"Module"}));const Dr=["headings","default"];var za=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Dr},Symbol.toStringTag,{value:"Module"}));const Cr=["headings","default"];var Ma=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Cr},Symbol.toStringTag,{value:"Module"}));const Ur=["headings","default"];var wa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ur},Symbol.toStringTag,{value:"Module"}));const Br=["headings","default"];var Ea=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Br},Symbol.toStringTag,{value:"Module"}));const Gr=["headings","default"];var Wa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Gr},Symbol.toStringTag,{value:"Module"}));const Hr=["headings","default"];var Ra=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Hr},Symbol.toStringTag,{value:"Module"}));const Jr=["headings","default"];var Fa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Jr},Symbol.toStringTag,{value:"Module"}));const Vr=["headings","default"];var Ia=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Vr},Symbol.toStringTag,{value:"Module"}));const qr=["headings","default"];var La=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qr},Symbol.toStringTag,{value:"Module"}));const Yr=["headings","default"];var ka=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Yr},Symbol.toStringTag,{value:"Module"}));const Kr=["headings","default"];var Aa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Kr},Symbol.toStringTag,{value:"Module"}));const Qr=["headings","default"];var Da=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qr},Symbol.toStringTag,{value:"Module"}));const Xr=["headings","default"];var Ca=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xr},Symbol.toStringTag,{value:"Module"}));const Zr=["headings","default"];var Ua=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Zr},Symbol.toStringTag,{value:"Module"}));const eo=["headings","default"];var Ba=Object.freeze(Object.defineProperty({__proto__:null,exportNames:eo},Symbol.toStringTag,{value:"Module"}));const to=["headings","default"];var Ga=Object.freeze(Object.defineProperty({__proto__:null,exportNames:to},Symbol.toStringTag,{value:"Module"}));const ro=["headings","default"];var Ha=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ro},Symbol.toStringTag,{value:"Module"}));const oo=["headings","default"];var Ja=Object.freeze(Object.defineProperty({__proto__:null,exportNames:oo},Symbol.toStringTag,{value:"Module"}));const no=["headings","default"];var Va=Object.freeze(Object.defineProperty({__proto__:null,exportNames:no},Symbol.toStringTag,{value:"Module"}));const ao=["headings","default"];var qa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ao},Symbol.toStringTag,{value:"Module"}));const so=["headings","default"];var Ya=Object.freeze(Object.defineProperty({__proto__:null,exportNames:so},Symbol.toStringTag,{value:"Module"}));const lo=["headings","default"];var Ka=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lo},Symbol.toStringTag,{value:"Module"}));const _o=["headings","default"];var Qa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_o},Symbol.toStringTag,{value:"Module"}));const io=["headings","default"];var Xa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:io},Symbol.toStringTag,{value:"Module"}));const uo=["headings","default"];var Za=Object.freeze(Object.defineProperty({__proto__:null,exportNames:uo},Symbol.toStringTag,{value:"Module"}));const co=["headings","default"];var es=Object.freeze(Object.defineProperty({__proto__:null,exportNames:co},Symbol.toStringTag,{value:"Module"}));const fo=["headings","default"];var ts=Object.freeze(Object.defineProperty({__proto__:null,exportNames:fo},Symbol.toStringTag,{value:"Module"}));const go=["headings","default"];var rs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:go},Symbol.toStringTag,{value:"Module"}));const po=["headings","default"];var os=Object.freeze(Object.defineProperty({__proto__:null,exportNames:po},Symbol.toStringTag,{value:"Module"}));const bo=["headings","default"];var ns=Object.freeze(Object.defineProperty({__proto__:null,exportNames:bo},Symbol.toStringTag,{value:"Module"}));const mo=["render"];var as=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mo},Symbol.toStringTag,{value:"Module"}));const{projectVersion:W}=m,H="__vite_plugin_ssr_version",J=globalThis[H]=globalThis[H]=W;g(J===W,`Multiple versions \`vite-pluging-ssr@${J}\` and \`vite-pluging-ssr@${W}\` loaded. Make sure to load the same version.`);function ss(e){const t=window.location.href,{origin:r,searchOriginal:n,hashOriginal:o,pathnameOriginal:l}=be(t,"/");let s;if(e!=null&&e.withoutHash){s=`${l}${n||""}`;const _=`${r||""}${s}${o||""}`;a(t===_,{url:t,urlRecreated:_})}else{s=`${l}${n||""}${o||""}`;const _=`${r||""}${s}`;a(t===_,{url:t,urlRecreated:_})}return s}const vo=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt=="undefined")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),r=t[1],n=t[2];return new RegExp(r,n)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function X(e){const t=JSON.parse(e);return Z(t)}function Z(e){return typeof e=="string"?xo(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,r])=>{e[t]=Z(r)}),e)}function xo(e){for(const{match:t,deserialize:r}of vo)if(t(e))return r(e,X);return e}function ls(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;a(t);const r=X(t);a(c(r,"pageContext","object"));const{pageContext:n}=r;if(a(c(n,"_pageId","string")),"_serverSideErrorWhileStreaming"in n)throw fe("An error occurred on the server while rendering/streaming to HTML. Check your server logs.");return V(n,{_pageContextRetrievedFromServer:D({},n),_comesDirectlyFromServer:!0}),n}function yo(e,t){if(!(t in e.exports))return null;const r=e.exports[t],n=e.exportsAll[t][0];a(n.exportValue===r);const o=n._filePath;return a(o),a(!t.endsWith(")")),g(I(r),`\`export { ${t} }\` of ${o} should be a function`),{hook:r,filePath:o}}function ho(e,t){yo(e,t)}function So(e){const t=Object.entries(e);for(const r in e)delete e[r];t.sort(([r],[n])=>Ne(r,n)).forEach(([r,n])=>{e[r]=n})}function _s(e){a("exports"in e),a("pageExports"in e),a(S(e.pageExports)),a([!0,!1].includes(e.isHydration));const t=e.exports.Page;return V(e,{Page:t}),Po(e),So(e),a([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?No(e):e}const jo=["then","toJSON"],Oo=["_pageId","_serverSideErrorWhileStreaming"];let N=!1;function No(e){return new Proxy(e,{get:r});function t(n){return!(n in e||jo.includes(n)||typeof n=="symbol"||typeof n!="string"||n.startsWith("__v_"))}function r(n,o){return N!==!1&&N!==o&&$o(e._pageContextRetrievedFromServer,o,t(o)),N=o,window.setTimeout(()=>{N=!1},0),e[o]}}function $o(e,t,r){if(!r||e===null)return;const n=Object.keys(e).filter(o=>!Oo.includes(o));g(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${n.map(o=>`'${o}'`).join(", ")}]\`.)`,"More infos at https://vite-plugin-ssr.com/passToClient"].join(" "))}function Po(e){Object.entries(e).forEach(([t,r])=>{delete e[t],e[t]=r})}const ee="__whileFetchingAssets";async function is(e,t){const r=He(e,t);try{await Promise.all(r.map(_=>{var i;return(i=_.loadFile)===null||i===void 0?void 0:i.call(_)}))}catch(_){throw _&&Object.assign(_,{[ee]:!0}),_}const{exports:n,exportsAll:o,pageExports:l}=we(r);return{exports:n,exportsAll:o,pageExports:l,_pageFilesLoaded:r}}function us(e){return e?e[ee]===!0:!1}function cs(e){var t;if(c(e.exports,"render"))ho(e,"render");else{const r=e._pageFilesLoaded.filter(o=>o.fileType===".page.client");let n;if(r.length===0){const o=(t=e.url)!==null&&t!==void 0?t:window.location.href;n="No file `*.page.client.*` found for URL "+o}else n="One of the following files should export a `render()` hook: "+r.map(o=>o.filePath).join(" ");g(!1,n)}}export{jn as $,Ko as A,Qo as B,Xo as C,Zo as D,en as E,tn as F,rn as G,on as H,nn as I,an as J,sn as K,ln as L,_n as M,un as N,cn as O,dn as P,fn as Q,gn as R,pn as S,bn as T,mn as U,vn as V,xn as W,yn as X,hn as Y,Sn as Z,Fo as _,a,Wa as a$,On as a0,Nn as a1,$n as a2,Pn as a3,Tn as a4,zn as a5,Mn as a6,wn as a7,En as a8,Wn as a9,sa as aA,la as aB,_a as aC,ia as aD,ua as aE,ca as aF,da as aG,fa as aH,ga as aI,pa as aJ,ba as aK,ma as aL,va as aM,xa as aN,ya as aO,ha as aP,Sa as aQ,ja as aR,Oa as aS,Na as aT,$a as aU,Pa as aV,Ta as aW,za as aX,Ma as aY,wa as aZ,Ea as a_,Rn as aa,Fn as ab,In as ac,Ln as ad,kn as ae,An as af,Dn as ag,Cn as ah,Un as ai,Bn as aj,Gn as ak,Hn as al,Jn as am,Vn as an,qn as ao,Yn as ap,Kn as aq,Qn as ar,Xn as as,Zn as at,ea as au,ta as av,ra as aw,oa as ax,na as ay,aa as az,ge as b,Ra as b0,Fa as b1,Ia as b2,La as b3,ka as b4,Aa as b5,Da as b6,Ca as b7,Ua as b8,Ba as b9,xe as bA,Wo as bB,He as bC,pe as bD,zo as bE,us as bF,cs as bG,ho as bH,Ga as ba,Ha as bb,Ja as bc,Va as bd,qa as be,Ya as bf,Ka as bg,Qa as bh,Xa as bi,Za as bj,es as bk,ts as bl,rs as bm,os as bn,ns as bo,as as bp,Eo as bq,ss as br,Ro as bs,ls as bt,is as bu,wo as bv,yo as bw,_s as bx,X as by,fe as bz,g as c,Mo as d,S as e,L as f,Io as g,c as h,I as i,Lo as j,ko as k,Ao as l,je as m,Do as n,V as o,be as p,Co as q,Uo as r,T as s,Bo as t,Go as u,Ho as v,Jo as w,Vo as x,qo as y,Yo as z};
