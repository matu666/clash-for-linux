if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const t=s=>i(s,r),u={module:{uri:r},exports:o,require:t};e[r]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(l(...s),o)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Config-CMduwkgP.js",revision:null},{url:"assets/Connections-BtFA_2WA.js",revision:null},{url:"assets/DocumentTitle-C_wFLE7d.js",revision:null},{url:"assets/IconReload-Kdcf5E4G.js",revision:null},{url:"assets/index-DVjZHFUB.js",revision:null},{url:"assets/index-M06kPDrB.css",revision:null},{url:"assets/index-nq5HZXSX.js",revision:null},{url:"assets/Logs-CgGR6R1B.js",revision:null},{url:"assets/Overview-DamqomDW.js",revision:null},{url:"assets/Proxies-CQbNv087.js",revision:null},{url:"assets/Rules-CRoK9SeM.js",revision:null},{url:"assets/Setup-afnxihz-.js",revision:null},{url:"assets/time-D3lU_mcF.js",revision:null},{url:"index.html",revision:"f9650d8c493ffc826a626177d336e842"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.svg",revision:"f5b3372f312fbbe60a6ed8c03741ff80"},{url:"pwa-192x192.png",revision:"c45f48fc59b5bf47e6cbf1626aff51fc"},{url:"pwa-512x512.png",revision:"a311504ae6a46bd29b5678a410aaafc6"},{url:"manifest.webmanifest",revision:"f0952d333375ba4273b4372ffa349b8b"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));