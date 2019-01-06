(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fileUri="https://dl.dropbox.com/s/9n6j3bkmby1i8a3/album-of-the-day.csv",t.lastFmToken="2705c81fa3f15e0ced0718eae02f1795"},163:function(e,t,n){e.exports=n(164)},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(28),a=n(166),r=n(170);n(401);const i=n(403);a.render(o.createElement(r.default,null),document.getElementById("root")),i.default()},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(28);n(171);const a=n(173),r=n(87),i=n(88),c=n(400);t.default=(()=>{const[e,t]=r.default(()=>c.getRecords(),[],[]),[n,s]=i.default(),[l,u]=i.default(),[d,f]=i.default(),[m,p]=i.default(),g=o.useMemo(()=>e.map(({album:e,artist:t,date:o,rating:a})=>({album:e,artist:t,date:o,rating:a,show:!n&&!l&&!d&&!m||n&&a>=8.1||l&&a>=6.1&&a<8.1||d&&a>=4.1&&a<6.1||m&&a<4.1})),[n,l,d,m,e]);return t?o.createElement("p",null,"loading..."):o.createElement("div",{className:"App"},o.createElement("header",null,o.createElement("h1",null,"albums of 2019"),o.createElement("span",{className:n?"active":"",onClick:s},"\ud83d\ude0d"),o.createElement("span",{className:l?"active":"",onClick:u},"\ud83d\ude0a"),o.createElement("span",{className:d?"active":"",onClick:f},"\ud83d\ude42"),o.createElement("span",{className:m?"active":"",onClick:p},"\ud83d\ude10")),o.createElement("div",{className:"Records"},g.map(e=>o.createElement("div",{key:e.artist+e.album,className:e.show?"show":"hide"},o.createElement(a.default,Object.assign({},e))))))})},171:function(e,t,n){},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(28),a=n(87),r=n(88),i=n(174);n(398);const c=o.memo(e=>{const{artist:t,album:n,rating:c}=e,[s,l]=a.default(()=>i.getAlbumArtUri(e),void 0,[t,n]),[u,d]=r.default(),f=!l&&!s,m={10:"\ud83d\ude0d",8:"\ud83d\ude0a",6:"\ud83d\ude42",4:"\ud83d\ude10"}[c]||"\ud83d\ude42";return o.createElement("div",{className:"Record"+(f?" empty":""),onClick:d},s&&o.createElement("img",{src:s}),l&&o.createElement("div",{className:"Details"},o.createElement("h1",null,"loading"),o.createElement("h2",null,"album art")),(u||f)&&o.createElement("div",{className:"Details"},o.createElement("h1",null,t),o.createElement("h2",null,n),o.createElement("span",{className:"emoji"},m)))});t.default=c},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(89),a=n(90),r=n(162);t.getAlbumArtUri=function({artist:e,album:t}){return o.__awaiter(this,void 0,void 0,function*(){const n=encodeURIComponent(e),o=encodeURIComponent(t),i="http://ws.audioscrobbler.com/2.0/?method=album.getinfo"+`&api_key=${r.lastFmToken}&artist=${n}&album=${o}&autocorrect=1&format=json`;let c;try{c=JSON.parse(yield a.get(i))}catch(s){return}if(!c.error){const e=c.album.image;return e[e.length-1]["#text"]||void 0}})}},199:function(e,t){},201:function(e,t){},233:function(e,t){},234:function(e,t){},303:function(e,t){},398:function(e,t,n){},400:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(89),a=n(90),r=n(162);t.getRecords=function(){return o.__awaiter(this,void 0,void 0,function*(){return(yield a.get(r.fileUri)).split("\n").map(e=>e.split(",")).map(([e,t,n,o])=>({album:n,artist:t,date:new Date(Date.parse(e)),rating:Number(o)}))})}},401:function(e,t,n){},403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t&&(t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}))})}).catch(e=>{console.error("Error during service worker registration:",e)})}t.default=function(){if("serviceWorker"in navigator){if(new URL("/now-playing",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/now-playing/service-worker.js";o?(function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):a(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):a(e)})}},t.unregister=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(28);t.default=function(e,t,n){const[a,r]=o.useState(!1),[i,c]=o.useState(t);return o.useEffect(()=>{r(!0),e().then(e=>{r(!1),c(e)},()=>r(!1))},n),[i,a]}},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(28);t.default=function(e){const[t,n]=o.useState(!!e),a=o.useCallback(()=>{n(!t)},[t,n]);return[t,a]}}},[[163,2,1]]]);
//# sourceMappingURL=main.c9d9151d.chunk.js.map