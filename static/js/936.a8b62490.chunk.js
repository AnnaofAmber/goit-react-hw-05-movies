"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{639:function(t,e,n){n.d(e,{a:function(){return s}});var r=n(920),a="Loader_loaderWrapper__6ypwD",c=n(184),s=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.NB,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",colors:["#F99417","#d2cdfc","#ffc374","#d2cdfc","#F99417"]})})}},155:function(t,e,n){n.d(e,{O:function(){return p}});var r="MoviesList_container__0JGj2",a="MoviesList_item__eePYv",c="MoviesList_img__v4jFC",s="MoviesList_link__8rTGX",i="MoviesList_title__PB2c8",u=n(87),o=n(184),p=function(t){var e=t.data,n=t.location;return(0,o.jsx)("ul",{className:r,children:e.map((function(t){var e=t.title,r=t.id,p=t.poster_path;return(0,o.jsx)("li",{className:a,children:(0,o.jsxs)(u.rU,{state:{from:n},className:s,to:"/movies/".concat(r),children:[(0,o.jsx)("img",{className:c,src:p?"https://image.tmdb.org/t/p/w300/".concat(p):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e}),(0,o.jsx)("span",{className:i,children:e})]})},r)}))})}},936:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i="Home_container__w+u63",u="Home_title__L087v",o=n(686),p=n.n(o),f=n(791),l=n(394),v=n(639),d=n(155),h=n(184),m=function(){var t=(0,f.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],o=(0,f.useState)(!1),m=(0,a.Z)(o,2),_=m[0],x=m[1],w=(0,f.useState)(!1),g=(0,a.Z)(w,2),k=g[0],y=g[1];return(0,f.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,l.wr)();case 4:e=t.sent,0===n.length&&c(e),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),y(!0),p().Notify.failure("Oops! Something went wrong! Error ".concat(k," Try reloading the page!"));case 12:return t.prev=12,x(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[k,n]),(0,h.jsxs)("div",{className:i,children:[n.length>0&&(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:u,children:"Trending movies"}),(0,h.jsx)(d.O,{data:n})]}),_&&(0,h.jsx)(v.a,{})]})}},394:function(t,e,n){n.d(e,{E3:function(){return v},gQ:function(){return p},oO:function(){return l},wr:function(){return o},y:function(){return f}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="https://api.themoviedb.org/3",u="548e96f0a88257a9c2a7854f478e0cd8",o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u));case 2:return e=t.sent,n=e.data,r=n.results,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u));case 2:return n=t.sent,r=n.data,a=r.cast,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 2:return n=t.sent,r=n.data,a=r.results,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/search/movie?query=").concat(e,"&api_key=").concat(u));case 2:return n=t.sent,r=n.data,a=r.results,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.a8b62490.chunk.js.map