(function(){var e={7661:function(e,t,n){"use strict";var o=n(9242),r=n(3396);const i={class:"w-90 sm:w-1/2 m-10 mx-auto bg-white"};function c(e,t,n,o,c,l){const a=(0,r.up)("HeaderView"),s=(0,r.up)("MainView");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a),(0,r._)("div",i,[(0,r.Wm)(s)])],64)}const l={class:"flex justify-center items-center bg-rose-500 h-20 shadow-xl"},a=(0,r._)("a",{class:"text-4xl font-bold text-zinc-900 font-serif"},"Keyframe Extractor",-1),s=[a];function u(e,t){return(0,r.wg)(),(0,r.iD)("header",l,s)}var d=n(89);const f={},p=(0,d.Z)(f,[["render",u]]);var g=p,h=n(7139);function m(e){const t=document.getElementById("inputBtn"),n=document.getElementById("displayVideo"),o=document.getElementById("result");0!=o.childNodes.length&&(o.innerHTML="");const r=t.files;if(r.length<1)return;n.src&&(n.src="");const i=URL.createObjectURL(r[0]);n.src=i,n.hidden=!1,console.log(n.src),n.addEventListener("durationchange",(function(){console.log("video.videoHeight: ",n.videoHeight),console.log("video.videoWidth: ",n.videoWidth),n.videoHeight>n.videoWidth?(console.log("toFalse"),console.log("flg: ",e.value),e.value=!1):(console.log("toTrue"),console.log("flg: ",e.value),e.value=!0)}),{once:!0})}function v(){const e=document.getElementById("inputBtn");e.click()}var w={pushInputBtn:v,onFileSelected:m},x=n(6383),y=n.n(x);const b=[0],_=[256],C=[0,256];function M(e,t,n,o,r){return o.fillStyle="rgb(0, 0, 0)",o.fillRect(.9*e,.9*t,.95*e,.95*t),o.font="10px serif",o.fillStyle="rgb(255, 255, 255)",o.fillText(String(n),.92*e,.98*t),r.data.set(o.getImageData(0,0,e,t).data),r}function O(e,t,n,o){const r=new(y().Mat)(t,e,y().CV_8UC1);y().cvtColor(n,r,y().COLOR_RGBA2GRAY);const i=new(y().MatVector);return i.push_back(r),y().calcHist(i,b,new(y().Mat),o,_,C),y().normalize(o,o,1,0,y().NORM_L1),i.delete(),r.delete(),o}function I(){const e=document.getElementById("displayVideo");if(e.hidden)throw alert("入力映像が見つかりません"),new Error("no input video");const t=document.getElementById("result");0!=t.childNodes.length&&(t.innerHTML="");const n=.0333,o=e.getBoundingClientRect(),r=o.width,i=o.height,c=e.duration;e.play(),e.pause(),e.currentTime=0,e.controls=!1;let l=1,a=0,s=new(y().Mat)(i,r,y().CV_8UC1),u=new(y().Mat)(i,r,y().CV_8UC1);const d=setInterval((function(){if(e.ended||c-e.currentTime<.01)return t.scrollIntoView({behavior:"smooth"}),s.delete(),u.delete(),e.controls=!0,void clearInterval(d);if(e.readyState>3){const o=document.createElement("canvas");o.width=r,o.height=i;const c=o.getContext("2d",{willReadFrequently:!0});c.drawImage(e,0,0,r,i);const d=new(y().Mat)(i,r,y().CV_8UC4);d.data.set(c.getImageData(0,0,r,i).data),s=O(r,i,d,s),l>1&&(a=y().compareHist(s,u,0)),(l<2||a<.7)&&(u=s.clone(),M(r,i,l,c,d),y().imshow(o,d),t.appendChild(o)),d.delete(),e.currentTime+=n,l+=1}}),0)}var V={mainprocess:I},B=n(4870);const H=(0,r._)("video",{id:"displayVideo",src:"",hidden:"",class:"mx-auto rounded-2xl",preload:"auto",controls:""},null,-1),j=[H],k=(0,r._)("p",{class:"text-xl text-white font-momo"},"select video",-1),E=(0,r._)("p",{class:"text-2xl font-momo tracking-wider"},"run",-1),R=[E],T=(0,r._)("div",{id:"result",class:"flex flex-row flex-wrap gap-1 lg:m-0 justify-center"},null,-1);var L=(0,r.aZ)({__name:"MainView",setup(e){const t=(0,B.iH)(!0),n=()=>{w.onFileSelected(t)},o=()=>{w.pushInputBtn()},i=()=>{V.mainprocess()};return(e,c)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{id:"inputArea",class:(0,h.C_)([t.value?"landscape":"portrait"])},j,2),(0,r._)("button",{onMousedown:o,class:"flex justify-center items-center my-8 cursor-pointer bg-rose-700 hover:bg-rose-800 active:bg-rose-900 drop-shadow-lg hover:drop-shadow-md rounded-lg border-rose-300 w-80 h-10 mx-auto"},[k,(0,r._)("input",{type:"file",hidden:"",id:"inputBtn",accept:".mp4",onChange:n},null,32)],32),(0,r._)("button",{onMousedown:i,class:"flex justify-center items-center my-8 cursor-pointer bg-gradient-to-r from-indigo-500 via-rose-600 to-pink-500 drop-shadow-lg text-white hover:text-gray-200 hover:drop-shadow-md rounded-lg border-rose-300 w-80 h-10 mx-auto"},R,32),T],64))}});const S=L;var U=S,D=(0,r.aZ)({name:"App",components:{HeaderView:g,MainView:U}});const F=(0,d.Z)(D,[["render",c]]);var W=F;(0,o.ri)(W).mount("#app")},3499:function(){},2999:function(){},8300:function(){}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var c=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var l=!0,a=0;a<o.length;a++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(l=!1,i<c&&(c=i));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,c=o[0],l=o[1],a=o[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(a)var u=a(n)}for(t&&t(o);s<c.length;s++)i=c[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkkeyframe_extractor"]=self["webpackChunkkeyframe_extractor"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7661)}));o=n.O(o)})();
//# sourceMappingURL=app.7b050589.js.map