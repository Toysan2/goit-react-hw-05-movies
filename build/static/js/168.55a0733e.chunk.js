"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(439),c=t(791),i=t(689),o=t(418),u="Reviews_container__RWoyl",a="Reviews_review__0DE2G",s=t(184),f=function(){var n=(0,i.UO)().movieId,e=(0,c.useState)([]),t=(0,r.Z)(e,2),f=t[0],v=t[1];return(0,c.useEffect)((function(){(0,o.Hx)(n).then((function(n){return v(n.results)}))}),[n]),0===f.length?(0,s.jsx)("div",{className:u,children:"We don't have any reviews for this movie."}):(0,s.jsx)("div",{className:u,children:f.map((function(n){return(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)("h3",{children:n.author}),(0,s.jsx)("p",{children:n.content})]},n.id)}))})}},418:function(n,e,t){t.d(e,{Hx:function(){return d},Y5:function(){return v},uV:function(){return h},wr:function(){return s},z1:function(){return f}});var r=t(861),c=t(757),i=t.n(c),o="0dbe1ca7342e7e9210eecd0a9bce9cbe",u="https://api.themoviedb.org/3",a=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,c,a,s=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=s.length>1&&void 0!==s[1]?s[1]:{}).api_key=o,r=new URLSearchParams(t).toString(),c="".concat(u).concat(e,"?").concat(r),n.next=6,fetch(c);case 6:if((a=n.sent).ok){n.next=9;break}throw new Error("TMDB API request failed: ".concat(a.status));case 9:return n.abrupt("return",a.json());case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){return a("/trending/movie/day")},f=function(n){return a("/search/movie",{query:encodeURIComponent(n)})},v=function(n){return a("/movie/".concat(n))},h=function(n){return a("/movie/".concat(n,"/credits"))},d=function(n){return a("/movie/".concat(n,"/reviews"))}},861:function(n,e,t){function r(n,e,t,r,c,i,o){try{var u=n[i](o),a=u.value}catch(s){return void t(s)}u.done?e(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,i){var o=n.apply(e,t);function u(n){r(o,c,i,u,a,"next",n)}function a(n){r(o,c,i,u,a,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=168.55a0733e.chunk.js.map