"use strict";(self.webpackChunknanosupport=self.webpackChunknanosupport||[]).push([[598],{4598:(e,r,n)=>{n.r(r),n.d(r,{KMZLoader:()=>s});var o=n(7749),t=n(4362),a=n(6488);class s extends o.Loader{constructor(e){super(e)}load(e,r,n,t){const a=this,s=new o.FileLoader(a.manager);s.setPath(a.path),s.setResponseType("arraybuffer"),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(e,(function(n){try{r(a.parse(n))}catch(r){t?t(r):console.error(r),a.manager.itemError(e)}}),n,t)}parse(e){const r=new o.LoadingManager;r.setURLModifier((function(e){const r=function(e){for(const r in n)if(r.slice(-e.length)===e)return n[r]}(e);if(r){console.log("Loading",e);const n=new Blob([r.buffer],{type:"application/octet-stream"});return URL.createObjectURL(n)}return e}));const n=a.unzipSync(new Uint8Array(e));if(n["doc.kml"]){const e=(new DOMParser).parseFromString(a.strFromU8(n["doc.kml"]),"application/xml").querySelector("Placemark Model Link href");if(e)return new t.ColladaLoader(r).parse(a.strFromU8(n[e.textContent]))}else{console.warn("KMZLoader: Missing doc.kml file.");for(const e in n)if("dae"===e.split(".").pop().toLowerCase())return new t.ColladaLoader(r).parse(a.strFromU8(n[e]))}return console.error("KMZLoader: Couldn't find .dae file."),{scene:new o.Group}}}}}]);