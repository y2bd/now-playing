(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fileUri="https://dl.dropbox.com/s/9n6j3bkmby1i8a3/album-of-the-day.csv",t.lastFmToken="2705c81fa3f15e0ced0718eae02f1795"},163:function(e,t,n){e.exports=n(164)},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(25),a=n(166),r=n(170);n(402);const c=n(404);a.render(o.createElement(r.default,null),document.getElementById("root")),c.default()},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(25);n(171);const a=n(173),r=n(87),c=n(88),i=n(401);t.default=(()=>{const[e]=r.default("records",()=>i.getRecords(),[],[]),[t,n]=c.default(),[s,l]=c.default(),[u,d]=c.default(),[m,f]=c.default(),g=o.useMemo(()=>e.map(({album:e,artist:n,date:o,rating:a})=>({album:e,artist:n,date:new Date(Date.parse(o)+324e5),rating:a,show:!t&&!s&&!u&&!m||t&&a>=8.1||s&&a>=6.1&&a<8.1||u&&a>=4.1&&a<6.1||m&&a<4.1})),[t,s,u,m,e]),p=o.useMemo(()=>g.reduce((e,t)=>{const n=t.date.getMonth(),o=t.date.toLocaleString("en-us",{month:"long"});return void 0===e[n]&&(e[n]={[o]:[]}),e[n][o].push(t),e},[]).reverse(),[g]);return o.createElement("div",{className:"App"},o.createElement("header",null,o.createElement("h1",null,"albums of 2019"),o.createElement("span",{className:t?"active":"",onClick:n},"\ud83d\ude0d"),o.createElement("span",{className:s?"active":"",onClick:l},"\ud83d\ude0a"),o.createElement("span",{className:u?"active":"",onClick:d},"\ud83d\ude42"),o.createElement("span",{className:m?"active":"",onClick:f},"\ud83d\ude10")),p.map(e=>Object.keys(e).map(t=>o.createElement(o.Fragment,null,o.createElement("h2",null,t," (",e[t].length,")"),o.createElement("div",{className:"Records"},e[t].map(e=>o.createElement("div",{key:e.artist+e.album,className:e.show?"show":"hide"},o.createElement(a.default,Object.assign({},e)))))))))})},171:function(e,t,n){},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(25),a=n(87),r=n(88),c=n(175);n(399);const i=o.memo(e=>{const{artist:t,album:n,rating:i}=e,[s,l,u]=a.default(encodeURIComponent(`${t}_${n}`),()=>c.getAlbumArtUri(e),void 0,[t,n]),[d,m]=r.default(),f=!l&&!s,g={10:"\ud83d\ude0d",8:"\ud83d\ude0a",6:"\ud83d\ude42",4:"\ud83d\ude10"}[i]||"\ud83d\ude42";return o.createElement("div",{className:"Record"+(f?" empty":""),onClick:m},s&&o.createElement("img",{src:s}),l&&!s&&o.createElement("div",{className:"Details"},o.createElement("h1",null,"loading"),o.createElement("h2",null,"album art")),(d||f||u)&&o.createElement("div",{className:"Details"},o.createElement("h1",null,t),o.createElement("h2",null,n),o.createElement("span",{className:"emoji"},g)))});t.default=i},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(25);t.default=((e,t)=>{const[n,a]=o.useState(!1);if(!n)try{const n=window.localStorage.getItem(e),o=n&&JSON.parse(n);null!==o&&(t=o)}finally{a(!0)}const[r,c]=o.useState(t);return[r,o.useCallback(t=>{c(t);try{if(void 0==t)window.localStorage.removeItem(e);else{const n=JSON.stringify(t);window.localStorage.setItem(e,n)}}catch(n){return}},[e,c])]})},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(89),a=n(90),r=n(162);t.getAlbumArtUri=function({artist:e,album:t}){return o.__awaiter(this,void 0,void 0,function*(){const n=encodeURIComponent(e),o=encodeURIComponent(t),c="http://ws.audioscrobbler.com/2.0/?method=album.getinfo"+`&api_key=${r.lastFmToken}&artist=${n}&album=${o}&autocorrect=1&format=json`;let i;try{i=JSON.parse(yield a.get(c))}catch(s){return}if(!i.error){const e=i.album.image;return e[e.length-1]["#text"]||void 0}})}},200:function(e,t){},202:function(e,t){},234:function(e,t){},235:function(e,t){},304:function(e,t){},399:function(e,t,n){},401:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(89),a=n(90),r=n(162);t.getRecords=function(){return o.__awaiter(this,void 0,void 0,function*(){return(yield a.get(r.fileUri)).split("\n").map(e=>e.split(",")).map(([e,t,n,o])=>({album:n,artist:t,date:new Date(Date.parse(e)),rating:Number(o)}))})}},402:function(e,t,n){},404:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t&&(t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}))})}).catch(e=>{console.error("Error during service worker registration:",e)})}t.default=function(){if("serviceWorker"in navigator){if(new URL("/now-playing",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/now-playing/service-worker.js";o?(function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):a(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):a(e)})}},t.unregister=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(25),a=n(174);t.default=function(e,t,n,r){const[c,i]=a.default(e,n),[s,l]=o.useState(!1),[u,d]=o.useState(void 0);return o.useEffect(()=>{l(!0),t().then(e=>{l(!1),i(e)}).catch(e=>{l(!1),d(e)})},r),[c,s,u]}},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(25);t.default=function(e){const[t,n]=o.useState(!!e),a=o.useCallback(()=>{n(!t)},[t,n]);return[t,a]}}},[[163,2,1]]]);
//# sourceMappingURL=main.035d87a7.chunk.js.map