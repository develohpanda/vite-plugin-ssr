n();function n(){document.getElementById("npm-init-code-snippet").onclick=async()=>{window.navigator.clipboard&&await window.navigator.clipboard.writeText("npm init vite-plugin-ssr@latest");const t=document.getElementById("npm-init-code-snippet"),i="aria-label",e=t.getAttribute(i);t.setAttribute(i,"Copied"),setTimeout(()=>{t.setAttribute(i,e)},1200)}}