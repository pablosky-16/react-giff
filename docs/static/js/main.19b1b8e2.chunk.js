(this["webpackJsonpgif-experts-app"]=this["webpackJsonpgif-experts-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=n(2),u=n(9),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],j=a[1];return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),j(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){j(e.target.value)}})})},o=n(10),b=n(6),l=n.n(b),p=n(8),d=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,c,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=NvILVPnDS8iB8ZJPvqJnnThgJf9ehAqH"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:n,alt:t}),Object(r.jsxs)("p",{children:[" ",t," "]})]})},h=function(e){var t=e.category,n=Object(c.useState)([]),a=Object(s.a)(n,2),i=a[0],u=a[1];return Object(c.useEffect)((function(){d(t).then(u)}),[t]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:t}),Object(r.jsx)("div",{className:"card-grid",children:i.map((function(e){return Object(r.jsx)(f,Object(o.a)({},e),e.id)}))})]})},O=function(){var e=Object(c.useState)(["El Padrino"]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Gif expertos"}),Object(r.jsx)("hr",{}),Object(r.jsx)(j,{setCategories:a}),Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsx)(h,{category:e},e)}))})]})},x=(n(17),document.querySelector("#root"));i.a.render(Object(r.jsx)(O,{}),x)}},[[18,1,2]]]);
//# sourceMappingURL=main.19b1b8e2.chunk.js.map