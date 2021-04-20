(this.webpackJsonpuser_manager_app=this.webpackJsonpuser_manager_app||[]).push([[7],{136:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(0),n=t.n(r);function l(e){var a=e.text,t=e.close;return(n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-white px-6 py-4 border-0 rounded relative mb-4 bg-teal-500"},n.a.createElement("span",{className:"text-xl inline-block mr-5 align-middle"},n.a.createElement("i",{className:"fas fa-bell"})),n.a.createElement("span",{className:"inline-block align-middle mr-8"},n.a.createElement("b",{className:"capitalize"},a)),n.a.createElement("button",{className:"absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none",onClick:t},n.a.createElement("span",null,"\xd7")))))}},137:function(e,a,t){"use strict";var r=t(0),n=t.n(r);a.a=function(e){var a=e.title;return(n.a.createElement("div",{className:"my-1 sm:my-4"},n.a.createElement("h2",{className:"text-gray-800 font-bold text-2xl"},a)))}},141:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var r=t(42),n=t.n(r),l=t(60),s=t(8),c=t(0),m=t.n(c),i=t(62),o=t(29),u=t(61),d=t(136),p=t(30),b=t(64),x=t(84),E=t(32),f=t(31),v=t(63),N=t(24),g=t(138),y=t.n(g);function h(e){var a=N.a().shape({firstName:N.b().required("FirstName is required"),lastName:N.b().required("LastName is required"),email:N.b().required("Email is required"),password:N.b().required("Password is required"),valid_until:N.b().required("Valid Until is required"),valid:N.b().required("Valid is required")}),t=Object(c.useState)(),r=Object(s.a)(t,2),d=r[0],g=r[1],h=Object(c.useState)(),w=Object(s.a)(h,2),j=w[0],k=w[1],O=Object(c.useState)(!1),S=Object(s.a)(O,2),_=S[0],q=S[1],F=function(){var a=Object(l.a)(n.a.mark((function a(t){var r,l,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,q(!0),a.next=4,u.a.put("user/".concat(e.user._id),t);case 4:r=a.sent,l=r.data,g(l.message),k(""),a.next=16;break;case 10:a.prev=10,a.t0=a.catch(0),q(!1),s=a.t0.response.data,k(s.message),g("");case 16:return a.prev=16,setTimeout((function(){e.setShowModal(!1),window.location.reload()}),1e3),a.finish(16);case 19:case"end":return a.stop()}}),a,null,[[0,10,16,19]])})));return function(e){return a.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,e.showModal?m.a.createElement(m.a.Fragment,null,m.a.createElement("section",{className:"w-3/4 h-screen m-auto sm:pt-10"},m.a.createElement(o.a,null),m.a.createElement(i.a,null,m.a.createElement("div",{className:"flex items-center justify-center py-7 px-2 sm:px-3 lg:px-3"},m.a.createElement("div",{className:"max-w-md w-full flex items-center justify-center"},m.a.createElement(p.c,{initialValues:{firstName:e.user.firstName,lastName:e.user.lastName,email:e.user.email,password:e.user.password,valid_until:y()(e.user.valid_until).format("yyyy-MM-DTH:mm"),valid:e.user.valid},onSubmit:function(e){return F(e)},validationSchema:a},(function(e){var a=e.values;return(m.a.createElement(p.b,{className:"mt-8"},d&&m.a.createElement(b.a,{text:d}),j&&m.a.createElement(x.a,{text:j}),m.a.createElement("input",{type:"hidden",name:"remember",value:"true"}),m.a.createElement("div",null,m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"mb-2 mr-2 w-3/4"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(f.a,{text:"Valid Until"})),m.a.createElement(E.a,{ariaLabel:"Valid_until",name:"valid_until",type:"datetime-local",placeholder:"Valid_until"})),m.a.createElement("div",{className:"mb-2 ml-2 w-1/2"},m.a.createElement("div",{className:"mb-1 ml-4"},m.a.createElement(f.a,{text:"Status"})),m.a.createElement("div",null,m.a.createElement("label",{className:"inline-flex items-center"},m.a.createElement(p.a,{type:"checkbox",className:"form-checkbox mt-2 ml-4",name:"valid"}),m.a.createElement("span",{className:"ml-4 mt-2"},a.valid?"Active":"Disable"))))),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"mb-2 mr-2 w-1/2"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(f.a,{text:"Name"})),m.a.createElement(E.a,{ariaLabel:"FirstName",name:"firstName",type:"text",placeholder:"FirstName"})),m.a.createElement("div",{className:"mb-2 ml-2 w-1/2"},m.a.createElement("div",{className:"mb-1 ml-4"},m.a.createElement(f.a,{text:"LastName"})),m.a.createElement("div",null,m.a.createElement(E.a,{ariaLabel:"LastName",name:"lastName",type:"text",placeholder:"LastName"})))),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"mb-2 mr-2 w-3/4"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(f.a,{text:"Email"})),m.a.createElement(E.a,{ariaLabel:"Email",name:"email",type:"email",placeholder:"Email"})),m.a.createElement("div",{className:"mb-2 ml-2 w-1/2"},m.a.createElement("div",{className:"mb-1 ml-4"},m.a.createElement(f.a,{text:"Password"})),m.a.createElement("div",null,m.a.createElement(E.a,{ariaLabel:"Password",name:"password",type:"password",placeholder:"Password"}))))),m.a.createElement("div",{className:"mt-6 flex items-center justify-center"},m.a.createElement(v.a,{type:"submit",text:"Save",loading:_}))))}))))))):null)}var w=t(13),j=t(23);function k(e){var a=e.searchUser;return(m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex"},m.a.createElement(p.c,{initialValues:{search:""},onSubmit:function(e){return a(e)}},(function(){return m.a.createElement(p.b,null,m.a.createElement("div",{className:"flex"},m.a.createElement(p.a,{className:"py-2 px-4 border bg-gray-400 border-gray-300 rounded-full focus:outline-none w-32 sm:w-64","aria-label":"Search",name:"search",type:"text",placeholder:"Search"}),m.a.createElement("button",{className:"rounded-full bg-gradient px-4 ml-2 text-white flex items-center text-xs focus:outline-none shadow-lg",type:"submit"},m.a.createElement(w.a,{icon:j.a}))))})))))}function O(e){var a=Object(c.useState)(),t=Object(s.a)(a,2),r=t[0],p=t[1],b=Object(c.useState)(!1),x=Object(s.a)(b,2),E=x[0],f=x[1],v=Object(c.useState)(!1),N=Object(s.a)(v,2),g=N[0],O=N[1],S=Object(c.useState)(),_=Object(s.a)(S,2),q=_[0],F=_[1],M=function(){var a=Object(l.a)(n.a.mark((function a(t){var r,l,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.delete("".concat(e.idCampus,"/user/delete/").concat(t));case 3:r=a.sent,l=r.data,p(l.message),f(!0),a.next=14;break;case 9:a.prev=9,a.t0=a.catch(0),s=a.t0.response.data,p(s.message),f(!0);case 14:return a.prev=14,window.location.reload(),a.finish(14);case 17:case"end":return a.stop()}}),a,null,[[0,9,14,17]])})));return function(e){return a.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex mb-6"},m.a.createElement(k,{searchUser:e.searchUser})),g?m.a.createElement(h,{setShowModal:O,user:q,showModal:g}):m.a.createElement(m.a.Fragment,null,m.a.createElement(o.a,null),m.a.createElement(i.a,null,E?m.a.createElement(d.a,{text:r,close:function(){f(!1)}}):null,m.a.createElement("div",{className:"inline-block min-w-full rounded-lg overflow-hidden"},m.a.createElement("table",{className:"min-w-full leading-normal"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"},"name"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"},"lastname"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"},"email"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"},"campus"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"},"valid until"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"},"valid"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"},"edit"),m.a.createElement("th",{scope:"col",className:"px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"},"delete"))),m.a.createElement("tbody",null,e.users.map((function(e){return m.a.createElement("tr",{key:e._id},m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm text-center"},m.a.createElement("div",{className:"flex items-center justify-center"},m.a.createElement("div",{className:"ml-3"},m.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap"},e.firstName)))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm text-center"},m.a.createElement("div",{className:"flex items-center justify-center"},m.a.createElement("div",{className:"ml-3"},m.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap"},e.lastName)))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm text-center"},m.a.createElement("div",{className:"flex items-center justify-center"},m.a.createElement("div",{className:"ml-3"},m.a.createElement("p",{className:"text-gray-900 whitespace-no-wrap"},e.email)))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm text-center"},m.a.createElement("span",{className:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"},m.a.createElement("span",{"aria-hidden":"true",className:"absolute inset-0 bg-green-200 opacity-50 rounded-full"}),m.a.createElement("span",{className:"relative"},e.campus?"Yes":"No"))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 bg-white text-sm ml-5 text-center"},m.a.createElement("span",{className:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"},m.a.createElement("span",{"aria-hidden":"true",className:"absolute inset-0 bg-green-200 opacity-50 rounded-full"}),m.a.createElement("span",{className:"relative"},y()(e.valid_until).format("MMMM Do YYYY, hh:mm a")))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200  text-sm items-center text-center"},m.a.createElement("span",{className:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"},m.a.createElement("span",{"aria-hidden":"true",className:"absolute inset-0 bg-green-200 opacity-50 rounded-full"}),m.a.createElement("span",{className:"relative"},e.valid?"Active":"Disable"))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200  text-sm items-center"},m.a.createElement("div",{className:"flex justify-center"},m.a.createElement("button",{className:"rounded-full shadow flex items-center px-3 py-3",onClick:function(){return function(e){F(e),O(!0)}(e)}},m.a.createElement(w.a,{icon:j.f})))),m.a.createElement("td",{className:"px-0 py-5 border-b border-gray-200 text-sm items-center"},m.a.createElement("div",{className:"flex justify-center"},m.a.createElement("button",{className:"rounded-full shadow hover:text-indigo-900 flex items-center px-3 py-3 ",onClick:function(){return M(e._id)}},m.a.createElement(w.a,{icon:j.h})))))}))))))))}var S=t(137);function _(){var e=Object(c.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],i=Object(c.useState)(!1),o=Object(s.a)(i,2),d=o[0],p=o[1];Object(c.useEffect)((function(){d||function(){var e=Object(l.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("users");case 2:a=e.sent,t=a.data,r(t.users);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}));var b=function(){var e=Object(l.a)(n.a.mark((function e(a){var t,l,s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,u.a.get("users/".concat(a.search));case 4:if(t=e.sent,l=t.data,console.log(l.users),0!==l.users.length){e.next=18;break}return console.log("entro"),e.next=11,u.a.get("usersCampus/".concat(a.search));case 11:s=e.sent,c=s.data,p(!0),console.log(c.users),r(c.users),e.next=20;break;case 18:p(!0),r(l.users);case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(1),p(!0),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(a){return e.apply(this,arguments)}}();return(m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container mx-auto px-4"},m.a.createElement(S.a,{title:"Users"}),m.a.createElement("div",{className:"py-8"},m.a.createElement("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"},m.a.createElement("div",null,m.a.createElement(O,{users:t,searchUser:b})))))))}}}]);
//# sourceMappingURL=7.6a3f88e3.chunk.js.map