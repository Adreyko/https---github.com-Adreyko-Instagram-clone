"use strict";(self.webpackChunkinstragram=self.webpackChunkinstragram||[]).push([[325],{325:function(e,r,s){s.r(r),s.d(r,{default:function(){return x}});var n=s(4165),l=s(5861),t=s(9439),i=s(2791),a=s(7689),c=s(4892),u=s(1087),o=s(184),d=function(e){var r=e.fullName,s=e.userName,n=e.profileImage,l=e.uid;(0,c.C)((function(e){return e.anotherUser.user})),(0,c.C)((function(e){return e.user.user}));return(0,o.jsx)("div",{className:"flex items-center justify-between ",children:(0,o.jsxs)("div",{className:"flex py-2 mb-2 ",children:[(0,o.jsx)(u.rU,{to:"/".concat(l,"/"),children:(0,o.jsx)("img",{className:"border-[1px] rounded-full h-12 w-12",alt:"prof",src:n||"/Instagram-clone/images/profile.png"})}),(0,o.jsxs)("div",{className:"ml-2",children:[(0,o.jsx)("p",{className:"",children:s}),(0,o.jsx)("h1",{className:"text-gray-400",children:r})]})]})})},f=s(7799),m=s(9222),x=function(){var e=(0,i.useState)(!0),r=(0,t.Z)(e,2),s=r[0],u=(r[1],(0,a.s0)()),x=((0,c.C)((function(e){return e.user.user.following})),(0,c.C)((function(e){return e.anotherUser.user.following})),(0,c.C)((function(e){return e.user.user})),(0,a.UO)().uid),h=(0,i.useState)(),p=(0,t.Z)(h,2),v=p[0],g=p[1],j=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var r,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,f.JU)(m.db,"users",x),e.next=3,(0,f.QT)(r);case 3:s=e.sent,g(s.data());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=null===v||void 0===v?void 0:v.following;(0,i.useEffect)((function(){j()}),[]);var w=null===N||void 0===N?void 0:N.map((function(e){return(0,o.jsx)(d,{uid:e.uid,userName:e.userName,fullName:e.fullName,profileImage:e.profileImage})}));return s?(0,o.jsx)("div",{className:"fixed inset-0 z-10   bg-opacity-30 backdrop-blur-sm flex justify-center items-center bg-gray-500   ",onClick:function(){return u(-1)},children:(0,o.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:"  rounded shadow-sm z-20 xl:w-[20%] sm:w-[40%]   flex items-center w-[60%]  ",children:(0,o.jsxs)("div",{className:"bg-white w-[100%] flex-col rounded-xl",children:[(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)("h1",{className:"border-b-[1px] py-2",children:"Followers"})}),(0,o.jsx)("div",{children:(null===N||void 0===N?void 0:N.length)>0?(0,o.jsx)("div",{className:"m-2",children:w}):(0,o.jsxs)("div",{className:"flex flex-col justify-center items-center p-[10%] py-[20%] text-center",children:[(0,o.jsx)("img",{className:"w-16",src:"/images/profile.png",alt:""}),(0,o.jsx)("h1",{className:"text-[25px]",children:"Followers"}),(0,o.jsx)("p",{className:"text-[13px]",children:"You'll see all the people who follow you here."})]})})]})})}):null}}}]);
//# sourceMappingURL=325.4aeadf92.chunk.js.map