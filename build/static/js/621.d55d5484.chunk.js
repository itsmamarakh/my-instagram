"use strict";(self.webpackChunkinstagram_app=self.webpackChunkinstagram_app||[]).push([[621],{4621:function(e,t,a){a.r(t);var r=a(4165),s=a(5861),n=a(9439),l=a(2791),c=a(6871),o=a(3504),i=a(2303),u=(a(8521),a(8155)),d=a(6042),m=a(184);t.default=function(){var e=(0,l.useContext)(i.Z).firebase,t=(0,c.s0)(),a=(0,l.useState)(""),x=(0,n.Z)(a,2),p=x[0],b=x[1],h=(0,l.useState)(""),f=(0,n.Z)(h,2),g=f[0],w=f[1],v=(0,l.useState)(""),j=(0,n.Z)(v,2),N=j[0],k=j[1],y=(0,l.useState)(""),S=(0,n.Z)(y,2),C=S[0],Z=S[1],E=(0,l.useState)(""),U=(0,n.Z)(E,2),F=U[0],P=U[1],I=""===C||""===N,L=function(){var a=(0,s.Z)((0,r.Z)().mark((function a(s){var n;return(0,r.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.preventDefault(),a.prev=1,a.next=4,(0,d.$K)(p);case 4:if(a.sent.length){a.next=25;break}return a.prev=6,a.next=9,e.auth().createUserWithEmailAndPassword(N,C);case 9:return n=a.sent,a.next=12,n.user.updateProfile({displayName:p});case 12:return a.next=14,e.firestore().collection("users").add({userId:n.user.uid,username:p.toLowerCase(),fullName:g,email:N.toLowerCase(),following:[],followers:[],dataCreated:Date.now(),aboutMe:"",avatarSrc:"https://parkridgevet.com.au/wp-content/uploads/2020/11/Profile-300x300.png"});case 14:t(u.Sd),a.next=23;break;case 17:a.prev=17,a.t0=a.catch(6),w(""),k(""),Z(""),P(a.t0.message);case 23:a.next=26;break;case 25:P("A user with this name has already been created!");case 26:a.next=33;break;case 28:a.prev=28,a.t1=a.catch(1),k(""),Z(""),P(a.t1.message);case 33:case"end":return a.stop()}}),a,null,[[1,28],[6,17]])})));return function(e){return a.apply(this,arguments)}}();return(0,l.useEffect)((function(){document.title="Instagram"}),[]),(0,m.jsx)("div",{className:"h-screen w-screen flex flex-wrap items-center justify-center p-3",children:(0,m.jsxs)("div",{className:"flex flex-col",children:[(0,m.jsxs)("div",{className:"instaSignUp border-[1px] bg-white p-4 mb-5 w-[25rem] border-gray-300",children:[(0,m.jsx)("div",{className:"w-full",children:(0,m.jsx)("img",{src:"/images/instatext.png",className:"mt-2 mx-auto my-2 w-full max-w-[8rem] object-cover",alt:"instagram"})}),(0,m.jsx)("p",{className:"text-center mb-3 font-bold  text-lg text-slate-800",children:"Sign up to open Instagram"}),F&&(0,m.jsx)("p",{className:"mb-4 text-xs text-red-500",children:F}),(0,m.jsxs)("form",{onSubmit:L,className:"",method:"post",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"mb-1 block",children:"Username"}),(0,m.jsx)("input",{type:"text","aria-label":"Enter your email username",placeholder:" Your Username",className:"text-xs p-3 mb-3 border-[1px] rounded bg-white w-full border-black outline-none",value:p,onChange:function(e){return b(e.target.value)}})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"mb-1 block",children:"Full Name"}),(0,m.jsx)("input",{type:"text","aria-label":" Full name",placeholder:" Your Full Name",className:"text-xs p-3 mb-3 border-[1px] rounded bg-white w-full border-black outline-none",value:g,onChange:function(e){return w(e.target.value)}})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"mb-1 block",children:"Email"}),(0,m.jsx)("input",{type:"text","aria-label":"Your email address",placeholder:" Your Email",className:"text-xs p-3 mb-3 border-[1px] rounded bg-white w-full border-black outline-none",value:N,onChange:function(e){return k(e.target.value)}})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"mb-1 block",children:"Password"}),(0,m.jsx)("input",{type:"password","aria-label":"Enter your password",placeholder:"Password(12345678)",className:"text-xs p-3 mb-3 border-[1px] rounded bg-white w-full border-black outline-none",value:C,onChange:function(e){return Z(e.target.value)}})]}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{disabled:I,type:"submit",className:"login bg-blue-500  mt-4 cursor-pointer text-white rounded-2xl w-full h-8 font-bold ".concat(I&&"opacity-50"),children:"Sign up"})}),(0,m.jsx)("div",{className:"text-center mt-3 ",children:(0,m.jsx)(o.rU,{to:u.aL,className:"forgot text-blue-500 text-center w-full text-x font-thin my-3",children:"Forgot password?"})})]})]}),(0,m.jsx)("div",{className:"instaFooter flex justify-center items-center flex-col w-full bg-white p-4 border-gray-300 border-[1px]",children:(0,m.jsxs)("p",{className:"text-sm",children:["Have an account?",(0,m.jsx)(o.rU,{to:u.ym,className:"font-semibold ml-1 text-blue-500",children:"Log In"})]})})]})})}},8521:function(){}}]);
//# sourceMappingURL=621.d55d5484.chunk.js.map