(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(7),i=n.n(r);n(15),n(6);var o=function(){return Object(a.jsx)("div",{className:"header bg-dark",children:Object(a.jsx)("div",{className:"header-brand",children:Object(a.jsxs)("h6",{className:"font-light text-light mt-2 mb-2",children:[Object(a.jsx)("i",{class:"fas fa-crow text-primary"})," Random Co."]})})})};var l=function(){return Object(a.jsx)("div",{className:"hero ",children:Object(a.jsx)("div",{className:"hero-body u-flex u-flex-column u-items-center",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{className:"title ",children:"Employee Directory"}),Object(a.jsx)("h5",{className:"subtitle text-gray-500 font-light",children:"Search by name or filter by column."})]})})})},m=n(9),d=n(4);var u=function(e){return Object(a.jsx)("tbody",{children:e.employees.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{className:"avatar avatar--small",src:e.picture,alt:"employeePhoto"})}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.city}),Object(a.jsx)("td",{children:e.country})]},t)}))})},j=n(8),h=function(e){return Object(a.jsx)("input",{className:"input-small mb-1",type:"search",style:{width:"100%"},value:e.value,placeholder:e.placeholder,onChange:e.onChange})},b=j;var p=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)("name"),i=Object(d.a)(r,2),o=i[0],l=i[1],j=Object(c.useState)(""),p=Object(d.a)(j,2),x=p[0],O=p[1];return Object(c.useEffect)((function(){var e=b.filter((function(e){return e.name.toLowerCase().includes(x)}));s(e)}),[x]),Object(c.useEffect)((function(){!function(e){var t={name:"name",email:"email",phone:"phone",city:"city",country:"country"}[e];console.log(t);var n=Object(m.a)(b).sort((function(e,n){return n[t]<e[t]?1:-1}));console.log(n),s(n)}(o)}),[o]),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{children:Object(a.jsx)(h,{value:x,onChange:function(e){console.log(e.target.value),O(e.target.value)},placeholder:"Search by Name"})}),Object(a.jsxs)("table",{className:"table bordered striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{}),Object(a.jsx)("th",{children:Object(a.jsxs)("button",{onClick:function(e){return l(e.target.value)},className:"btn-primary btn-xsmall m-0",value:"name",children:["Name ",Object(a.jsx)("i",{class:"fas fa-angle-down"})]})}),Object(a.jsx)("th",{children:Object(a.jsxs)("button",{onClick:function(e){return l(e.target.value)},className:"btn-primary btn-xsmall m-0",value:"phone",children:["Phone ",Object(a.jsx)("i",{class:"fas fa-angle-down"})]})}),Object(a.jsx)("th",{children:Object(a.jsxs)("button",{onClick:function(e){return l(e.target.value)},className:"btn-primary btn-xsmall m-0",value:"email",children:["Email ",Object(a.jsx)("i",{class:"fas fa-angle-down"})]})}),Object(a.jsx)("th",{children:Object(a.jsxs)("button",{onClick:function(e){return l(e.target.value)},className:"btn-primary btn-xsmall m-0",value:"city",children:["City ",Object(a.jsx)("i",{class:"fas fa-angle-down"})]})}),Object(a.jsx)("th",{children:Object(a.jsxs)("button",{onClick:function(e){return l(e.target.value)},className:"btn-primary btn-xsmall m-0",value:"country",children:["Country ",Object(a.jsx)("i",{class:"fas fa-angle-down"})]})})]})}),Object(a.jsx)(u,{employees:n})]})]})},x=function(){return Object(a.jsxs)("footer",{className:"footer ",children:[Object(a.jsx)("h6",{className:"footer__title white uppercase",children:Object(a.jsx)("i",{class:"fas fa-crow text-primary"})}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"divider"}),Object(a.jsx)("p",{className:"subtitle",children:"Random Co. \xa9 2020."})]})]})};n(16);var O=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(o,{}),Object(a.jsx)(l,{}),Object(a.jsx)(p,{}),Object(a.jsx)(x,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),y()},8:function(e){e.exports=JSON.parse('[{"gender":"male","name":"Jimmy Dixon","city":"Baton Rouge","state":"Utah","country":"United States","postcode":93255,"email":"jimmy.dixon@example.com","dob":"1946-07-12T20:13:55.338Z","phone":"918-258-9802","picture":"https://randomuser.me/api/portraits/thumb/men/5.jpg"},{"gender":"female","name":"Julia Knight","city":"Kingston","state":"Qu\xe9bec","country":"Canada","postcode":"Y4I 1O2","email":"julia.knight@example.com","dob":"1955-08-03T08:21:49.796Z","phone":"180-651-3830","picture":"https://randomuser.me/api/portraits/thumb/women/15.jpg"},{"gender":"male","name":"Rasmus Poulsen","city":"Viby J.","state":"Danmark","country":"Denmark","postcode":58677,"email":"rasmus.poulsen@example.com","dob":"1992-11-01T13:05:21.450Z","phone":"14816387","picture":"https://randomuser.me/api/portraits/thumb/men/85.jpg"},{"gender":"male","name":"Rasmus Hanninen","city":"Oulu","state":"\xc5land","country":"Finland","postcode":51402,"email":"rasmus.hanninen@example.com","dob":"1954-07-16T18:47:27.698Z","phone":"05-344-651","picture":"https://randomuser.me/api/portraits/thumb/men/18.jpg"},{"gender":"female","name":"Jenny Mcdonalid","city":"Manchester","state":"North Yorkshire","country":"United Kingdom","postcode":"NG6J 0AX","email":"jenny.mcdonalid@example.com","dob":"1994-03-30T08:53:01.096Z","phone":"016977 5138","picture":"https://randomuser.me/api/portraits/thumb/women/36.jpg"},{"gender":"female","name":"Melodie Taylor","city":"Lumsden","state":"Saskatchewan","country":"Canada","postcode":"I8K 8N4","email":"melodie.taylor@example.com","dob":"1967-10-26T11:50:58.047Z","phone":"973-620-1210","picture":"https://randomuser.me/api/portraits/thumb/women/65.jpg"},{"gender":"female","name":"Cecilie Poulsen","city":"St.Merl\xf8se","state":"Nordjylland","country":"Denmark","postcode":84532,"email":"cecilie.poulsen@example.com","dob":"1994-12-06T21:43:53.738Z","phone":"12-24-56","picture":"https://randomuser.me/api/portraits/thumb/women/89.jpg"},{"gender":"male","name":"Edwin Harvey","city":"Brisbane","state":"Northern Territory","country":"Australia","postcode":5985,"email":"edwin.harvey@example.com","dob":"1951-06-07T23:47:15.353Z","phone":"225-483-4883","picture":"https://randomuser.me/api/portraits/thumb/men/29.jpg"},{"gender":"female","name":"Lichelle Van der Vlist","city":"Oudendijk Nh","state":"Drenthe","country":"Netherlands","postcode":93960,"email":"lichelle.vandervlist@example.com","dob":"1988-09-30T22:05:20.155Z","phone":"467-483-4883","picture":"https://randomuser.me/api/portraits/thumb/women/22.jpg"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.6da42cf7.chunk.js.map