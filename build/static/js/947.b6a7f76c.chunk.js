"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[947],{947:function(n,e,t){t.r(e);var r=t(439),i=t(791),c=t(689),o=t(87),s=t(418),a=t(568),u=t(184);e.default=function(){var n=(0,c.UO)().movieId,e=(0,i.useState)(null),t=(0,r.Z)(e,2),d=t[0],f=t[1];return(0,i.useEffect)((function(){(0,s.Y5)(n).then(f)}),[n]),d?(0,u.jsxs)("div",{className:a.Z.container,children:[(0,u.jsx)("h1",{children:d.title}),(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(d.poster_path),alt:d.title}),(0,u.jsxs)("p",{children:[(0,u.jsx)("strong",{children:"User Score:"})," ",10*d.vote_average,"%"]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("strong",{children:"Overview:"})," ",d.overview]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("strong",{children:"Genres:"})," ",d.genres.map((function(n){return n.name})).join(", ")]}),(0,u.jsx)("h2",{children:"Additional Informations"}),(0,u.jsxs)("div",{children:[(0,u.jsx)(o.rU,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"}),(0,u.jsx)(o.rU,{to:"/movies/".concat(n,"/cast"),children:"Cast"})]}),(0,u.jsx)(c.j3,{})," "]}):(0,u.jsx)("div",{children:"Loading..."})}},418:function(n,e,t){t.d(e,{Hx:function(){return h},Y5:function(){return f},uV:function(){return v},wr:function(){return u},z1:function(){return d}});var r=t(861),i=t(757),c=t.n(i),o="0dbe1ca7342e7e9210eecd0a9bce9cbe",s="https://api.themoviedb.org/3",a=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,i,a,u=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=u.length>1&&void 0!==u[1]?u[1]:{}).api_key=o,r=new URLSearchParams(t).toString(),i="".concat(s).concat(e,"?").concat(r),n.next=6,fetch(i);case 6:if((a=n.sent).ok){n.next=9;break}throw new Error("TMDB API request failed: ".concat(a.status));case 9:return n.abrupt("return",a.json());case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){return a("/trending/movie/day")},d=function(n){return a("/search/movie",{query:encodeURIComponent(n)})},f=function(n){return a("/movie/".concat(n))},v=function(n){return a("/movie/".concat(n,"/credits"))},h=function(n){return a("/movie/".concat(n,"/reviews"))}},861:function(n,e,t){function r(n,e,t,r,i,c,o){try{var s=n[c](o),a=s.value}catch(u){return void t(u)}s.done?e(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,c){var o=n.apply(e,t);function s(n){r(o,i,c,s,a,"next",n)}function a(n){r(o,i,c,s,a,"throw",n)}s(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=947.b6a7f76c.chunk.js.map