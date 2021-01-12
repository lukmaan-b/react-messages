(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{86:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),s=n(43),i=n.n(s),l=n(6),u=n(92),o=n(17),d=function(e,t){var n="react-message-"+e,c=Object(r.useState)((function(){try{var e=window.localStorage.getItem(n);return null!=e?JSON.parse(e):t instanceof Function?t():t}catch(c){return console.error(c),t}})),a=Object(l.a)(c,2),s=a[0],i=a[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,i]},j=n(44),b=n.n(j),h=a.a.createContext(),O=function(e){var t=e.children,n=e.userId,a=Object(r.useState)(),s=Object(l.a)(a,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){var e=b()("https://message-server-react.herokuapp.com",{query:{userId:n}});return u(e),function(){return e.close()}}),[n]),Object(c.jsx)(h.Provider,{value:i,children:t})},x=a.a.createContext(),f=function(e){var t=e.children,n=Object(r.useContext)(h);console.log(n);var a=d("chat",[]),s=Object(l.a)(a,2),i=s[0],u=s[1];Object(r.useEffect)((function(){n&&n.on("message-recieve",(function(e){!function(e){u((function(t){return[].concat(Object(o.a)(t),[e])}))}(e)}))}),[n]);var j={chat:i,setChat:u,handleSendMessage:function(e){u((function(t){return[].concat(Object(o.a)(t),[e])})),n&&n.emit("send-message",e)},handleClearMessages:function(){u([])}};return Object(c.jsx)(x.Provider,{value:j,children:t})},p=a.a.createContext(),m=function(e){var t=e.children,n=d("recipients",[]),r=Object(l.a)(n,2),a=r[0],s=r[1],i={recipients:a,setRecipients:s,handleDeleteRecipient:function(e){s((function(t){return t.filter((function(t){return t!==e}))}))},handleAddRecipient:function(e){s((function(t){return[].concat(Object(o.a)(t),[e])}))}};return Object(c.jsx)(p.Provider,{value:i,children:t})},v=n(91),g=n(88),y=n(93),C=function(e){var t=e.userId,n=Object(r.useState)(""),a=Object(l.a)(n,2),s=a[0],i=a[1],u=Object(r.useState)(!0),o=Object(l.a)(u,2),d=o[0],j=o[1],b=Object(r.useContext)(x),h=b.chat,O=b.handleSendMessage,f=b.handleClearMessages,m=Object(r.useContext)(p).recipients,C=h.map((function(e,n){return Object(c.jsxs)("div",{className:" bg-primary mt-3 ".concat(e.author===t?"align-self-end bg-primary":"align-self-start bg-success"),style:{borderRadius:"10px"},children:[Object(c.jsx)("p",{className:"m-0 text-light pt-3 px-3",style:{wordBreak:"break-word"},children:e.body}),Object(c.jsx)("p",{className:"text-light px-3 pb-1 m-0",children:Object(c.jsx)("small",{children:e.author})})]},n)}));return Object(r.useEffect)((function(){m.length>0?j(!1):j(!0)}),[m]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"d-flex flex-column ",style:{overflow:"auto"},children:C}),Object(c.jsx)(v.a,{style:{marginTop:"1rem"},onSubmit:function(e){(e.preventDefault(),m.length>0)&&(O({author:t,body:s,recipients:m}),i(""))},children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(g.a.Prepend,{children:Object(c.jsx)(y.a,{onClick:f,variant:"danger",children:"Clear Messages"})}),Object(c.jsx)(v.a.Control,{disabled:d,onChange:function(e){var t=e.target.value;return i(t)},as:"textarea",rows:5}),Object(c.jsx)(g.a.Append,{children:Object(c.jsx)(y.a,{disabled:d,type:"submit",children:"Enter"})})]})})]})},w=function(e){var t=e.userId,n=Object(r.useContext)(p),a=n.recipients,s=n.handleDeleteRecipient,i=a.map((function(e){return Object(c.jsxs)("div",{className:"mt-2 d-flex flex-row-reverse",children:[Object(c.jsx)(y.a,{variant:"danger",className:"rounded-right",style:{borderRadius:"0"},onClick:function(){return s(e)},children:"X"}),Object(c.jsx)("span",{className:"p-1 bg-light w-100 rounded-left text-dark",style:{wordBreak:"break-word"},children:e})]},e)}));return Object(c.jsxs)("div",{className:"min-vh-100 d-flex flex-column justify-content-between border-right p-2",children:[Object(c.jsx)("div",{style:{overflow:"auto",paddingTop:"1rem"},children:i}),Object(c.jsx)("p",{className:"text-muted",children:"User ID: ".concat(t)})]})},I=(n(85),n(89)),S=n(90),N=n(45),k=function(e){var t=e.userId,n=Object(r.useState)(""),a=Object(l.a)(n,2),s=a[0],i=a[1],u=Object(r.useContext)(p).handleAddRecipient;return Object(c.jsx)(v.a,{onSubmit:function(e){e.preventDefault(),s!==t&&u(s)},children:Object(c.jsxs)(v.a.Group,{children:[Object(c.jsx)(v.a.Label,{className:"text-muted",children:"Recipient ID"}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(v.a.Control,{onChange:function(e){var t=e.target.value;return i(t)}}),Object(c.jsx)(g.a.Append,{children:Object(c.jsx)(y.a,{type:"submit",children:"+"})})]})]})})};var R=function(){var e=d("userId",(function(){return Object(u.a)()})),t=Object(l.a)(e,1)[0];return Object(c.jsx)(O,{userId:t,children:Object(c.jsx)(m,{children:Object(c.jsx)(f,{children:Object(c.jsx)(I.a,{fluid:!0,children:Object(c.jsxs)(S.a,{children:[Object(c.jsx)(N.a,{xs:4,children:Object(c.jsx)(w,{userId:t})}),Object(c.jsxs)(N.a,{style:{paddingTop:"1rem"},className:"d-flex flex-column justify-content-between min-vh-100",children:[Object(c.jsx)(k,{}),Object(c.jsx)(C,{userId:t})]})]})})})})})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.f754e224.chunk.js.map