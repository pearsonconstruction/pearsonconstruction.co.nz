if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-6aebc255"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"33cdfda9933f1e49deff5a9f317e8cec"},{url:"pearson-construction.921f7547cb46da89f013.css",revision:null},{url:"pearson-construction.e5f4bb492728521b265e.js",revision:null},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"}],{}),e.registerRoute(/\.(png|svg|jpg|jpeg|gif|webp)$/i,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET")}));
