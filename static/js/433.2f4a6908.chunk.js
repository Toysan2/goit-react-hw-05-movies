"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{11:function(e,n,r){r.r(n),r.d(n,{default:function(){return i}});var t=r(439),o=r(791),c=r(511),a={homeContainer:"Home_homeContainer__oCE2T",movieList:"Home_movieList__dew6t",movieItem:"Home_movieItem__yfa+9"},u=r(184),i=function(){var e=(0,o.useState)([]),n=(0,t.Z)(e,2),r=n[0],i=n[1];return(0,o.useEffect)((function(){(0,c.Df)().then((function(e){return i(e.results)}))}),[]),(0,u.jsxs)("div",{className:a.container,children:[(0,u.jsx)("h1",{children:"Popularne Filmy"}),(0,u.jsx)("ul",{children:r.map((function(e){return(0,u.jsx)("li",{children:e.title},e.id)}))})]})}},511:function(e,n,r){r.d(n,{Df:function(){return i},TP:function(){return f},z1:function(){return s}});var t=r(861),o=r(757),c=r.n(o),a="0dbe1ca7342e7e9210eecd0a9bce9cbe",u="https://api.themoviedb.org/3",i=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/trending/movie/day?api_key=").concat(a));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/search/movie?api_key=").concat(a,"&query=").concat(encodeURIComponent(n)));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(n,"?api_key=").concat(a));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}()},861:function(e,n,r){function t(e,n,r,t,o,c,a){try{var u=e[c](a),i=u.value}catch(s){return void r(s)}u.done?n(i):Promise.resolve(i).then(t,o)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(o,c){var a=e.apply(n,r);function u(e){t(a,o,c,u,i,"next",e)}function i(e){t(a,o,c,u,i,"throw",e)}u(void 0)}))}}r.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=433.2f4a6908.chunk.js.map