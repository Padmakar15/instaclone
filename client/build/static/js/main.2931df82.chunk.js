(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),s=a.n(c),o=(a(42),a(7)),i=(a(43),a(6)),l=a(8),d=a(1),u=function(){var e=Object(i.f)(),t=Object(n.useContext)(C),a=t.state,r=t.dispatch;return Object(d.jsx)("nav",{children:Object(d.jsxs)("div",{className:"nav-wrapper white",children:[Object(d.jsx)(l.b,{to:a?"/":"/login",className:"brand-logo left",children:"Instagram"}),a?Object(d.jsxs)("ul",{id:"nav-mobile",className:"right",children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/profile",children:"Profile"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/create",children:"Create Post"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/myfollowingposts",children:"My Following Post"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"btn #c62828 red darken-1",onClick:function(){localStorage.clear(),r({type:"CLEAR"}),e.push("/login")},children:"Logout"})})]}):Object(d.jsxs)("ul",{id:"nav-mobile",className:"right",children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/login",children:"Signin"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/signup",children:"Signup"})})]})]})})},p=a(2),j=a.n(p),h=a(4),b=a(5),f=a.n(b),O=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(C),s=c.state,i=(c.dispatch,{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}),u=function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://localhost:5000/api/allposts",{headers:i});case 2:t=e.sent,r(t.data),console.log("response",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){localStorage.getItem("token")&&u()}),[]);var p=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("id",t),e.next=3,f.a.put("http://localhost:5000/api/like",{postId:t},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:n=e.sent,c=a.map((function(e){return e._id===n.data._id?n.data:e})),r(c),console.log("like post res",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("id",t),e.next=3,f.a.put("http://localhost:5000/api/unlike",{postId:t},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:n=e.sent,c=a.map((function(e){return e._id===n.data._id?n.data:e})),r(c),console.log("unlike post res",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(h.a)(j.a.mark((function e(t,n){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("http://localhost:5000/api/comment",{text:t,postId:n},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:c=e.sent,s=a.map((function(e){return e._id===c.data._id?c.data:e})),r(s),console.log("comment res",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("http://localhost:5000/api/deletepost/".concat(t),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:n=e.sent,c=a.filter((function(e){return e._id!==n.data._id})),r(c),console.log("delete res",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"home",children:a.map((function(e,t){return Object(d.jsxs)("div",{className:"card home-card",children:[Object(d.jsxs)("h5",{children:[Object(d.jsx)(l.b,{to:e.postedBy._id!==s._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name}),e.postedBy._id===s._id&&Object(d.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){return m(e._id)},children:"delete"})]}),Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("img",{src:e.photo,alt:"post"})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(s._id)?Object(d.jsx)("i",{className:"material-icons",onClick:function(){b(e._id)},children:"thumb_down"}):Object(d.jsx)("i",{className:"material-icons",onClick:function(){p(e._id)},children:"thumb_up"}),Object(d.jsxs)("h6",{children:[e.likes.length>0&&e.likes.length," likes"]}),Object(d.jsx)("h6",{children:e.title}),Object(d.jsx)("p",{children:e.body}),e.comments.map((function(e,t){return Object(d.jsxs)("h6",{children:[Object(d.jsx)("span",{style:{fontWeight:"500"},children:e.postedBy.name})," "+e.text]},t)})),Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault(),O(t.target[0].value,e._id)},children:Object(d.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},t)}))})},m=a(3),x=a(18),g=a(19),v=(a(36),function(){var e=Object(n.useContext)(C),t=(e.state,e.dispatch),a=Object(i.f)(),r=Object(x.a)({mode:"onTouched"}),c=r.register,s=r.handleSubmit;r.formState.errors;var o=function(){a.push("/")},u=function(){var e=Object(h.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("data",a),e.next=3,f.a.post("http://localhost:5000/api/signin",Object(m.a)({},a));case 3:n=e.sent,console.log(n.data.user),200===n.status&&(localStorage.setItem("token",n.data.token),localStorage.setItem("user",JSON.stringify(n.data.user)),Object(g.b)("You are logged in successfully!",{position:"top-center"}),t({type:"USER",payload:n.data.user}),setTimeout(o,1500)),console.log("response",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"mycard",children:[Object(d.jsx)("form",{onSubmit:s(u),children:Object(d.jsxs)("div",{className:"card auth-card",children:[Object(d.jsx)("h2",{children:"Instagram"}),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"text",name:"email"},c("email",{required:!0})),{},{placeholder:"enter email address"})),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"text",name:"password"},c("password",{required:!0})),{},{placeholder:"enter password"})),Object(d.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",children:"Login"}),Object(d.jsx)("h5",{children:Object(d.jsx)(l.b,{to:"signup",children:"Already have an account ?"})})]})}),Object(d.jsx)(g.a,{})]})}),y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(C),s=c.state,i=c.dispatch,l=Object(n.useState)(""),u=Object(o.a)(l,2),p=u[0],b=u[1],O={"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},x=function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://localhost:5000/api/getPosts",{headers:O});case 2:t=e.sent,r(t.data),console.log("response",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x()}),[]),console.log("data",a);var g=function(){var e=Object(h.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",p),t.append("upload_preset","insta-clone"),t.append("cloud_name","padmakar15"),e.next=6,f.a.post("https://api.cloudinary.com/v1_1/padmakar15/image/upload",t);case 6:return a=e.sent,e.next=9,f.a.put("http://localhost:5000/api/updateprofile",{profile:a.data.url},{headers:O});case 9:n=e.sent,localStorage.setItem("user",JSON.stringify(Object(m.a)(Object(m.a)({},s),{},{profile:n.data.profile}))),i({type:"UPDATEPROFILE",payload:n.data.profile}),console.log("update profile response",n.data);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[p]),Object(d.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(d.jsxs)("div",{style:{margin:"18px 0",borderBottom:"1px solid gray"},children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px",marginLeft:"-50px"},src:s?s.profile:"",alt:"profile"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:s&&s.name}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(d.jsxs)("h6",{children:[a?a.length:0," posts"]}),Object(d.jsxs)("h6",{children:[s?s.followers&&s.followers.length+" ":"0","followers"]}),Object(d.jsxs)("h6",{children:[s?s.following&&s.following.length+" ":"0","following"]})]})]}),Object(d.jsx)("div",{})]}),Object(d.jsxs)("div",{className:"file-field input-field",children:[Object(d.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(d.jsx)("span",{children:"Update Profile"}),Object(d.jsx)("input",{type:"file",onChange:function(e){return t=e.target.files[0],void b(t);var t}})]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]})]}),Object(d.jsx)("div",{className:"gallery",children:a.map((function(e,t){return Object(d.jsx)("img",{className:"item",src:e.photo,alt:"gallery"},t)}))})]})},w=function(){var e=Object(x.a)({mode:"onTouched"}),t=e.register,a=e.handleSubmit;e.formState.errors;var n=function(){var e=Object(h.a)(j.a.mark((function e(t){var a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.profile[0]){e.next=9;break}return(a=new FormData).append("file",t.profile[0]),a.append("upload_preset","insta-clone"),a.append("cloud_name","padmakar15"),e.next=7,f.a.post("https://api.cloudinary.com/v1_1/padmakar15/image/upload",a);case 7:n=e.sent,t.profile=n.data.url;case 9:return e.next=11,f.a.post("http://localhost:5000/api/signup",Object(m.a)({},t));case 11:200===(r=e.sent).status&&Object(g.b)("You are registered successfully!",{position:"top-center"}),console.log("response",r.data);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"mycard",children:[Object(d.jsx)("form",{onSubmit:a(n),children:Object(d.jsxs)("div",{className:"card auth-card",children:[Object(d.jsx)("h2",{children:"Instagram"}),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"text",name:"name"},t("name",{required:!0})),{},{placeholder:"enter Name"})),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"text",name:"email"},t("email",{required:!0})),{},{placeholder:"enter email address"})),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"text",name:"password"},t("password",{required:!0})),{},{placeholder:"enter password"})),Object(d.jsxs)("div",{className:"file-field input-field",children:[Object(d.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(d.jsx)("span",{children:"Upload Profile"}),Object(d.jsx)("input",Object(m.a)(Object(m.a)({name:"post"},t("profile")),{},{type:"file"}))]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(d.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",children:"Signup"}),Object(d.jsx)("h5",{children:Object(d.jsx)(l.b,{to:"signup",children:"Already have an account ?"})})]})}),Object(d.jsx)(g.a,{})]})},k=function(){var e=Object(i.f)(),t={"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},a=Object(x.a)({mode:"onTouched"}),n=a.register,r=a.handleSubmit,c=(a.formState.errors,function(){var a=Object(h.a)(j.a.mark((function a(n){var r,c,s;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(r=new FormData).append("file",n.post[0]),r.append("upload_preset","insta-clone"),r.append("cloud_name","padmakar15"),a.next=6,f.a.post("https://api.cloudinary.com/v1_1/padmakar15/image/upload",r);case 6:return c=a.sent,n.pic=c.data.url,console.log("data",n),a.next=11,f.a.post("http://localhost:5000/api/createpost",Object(m.a)({},n),{headers:t});case 11:200===(s=a.sent).status&&e.push("/"),console.log("response",s.data);case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}());return Object(d.jsx)("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"600px",padding:"20px",textAlign:"center"},children:Object(d.jsxs)("form",{onSubmit:r(c),children:[Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"text",name:"title"},n("title",{required:!0})),{},{placeholder:"title"})),Object(d.jsx)("input",Object(m.a)(Object(m.a)({type:"text",name:"body"},n("body",{required:!0})),{},{placeholder:"body"})),Object(d.jsxs)("div",{className:"file-field input-field",children:[Object(d.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(d.jsx)("span",{children:"Upload Image"}),Object(d.jsx)("input",Object(m.a)(Object(m.a)({name:"post"},n("post",{required:!0})),{},{type:"file"}))]}),Object(d.jsx)("div",{className:"file-path-wrapper",children:Object(d.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(d.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-2",children:"Create Post"})]})})},S=function(e,t){return"USER"===t.type?t.payload:"CLEAR"===t.type?null:"UPDATE"===t.type?Object(m.a)(Object(m.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPROFILE"===t.type?Object(m.a)(Object(m.a)({},e),{},{profile:t.payload}):e},N=a(10),_=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(o.a)(c,2),l=s[0],u=(s[1],Object(n.useContext)(C)),p=u.state,b=u.dispatch,O=Object(i.g)().userid,x=Object(n.useState)(!p||!p.following.includes(O)),g=Object(o.a)(x,2),v=g[0],y=g[1];console.log(O);var w={"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},k=function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://localhost:5000/api/user/".concat(O),{headers:w});case 2:t=e.sent,r(t.data),console.log("response",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){localStorage.getItem("token")&&k()}),[]),console.log("data",l);var S=function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("http://localhost:5000/api/follow",{followId:O},{headers:w});case 2:t=e.sent,b({type:"UPDATE",payload:{following:t.data.following,followers:t.data.followers}}),localStorage.setItem("user",JSON.stringify(t.data)),r((function(e){return Object(m.a)(Object(m.a)({},e),{},{user:Object(m.a)(Object(m.a)({},e.user),{},{followers:[].concat(Object(N.a)(e.user.followers),[t.data._id])})})})),y(!1),console.log("follow user res",t.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("http://localhost:5000/api/unfollow",{unfollowId:O},{headers:w});case 2:t=e.sent,b({type:"UPDATE",payload:{following:t.data.following,followers:t.data.followers}}),localStorage.setItem("user",JSON.stringify(t.data)),r((function(e){var a=e.user.followers.filter((function(e){return e!==t.data._id}));return Object(m.a)(Object(m.a)({},e),{},{user:Object(m.a)(Object(m.a)({},e.user),{},{followers:a})})})),y(!0),console.log("unfollow user res",t.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:a?Object(d.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0",borderBottom:"1px solid gray"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px",marginLeft:"-50px"},src:a.user.picture,alt:"profile"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:a.user.name}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(d.jsxs)("h6",{children:[a.posts.length," posts"]}),Object(d.jsxs)("h6",{children:[a.user.followers.length," followers"]}),Object(d.jsxs)("h6",{children:[a.user.following.length," following"]})]}),v?Object(d.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return S()},children:"follow"}):Object(d.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return _()},children:"unfollow"})]}),Object(d.jsx)("div",{})]}),Object(d.jsx)("div",{className:"gallery",children:a.posts.map((function(e,t){return Object(d.jsx)("img",{className:"item",src:e.photo,alt:"gallery"},t)}))})]}):Object(d.jsx)("h2",{children:"Loading..."})})},I=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(C),s=c.state,i=(c.dispatch,{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}),u=function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("http://localhost:5000/api/getsubposts",{headers:i});case 2:t=e.sent,r(t.data),console.log("response",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){localStorage.getItem("token")&&u()}),[]);var p=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("id",t),e.next=3,f.a.put("http://localhost:5000/api/like",{postId:t},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:n=e.sent,c=a.map((function(e){return e._id===n.data._id?n.data:e})),r(c),console.log("like post res",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("id",t),e.next=3,f.a.put("http://localhost:5000/api/unlike",{postId:t},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:n=e.sent,c=a.map((function(e){return e._id===n.data._id?n.data:e})),r(c),console.log("unlike post res",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(h.a)(j.a.mark((function e(t,n){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("http://localhost:5000/api/comment",{text:t,postId:n},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:c=e.sent,s=a.map((function(e){return e._id===c.data._id?c.data:e})),r(s),console.log("comment res",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("http://localhost:5000/api/deletepost/".concat(t),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:n=e.sent,c=a.filter((function(e){return e._id!==n.data._id})),r(c),console.log("delete res",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"home",children:a.map((function(e,t){return Object(d.jsxs)("div",{className:"card home-card",children:[Object(d.jsxs)("h5",{children:[Object(d.jsx)(l.b,{to:e.postedBy._id!==s._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name}),e.postedBy._id===s._id&&Object(d.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){return m(e._id)},children:"delete"})]}),Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("img",{src:e.photo,alt:"post"})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(s._id)?Object(d.jsx)("i",{className:"material-icons",onClick:function(){b(e._id)},children:"thumb_down"}):Object(d.jsx)("i",{className:"material-icons",onClick:function(){p(e._id)},children:"thumb_up"}),Object(d.jsxs)("h6",{children:[e.likes.length>0&&e.likes.length," likes"]}),Object(d.jsx)("h6",{children:e.title}),Object(d.jsx)("p",{children:e.body}),e.comments.map((function(e,t){return Object(d.jsxs)("h6",{children:[Object(d.jsx)("span",{style:{fontWeight:"500"},children:e.postedBy.name})," "+e.text]},t)})),Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault(),O(t.target[0].value,e._id)},children:Object(d.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},t)}))})},C=Object(n.createContext)(),B=function(){var e=Object(i.f)(),t=Object(n.useContext)(C),a=(t.state,t.dispatch);return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?a({type:"USER",payload:t}):e.push("/login")}),[]),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",exact:!0,component:O}),Object(d.jsx)(i.a,{path:"/login",component:v}),Object(d.jsx)(i.a,{path:"/profile",exact:!0,component:y}),Object(d.jsx)(i.a,{path:"/signup",component:w}),Object(d.jsx)(i.a,{path:"/create",component:k}),Object(d.jsx)(i.a,{path:"/profile/:userid",component:_}),Object(d.jsx)(i.a,{path:"/myfollowingposts",component:I})]})};var A=function(){var e=Object(n.useReducer)(S,null),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(d.jsx)(C.Provider,{value:{state:a,dispatch:r},children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(B,{})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),E()}},[[69,1,2]]]);
//# sourceMappingURL=main.2931df82.chunk.js.map