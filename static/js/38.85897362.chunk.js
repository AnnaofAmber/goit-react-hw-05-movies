"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[38],{687:function(e,t,n){n.d(t,{E3:function(){return v},gQ:function(){return p},oO:function(){return l},wr:function(){return o},y:function(){return f}});var r=n(861),a=n(757),c=n.n(a),i=n(243),s="https://api.themoviedb.org/3",u="548e96f0a88257a9c2a7854f478e0cd8",o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(u));case 2:return t=e.sent,n=t.data,r=n.results,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(u));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return n=e.sent,r=n.data,a=r.cast,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return n=e.sent,r=n.data,a=r.results,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/search/movie?query=").concat(t,"&api_key=").concat(u));case 2:return n=e.sent,r=n.data,a=r.results,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},639:function(e,t,n){n.d(t,{a:function(){return i}});var r=n(920),a="Loader_loaderWrapper__6ypwD",c=n(184),i=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.NB,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",colors:["#F99417","#d2cdfc","#ffc374","#d2cdfc","#F99417"]})})}},155:function(e,t,n){n.d(t,{O:function(){return p}});var r="MoviesList_container__0JGj2",a="MoviesList_item__eePYv",c="MoviesList_img__v4jFC",i="MoviesList_link__8rTGX",s="MoviesList_title__PB2c8",u=n(87),o=n(184),p=function(e){var t=e.data,n=e.location;return(0,o.jsx)("ul",{className:r,children:t.map((function(e){var t=e.title,r=e.id,p=e.poster_path;return(0,o.jsx)("li",{className:a,children:(0,o.jsxs)(u.rU,{state:{from:n},className:i,to:"/movies/".concat(r),children:[(0,o.jsx)("img",{className:c,src:p?"https://image.tmdb.org/t/p/w300/".concat(p):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t}),(0,o.jsx)("span",{className:s,children:t})]})},r)}))})}},38:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(861),a=n(439),c=n(757),i=n.n(c),s=n(686),u=n.n(s),o=n(791),p=n(87),f=n(689),l="MovieSearch_form__dggG5",v="MovieSearch_input__ixDAZ",d="MovieSearch_btn__60jcx",m=n(184),h=function(e){var t=e.handleSubmit;return(0,m.jsxs)("form",{className:l,onSubmit:t,children:[(0,m.jsx)("label",{htmlFor:"movie-input"}),(0,m.jsx)("input",{className:v,id:"movie-input",name:"serchMovieName",type:"text",placeholder:"Enter movie name"}),(0,m.jsx)("button",{className:d,type:"submit",children:"Search"})]})},_=n(155),x=n(639),g=n(687),w=function(){var e=(0,p.lr)(),t=(0,a.Z)(e,2),n=t[0],c=t[1],s=(0,f.TH)(),l=(0,o.useState)([]),v=(0,a.Z)(l,2),d=v[0],w=v[1],b=(0,o.useState)(!1),y=(0,a.Z)(b,2),k=y[0],j=y[1],Z=(0,o.useState)(!1),N=(0,a.Z)(Z,2),S=N[0],M=N[1],L=n.get("query");(0,o.useEffect)((function(){if(L){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,g.E3)(L);case 4:t=e.sent,w(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),M(!0),u().Notify.failure("Oops! Something went wrong! Error ".concat(S," Try reloading the page!"));case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[L,S]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(h,{handleSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.serchMovieName.value;c({query:t})}}),k&&(0,m.jsx)(x.a,{}),0!==d.length&&(0,m.jsx)(_.O,{data:d,location:s})]})}}}]);
//# sourceMappingURL=38.85897362.chunk.js.map