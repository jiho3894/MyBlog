(this.webpackJsonpcharley=this.webpackJsonpcharley||[]).push([[0],{58:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(34),i=t.n(a),o=t(8),s=t(6),u=t(18),d=t(10),l=t(9),p=t.n(l),b=t(13),j=t(21);t(46),t(59),t(60);j.a.initializeApp({apiKey:"AIzaSyDgRT9gBH5Gm8BZ_qp0CF1HcwDOEag0sx0",authDomain:"charleyblog-ee8a8.firebaseapp.com",projectId:"charleyblog-ee8a8",storageBucket:"charleyblog-ee8a8.appspot.com",messagingSenderId:"77832044251",appId:"1:77832044251:web:e9ed43ce0a60a991ee56fe"});var h,x,O,g,f,m,v,w,y,k,S,C,z,D,U,I,A,F,P,L,N,q,B,E,G,H,R,_,W,J,K,M,T,Z,Q,V,X,Y=j.a,$=j.a.auth(),ee=j.a.firestore(),ne=j.a.storage(),te=t(5),re=t(1),ce=te.c.div(h||(h=Object(s.a)(["\n  height: 25px;\n  width: 390px;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 25px;\n"]))),ae=te.c.div(x||(x=Object(s.a)(["\n  font-size: 13px;\n  font-weight: 600;\n  height: 25px;\n  width: 390px;\n  border-radius: 3px;\n  background: red;\n"]))),ie=te.c.form(O||(O=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 200px;\n"]))),oe=te.c.input(g||(g=Object(s.a)(["\n  font-size: 17px;\n  width: 220px;\n  height: 36px;\n  color: black;\n  outline: none;\n  background: none;\n  border: none;\n  border-bottom: 2px solid #95a5a6;\n  &:focus::-webkit-input-placeholder {\n    color:transparent;\n  }\n"]))),se=te.c.input(f||(f=Object(s.a)(["\n  width: 240px;\n  height: 40px;\n  font-size: 17px;\n  font-weight: 600;\n  cursor: pointer;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  background: white;\n  margin:15px 0 15px 0;\n  &:hover {\n    box-shadow: 0px 0px 4px #666666 inset;\n  }\n"]))),ue=Object(te.c)(u.b)(m||(m=Object(s.a)(["\n  width: 240px;\n  height: 40px;\n  font-size: 17px;\n  font-weight: 600;\n  border-radius: 10px;\n  text-align: center;\n  text-decoration: none;\n  background-color: white;\n  &:hover {\n    box-shadow: 0px 0px 4px #666666 inset;\n  }\n  &:focus {\n    color: blue;\n  }\n"]))),de=te.c.span(v||(v=Object(s.a)(["\n  vertical-align: middle;\n  line-height: 40px;\n"]))),le=function(){var e=Object(r.useState)(""),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),i=Object(o.a)(a,2),s=i[0],u=i[1],d=Object(r.useState)(""),l=Object(o.a)(d,2),j=l[0],h=l[1],x=function(e){var n=e.target,t=n.name,r=n.value;"email"===t?c(r):"password"===t&&u(r)},O=function(){var e=Object(b.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,$.signInWithEmailAndPassword(t,s);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),h(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(ce,{children:j&&Object(re.jsx)(ae,{children:"ID \ud639\uc740 \ube44\ubc00\ubc88\ud638\ub97c \uc798\ubabb \uc785\ub825\ud558\uc168\uac70\ub098 \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc740 ID \uc785\ub2c8\ub2e4."})}),Object(re.jsxs)(ie,{onSubmit:O,children:[Object(re.jsx)(oe,{name:"email",type:"text",placeholder:"\uc774\uba54\uc77c",required:!0,value:t,onChange:x}),Object(re.jsx)(oe,{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,value:s,onChange:x}),Object(re.jsx)(se,{type:"submit",value:"\ub85c\uadf8\uc778"}),Object(re.jsx)(ue,{to:"/Account",children:Object(re.jsx)(de,{children:"\uacc4\uc815\uc0dd\uc131"})})]})]})},pe=te.c.div(w||(w=Object(s.a)(["\n  font-size: 13px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),be=te.c.div(y||(y=Object(s.a)(["\n  width: 420px;\n  height: 420px;\n  border-radius: 18%;\n  background-color: gold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),je=te.c.button(k||(k=Object(s.a)(['\n  width: 60px;\n  height: 60px;\n  border-radius: 30px;\n  border: 0;\n  cursor: pointer;\n  background-color: white;\n  background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg");\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin: 20px;\n']))),he=te.c.button(S||(S=Object(s.a)(['\n  width: 60px;\n  height: 60px;\n  border-radius: 30px;\n  border: 0;\n  cursor: pointer;\n  background-color: white;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png");\n  margin: 20px;\n']))),xe=function(){var e=function(){var e=Object(b.a)(p.a.mark((function e(n){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(t=n.target.name)?r=new Y.auth.GoogleAuthProvider:"github"===t&&(r=new Y.auth.GithubAuthProvider),e.next=4,$.signInWithPopup(r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(re.jsx)(pe,{children:Object(re.jsxs)(be,{children:[Object(re.jsx)(le,{}),Object(re.jsxs)("div",{children:[Object(re.jsx)(je,{onClick:e,name:"google"}),Object(re.jsx)(he,{onClick:e,name:"github"})]})]})})},Oe=t(39),ge=t(62),fe=t(64),me=te.c.div(C||(C=Object(s.a)(["\n  display: flex;\n"]))),ve=function(e){var n=e.tweetObj,t=e.isOwner,c=Object(r.useState)(!1),a=Object(o.a)(c,2),i=a[0],s=a[1],u=Object(r.useState)(n.text),d=Object(o.a)(u,2),l=d[0],j=d[1],h=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,ee.doc("tweet/".concat(n.id)).delete();case 4:if(""===n.attachmentUrl){e.next=7;break}return e.next=7,ne.refFromURL(n.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return s((function(e){return!e}))},O=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,ee.doc("tweet/".concat(n.id)).update({text:l});case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(re.jsx)("div",{children:i?Object(re.jsx)(re.Fragment,{children:t&&Object(re.jsxs)(me,{children:[Object(re.jsxs)("form",{onSubmit:O,children:[Object(re.jsx)("input",{type:"text",placeholder:"\uc218\uc815\ud560 \ud14d\uc2a4\ud2b8",value:l,required:!0,onChange:function(e){var n=e.target.value;j(n)}}),Object(re.jsx)("input",{type:"submit",value:"\u2b55"})]}),Object(re.jsx)("button",{onClick:x,children:"\ucde8\uc18c"})]})}):Object(re.jsxs)(me,{children:[Object(re.jsx)("h4",{children:n.text}),n.attachmentUrl&&Object(re.jsx)("img",{alt:"",src:n.attachmentUrl,width:"50px",height:"50px"}),t&&Object(re.jsx)(re.Fragment,{children:Object(re.jsxs)(ge.a,{children:[Object(re.jsx)(fe.a,{onClick:h,variant:"danger",size:"sm",children:"\uc0ad\uc81c\ud558\uae30"}),Object(re.jsx)(fe.a,{onClick:x,variant:"info",size:"sm",children:"\uc218\uc815\ud558\uae30"})]})})]})})},we=t(63),ye=te.c.input(z||(z=Object(s.a)(["\n  width: 200px;\n"]))),ke=te.c.input(D||(D=Object(s.a)(["\n  width: 100px;\n"]))),Se=function(e){var n=e.userObj,t=Object(r.useState)(""),c=Object(o.a)(t,2),a=c[0],i=c[1],s=Object(r.useState)(""),u=Object(o.a)(s,2),d=u[0],l=u[1],j=function(){var e=Object(b.a)(p.a.mark((function e(t){var r,c,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r="",""===d){e.next=10;break}return c=ne.ref().child("".concat(n.uid,"/").concat(Object(we.a)())),e.next=6,c.putString(d,"data_url");case 6:return o=e.sent,e.next=9,o.ref.getDownloadURL();case 9:r=e.sent;case 10:return s={text:a,createAt:Date.now(),creatorId:n.uid,attachmentUrl:r},e.next=13,ee.collection("tweet").add(s);case 13:i(""),l("");case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(re.jsxs)("form",{onSubmit:j,children:[Object(re.jsx)(ye,{value:a,onChange:function(e){var n=e.target.value;i(n)},type:"text",placeholder:"\ucc44\ud305 \uc785\ub825",maxLength:100,required:!0}),Object(re.jsx)(ke,{type:"file",accept:"image/*",onChange:function(e){var n=e.target.files[0],t=new FileReader;n&&(t.onloadend=function(e){var n=e.currentTarget.result;l(n)},t.readAsDataURL(n))}}),Object(re.jsx)("input",{type:"submit",value:"\uc62c\ub9ac\uae30"}),d&&Object(re.jsxs)("div",{children:[Object(re.jsx)("img",{alt:"",src:d,width:"50px",height:"50px"}),Object(re.jsx)("button",{onClick:function(){return l("")},children:"Clear"})]})]})},Ce=te.c.body(U||(U=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  "]))),ze=te.c.div(I||(I=Object(s.a)(["\n  width: 100%;\n  height: 60vh;\n  display: grid;\n  grid-template-rows: repeat(2,1fr);\n  grid-template-columns: repeat(2,1fr);\n"]))),De=te.c.div(A||(A=Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n"]))),Ue=te.c.div(F||(F=Object(s.a)(["\n  display: flex;\n  position: absolute;\n  flex-direction: column-reverse;\n  align-items: center;\n  width: 400px;\n  height: 400px;\n  bottom: 50px;\n"]))),Ie=te.c.div(P||(P=Object(s.a)(["\n  display: grid;\n  grid-template-rows: repeat(auto-fit, 30px);\n"]))),Ae=function(e){var n=e.userObj,t=Object(r.useState)([]),c=Object(o.a)(t,2),a=c[0],i=c[1],s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(r.useState)(e),t=Object(o.a)(n,2),c=t[0],a=t[1],i=Object(r.useCallback)((function(){return a((function(e){return!e}))}),[]);return[c,i]}(),d=Object(o.a)(s,2),l=d[0],p=d[1];return Object(r.useEffect)((function(){ee.collection("tweet").orderBy("createAt","desc").onSnapshot((function(e){var n=e.docs.map((function(e){return Object(Oe.a)({id:e.id},e.data())}));i(n)}))}),[]),Object(re.jsxs)(Ce,{children:[Object(re.jsx)(u.b,{to:"/",children:"\ub3cc\uc544\uac00\uae30"}),Object(re.jsxs)(ze,{children:[Object(re.jsx)("img",{src:"/CharleyBlog/images/img1.png",alt:"d"}),Object(re.jsx)("img",{src:"/charleyBlog/images/img1.png",alt:""}),Object(re.jsx)("p",{children:"1"}),Object(re.jsx)("p",{children:"1"}),Object(re.jsx)("p",{children:"1"})]}),Object(re.jsxs)(De,{children:[Object(re.jsx)(re.Fragment,{children:l?Object(re.jsxs)(Ue,{children:[Object(re.jsx)(Se,{userObj:n}),Object(re.jsx)(Ie,{children:a.map((function(e){return Object(re.jsx)(ve,{tweetObj:e,isOwner:e.creatorId===n.uid},e.id)}))})]}):null}),Object(re.jsx)(ge.a,{children:Object(re.jsx)(fe.a,{variant:"primary",onClick:p,size:"sm",children:"Chatting"})})]})]})},Fe=te.c.nav(L||(L=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Pe=te.c.ul(N||(N=Object(s.a)(["\n  list-style: none;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n"]))),Le=te.c.li(q||(q=Object(s.a)(["\n  float: left;\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Ne=te.c.div(B||(B=Object(s.a)(['\n  width: 400px;\n  height: 250px;\n  background-image: url("https://www.pngkey.com/png/full/110-1103031_talking-png-download-face-to-face-talk-png.png");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  &:hover {\n    width: 410px;\n    height: 260px;\n  }\n']))),qe=te.c.div(E||(E=Object(s.a)(['\n  width: 400px;\n  height: 250px;\n  background-image: url("https://img.icons8.com/color/452/edit-user-female.png");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  &:hover {\n    width: 410px;\n    height: 260px;\n  }\n']))),Be=Object(te.c)(u.b)(G||(G=Object(s.a)(["\n  width: 100%;\n  text-align: center;\n"]))),Ee=te.c.p(H||(H=Object(s.a)(["\n  text-align: center;\n  vertical-align: bottom; \n  font-size: 30px;\n  font-weight: 600;\n"]))),Ge=function(e){var n=e.userObj;return Object(re.jsx)(Fe,{children:Object(re.jsxs)(Pe,{children:[Object(re.jsxs)(Le,{children:[Object(re.jsx)(Be,{to:"/Home",children:Object(re.jsx)(Ne,{})}),Object(re.jsx)(Ee,{children:"Home"})]}),Object(re.jsxs)(Le,{children:[Object(re.jsx)(Be,{to:"/profile",children:Object(re.jsx)(qe,{})}),Object(re.jsxs)(Ee,{children:[n.displayName,"\ub2d8\uc758 \ud504\ub85c\ud544"]})]})]})})},He=function(e){var n=e.refreshUser,t=e.userObj,c=Object(r.useState)(t.displayName),a=Object(o.a)(c,2),i=a[0],s=a[1],l=Object(d.f)(),j=function(){var e=Object(b.a)(p.a.mark((function e(r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t.displayName===i){e.next=5;break}return e.next=4,t.updateProfile({displayName:i});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsxs)("form",{onSubmit:j,children:[Object(re.jsx)("input",{onChange:function(e){var n=e.target.value;s(n)},value:i,type:"text",placeholder:"Display name"}),Object(re.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \uc218\uc815"})]}),Object(re.jsx)("button",{onClick:function(){$.signOut(),l.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"}),Object(re.jsx)(u.b,{to:"/",children:"\ub3cc\uc544\uac00\uae30"})]})},Re=te.c.div(R||(R=Object(s.a)(["\n  height: 25px;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 25px;\n  margin-top: 10px;\n"]))),_e=te.c.div(_||(_=Object(s.a)(["\n  font-size: 15px;\n  color: white;\n  font-weight: 600;\n  height: 25px;\n  width: 240px;\n  border-radius: 3px;\n  background: red;\n"]))),We=te.c.div(W||(W=Object(s.a)(["\n  font-size: 13px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Je=te.c.div(J||(J=Object(s.a)(["\n  width: 420px;\n  height: 420px;\n  border-radius: 18%;\n  background-color: gold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Ke=te.c.form(K||(K=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 260px;\n"]))),Me=te.c.input(M||(M=Object(s.a)(["\n  font-size: 17px;\n  width: 220px;\n  height: 36px;\n  color: black;\n  outline: none;\n  background: none;\n  border: none;\n  border-bottom: 2px solid #95a5a6;\n  &:focus::-webkit-input-placeholder {\n    color:transparent;\n  }\n"]))),Te=te.c.button(T||(T=Object(s.a)(["\n  width: 240px;\n  height: 40px;\n  font-size: 17px;\n  font-weight: 600;\n  cursor: pointer;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  background: white;\n  margin:15px 0 15px 0;\n  &:hover {\n    box-shadow: 0px 0px 4px #666666 inset;\n  }\n"]))),Ze=Object(te.c)(u.b)(Z||(Z=Object(s.a)(["\n  width: 240px;\n  height: 40px;\n  font-size: 17px;\n  font-weight: 600;\n  border-radius: 10px;\n  text-align: center;\n  text-decoration: none;\n  background-color: white;\n  &:hover {\n    box-shadow: 0px 0px 4px #666666 inset;\n  }\n"]))),Qe=te.c.span(Q||(Q=Object(s.a)(["\n  vertical-align: middle;\n  line-height: 40px;\n"]))),Ve=function(){var e=Object(r.useState)(""),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),i=Object(o.a)(a,2),s=i[0],u=i[1],d=Object(r.useState)(""),l=Object(o.a)(d,2),j=l[0],h=l[1],x=Object(r.useState)(!1),O=Object(o.a)(x,2),g=O[0],f=O[1],m=function(e){var n=e.target,t=n.name,r=n.value;"email"===t?c(r):"password"===t&&u(r)},v=function(){var e=Object(b.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,$.createUserWithEmailAndPassword(t,s);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),s===j){e.next=10;break}return e.abrupt("return",alert("\ube44\ubc00\ubc88\ud638\uc640 \ube44\ubc00\ubc88\ud638 \ud655\uc778\uc774 \uc77c\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(n.target.value!==s),h(n.target.value);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(re.jsx)(We,{children:Object(re.jsx)(Je,{children:Object(re.jsxs)(Ke,{onSubmit:v,children:[Object(re.jsx)(Me,{name:"email",type:"text",placeholder:"\uc774\uba54\uc77c",required:!0,value:t,onChange:m}),Object(re.jsx)(Me,{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,value:s,onChange:m,minLength:"6"}),Object(re.jsx)(Me,{name:"passwordCheck",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",value:j,required:!0,onChange:w,minLength:"6"}),Object(re.jsx)(Re,{children:g&&Object(re.jsx)(_e,{children:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})}),Object(re.jsx)(Te,{type:"submit",children:"\uacc4\uc815\uc0dd\uc131"}),Object(re.jsx)(Ze,{to:"/",children:Object(re.jsx)(Qe,{children:"\ub3cc\uc544\uac00\uae30"})})]})})})},Xe=function(e){var n=e.refreshUser,t=e.isLoggedIn,r=e.userObj;return Object(re.jsx)(u.a,{children:Object(re.jsx)(d.c,{children:t?Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(d.a,{exact:!0,path:"/",component:Ge,children:Object(re.jsx)(Ge,{userObj:r})}),Object(re.jsx)(d.a,{exact:!0,path:"/Home",component:Ae,children:Object(re.jsx)(Ae,{userObj:r})}),Object(re.jsx)(d.a,{exact:!0,path:"/profile",component:He,children:Object(re.jsx)(He,{refreshUser:n,userObj:r})})]}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(d.a,{exact:!0,path:"/",component:xe,children:Object(re.jsx)(xe,{})}),Object(re.jsx)(d.a,{exact:!0,path:"/Account",component:Ve,children:Object(re.jsx)(Ve,{})})]})})})},Ye=t(38),$e=Object(te.a)(V||(V=Object(s.a)(["\n    ",";\n\n    body{\n        width: 100%;\n        height: 100vh;\n        font-size: 20px;\n        background-color: white;\n        font-family: 'Noto Sans KR', sans-serif;\n    }\n"])),Ye.a),en=te.c.body(X||(X=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n"])));var nn=function(){var e=Object(r.useState)(!1),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(null),i=Object(o.a)(a,2),s=i[0],u=i[1];return Object(r.useEffect)((function(){$.onAuthStateChanged((function(e){console.log(e),u(e?{displayName:e.displayName,uid:e.uid,email:e.email,updateProfile:function(n){return e.updateProfile(n)}}:null),c(!0)}))}),[]),Object(re.jsxs)(en,{children:[Object(re.jsx)($e,{}),t?Object(re.jsx)(re.Fragment,{children:Object(re.jsx)(Xe,{refreshUser:function(){var e=$.currentUser;u({displayName:e.displayName,uid:e.uid,email:e.email,updateProfile:function(n){return e.updateProfile(n)}})},isLoggedIn:Boolean(s),userObj:s})}):"\ub85c\ub529\uc911"]})};t(57);i.a.render(Object(re.jsx)(c.a.StrictMode,{children:Object(re.jsx)(nn,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.a7c25b93.chunk.js.map