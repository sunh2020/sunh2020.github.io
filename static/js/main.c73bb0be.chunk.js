(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(9),i=n.n(o),r=(n(30),n(6)),l=(n(36),n(5)),j=n(7),a=n.n(j),d=n(0),h=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Loading..."}),Object(d.jsx)("img",{src:"https://media.giphy.com/media/l0JMgio0LaBwQpBvO/giphy.gif",alt:"Loading"})]})},b=n(10),u=n.n(b);function O(){var e=Object(d.jsx)("span",{children:(new Date).toLocaleDateString()});i.a.render(e,document.getElementById("date"))}function x(){var e=Object(d.jsx)("span",{children:(new Date).toLocaleTimeString()});i.a.render(e,document.getElementById("time"))}var p=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),s=n[0],o=n[1];return Object(c.useEffect)((function(){var e,t;return a.a.get("http://localhost:8000/").then((function(e){console.log("Pro get response",e.data),o(e.data)})).catch((function(e){console.log(e)})).finally((function(){o({}),e=setInterval(O,1e3),t=setInterval(x,1e3)})),function(){clearInterval(e),clearInterval(t)}}),[]),null===s?Object(d.jsx)(h,{}):Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("h1",{children:"Sun's world"}),Object(d.jsx)("h2",{children:"Hello everyone! welcome to my site!"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("a",{href:"https://github.com/sunh2020",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})," "," | ",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/sunhenderson/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]}),Object(d.jsx)("div",{class:"container",children:Object(d.jsxs)("p",{children:[Object(d.jsx)("div",{class:"date-top",children:"Current date:"}),Object(d.jsx)("div",{id:"date"}),Object(d.jsx)("div",{class:"time-top",children:"Current time:"}),Object(d.jsx)("div",{id:"time"})]})}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"https://www.hitwebcounter.com",target:"_blank",children:Object(d.jsx)("img",{src:"https://hitwebcounter.com/counter/counter.php?page=7796745&style=0036&nbdigits=5&type=page&initCount=0",title:"Free Counter",Alt:"web counter",border:"0"})})})]})},g=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),s=n[0],o=n[1];return Object(c.useEffect)((function(){a.a.get("http://localhost:8000/about").then((function(e){console.log("About get response",e.data),o(e.data)})).catch((function(e){console.log(e)})).finally((function(){o({})}))}),[]),null===s?Object(d.jsx)(h,{}):Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h1",{children:"New beginning"}),Object(d.jsx)("p",{children:"I graudated from 14 weeks immersive Coding Dojo coding bootcamp on April 2nd."}),Object(d.jsx)("p",{children:"I maybe a beginner, however, my passion in coding is an expert."}),Object(d.jsx)("p",{children:"I spent 1000 hours to learn full-stack of Python, Java and MERN."}),Object(d.jsx)("p",{children:"I like React.js and I'd like to explore and learn more and build better and cool applications."}),Object(d.jsx)("p",{children:"Currently, I'm working on my blog and try to build social media application with React."})]})},f=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(e.likeCount),r=Object(l.a)(i,2),j=r[0],b=r[1];function O(){b(j+1),console.log(j)}return console.log(e),Object(c.useEffect)((function(){a.a.get("http://localhost:8000/projects").then((function(e){console.log("Projects get response",e.data),o(e.data)})).catch((function(e){console.log(e)})).finally((function(){o({})}))}),[]),null===s?Object(d.jsx)(h,{}):Object(d.jsxs)("div",{className:"projects",children:[Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Project Name"}),Object(d.jsx)("th",{children:"Language"}),Object(d.jsx)("th",{children:"Demo"}),Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Likes"})]})}),Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Faker API"}),Object(d.jsx)("td",{children:"Express & Postman"}),Object(d.jsx)("td",{children:Object(d.jsx)(u.a,{width:"100%",height:"100%",controls:!1,url:"https://youtu.be/gy--gLgT8k0"})}),Object(d.jsx)("td",{children:"Faker API generates fake person and company"}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{onClick:function(e){O()},className:"text-danger pointer",children:"\u2665"}),j]})]})})]}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Project Name"}),Object(d.jsx)("th",{children:"Language"}),Object(d.jsx)("th",{children:"Demo"}),Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Like"})]})}),Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Pokemon API"}),Object(d.jsx)("td",{children:"React & Axios"}),Object(d.jsx)("td",{children:Object(d.jsx)(u.a,{width:"100%",height:"100%",controls:!1,url:"https://youtu.be/hKt9fC2jqsk"})}),Object(d.jsx)("td",{children:"Axios pull 807 pokemons from Pokemon API"}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{onClick:function(e){O()},className:"text-danger pointer",children:"\u2665"}),j]})]})})]})]})},m=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),s=n[0],o=n[1];return Object(c.useEffect)((function(){a.a.get("http://localhost:8000/contact").then((function(e){console.log("Contact get response",e.data),o(e.data)})).catch((function(e){console.log(e)})).finally((function(){o({})}))}),[]),null===s?Object(d.jsx)(h,{}):Object(d.jsx)("div",{className:"contact",children:Object(d.jsx)("h1",{children:"Coming soon"})})};var v=function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("nav",{className:"mt-md",children:[Object(d.jsx)(r.a,{to:"/",children:"Home"})," | ",Object(d.jsx)(r.a,{to:"/about",children:"About"})," | ",Object(d.jsx)(r.a,{to:"/projects",children:"Projects"})," | ",Object(d.jsx)(r.a,{to:"/blog",children:"Blog"}),Object(d.jsxs)(r.b,{children:[Object(d.jsx)(p,{path:"/"}),Object(d.jsx)(g,{path:"/about"}),Object(d.jsx)(f,{path:"/projects"}),Object(d.jsx)(m,{path:"/blog"})]})]}),Object(d.jsx)("span",{className:"footer",children:"\xa9 2021  Sunjuyuhwa Henderson"})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),o(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),y()}},[[74,1,2]]]);
//# sourceMappingURL=main.c73bb0be.chunk.js.map