(this.webpackJsonpsultan_portfolio=this.webpackJsonpsultan_portfolio||[]).push([[0],{35:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(3),i=n(0),s=n(1),l=Object(i.createContext)(),o=function(e){var t=e.children,n=Object(i.useState)("light"),a=Object(c.a)(n,2),o=a[0],r=a[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");r(e.matches?"dark":"light"),e.addEventListener("change",(function(e){r(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:t})},r="",j="Sultan.",d="Sultan Khan",b="Mobile Application Developer | Front End Developer | Full Stack Developer",h="As an ambitious problem solver deeply passionate about crafting exceptional experiences on both web and mobile platforms, I am eager to collaborate with a team of innovative minds. My profound enthusiasm for technology, mobile applications, and user experience fuels my drive to continuously enhance my skills, ensuring I remain at the forefront of the ever-evolving tech landscape.",u="https://docs.google.com/document/d/e/2PACX-1vRbJE8vxyk6VdYdLQWcR4FJ4cn2qWs_rur3jYb8mPVikjsER42eHaZBcHFwX6Q7Ng/pub",m={linkedin:"https://www.linkedin.com/in/khansultan1",github:"https://github.com/khansultan1"},p=[{name:"Dr Sulaiman Al Habib Patient Mobile Application",description:"The Application reflects the medical group focus on quality services and commitment towards providing premier healthcare services and Cutting Edge technology to its valued patients.",stack:["Flutter","Dart","Firebase","Provider","Web RTC","Google Map","Payfort","Vonage","Android","IOS"],livePreview:"https://play.google.com/store/apps/details?id=com.ejada.hmg&hl=en&gl=US"},{name:"Al Habib Mohemm (Employee Services) Mobile Application",description:"With MOHEMM, you now have the freedom and flexibility to manage and extend your employees electronic services and provide them with an unmatched user experience from the palm of your hand.",stack:["Flutter","Dart","Firebase","Provider","SignleR","WebRTC","Google Map","Geolocation","NFC Manager","Android","IOS"],livePreview:"https://play.google.com/store/apps/details?id=hmg.cloudSolutions.mohem&hl=en&gl=US"},{name:"Doctor Application (for physician) Mobile Application",description:"The app provides an easy access for patients clinical information. Also, doctors can execute some of their daily tasks at any convenient time.",stack:["Flutter","Dart","Firebase","Provider","Google Map","Vonage","WebRTC","Android","IOS"],livePreview:"https://play.google.com/store/apps/details?id=com.hmg.hmgDr&hl=en&gl=US"}],x=["Flutter","Dart","API Integration","FireBase","Google APIs","Vonage","WebRTC","Payment Gateway","IONIC","Angular","Vue","HTML","CSS","Tailwind","Bootstrap","JavaScript","TypeScript","Vue","Vuex","Vue Router","React","Redux","SASS","Material UI","Git","CI/CD"],O="khansultan1@gmail.com",g=n(20),f=n.n(g),v=n(19),k=n.n(v),N=n(22),_=n.n(N),y=n(21),w=n.n(y),S=(n(35),function(){var e=Object(i.useContext)(l),t=Object(c.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,o=Object(i.useState)(!1),r=Object(c.a)(o,2),j=r[0],d=r[1],b=function(){return d(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,x.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(k.a,{}):Object(s.jsx)(f.a,{})}),Object(s.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(w.a,{}):Object(s.jsx)(_.a,{})})]})}),C=(n(39),function(){var e=r,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(S,{})]})}),P=n(12),A=n.n(P),M=n(26),F=n.n(M),E=(n(40),n(15)),I=n.n(E),R=function(){var e=d,t=b,n=h,a=u,c=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),Object(s.jsx)(I.a,{type:"words",animation:{x:"200px",y:"-20px",scale:1.1,ease:"ease-in-out"},animationType:"float",interval:.06,duration:.8,tag:"h4",className:"animated-paragraph about__role",includeWhiteSpaces:!0,threshold:.1,rootMargin:"20%",children:t}),Object(s.jsx)(I.a,{type:"words",animation:{x:"200px",y:"-20px",scale:1.1,ease:"ease-in-out"},animationType:"lights",interval:.08,duration:.9,tag:"p",className:"animated-paragraph about__desc",includeWhiteSpaces:!0,threshold:.1,rootMargin:"20%",children:n}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:a,target:"_blank",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(A.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(F.a,{})})]})]})]})},T=n(7),D=n.n(T),V=n(27),W=n.n(V),H=(n(44),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},D()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(A.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(W.a,{})})]})}),G=(n(45),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsxs)("div",{className:"projects__grid",children:[p.map((function(e){return Object(s.jsx)(H,{project:e},D()())})),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"more",children:Object(s.jsx)("a",{href:"https://docs.google.com/document/d/e/2PACX-1vRbJE8vxyk6VdYdLQWcR4FJ4cn2qWs_rur3jYb8mPVikjsER42eHaZBcHFwX6Q7Ng/className",target:"_blank",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline center",children:"More Projects"})})})]})]}):null}),J=(n(46),function(){return x.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},D()())}))})]}):null}),L=n(28),B=n.n(L),Y=(n(47),function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(B.a,{fontSize:"large"})})}):null}),Q=(n(48),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(49),function(){return Object(s.jsx)("footer",{className:"footer"})}),X=(n(50),function(){var e=Object(i.useContext)(l),t=Object(c.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(C,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(R,{}),Object(s.jsx)(G,{}),Object(s.jsx)(J,{}),Object(s.jsx)(Q,{})]}),Object(s.jsx)(Y,{}),Object(s.jsx)(U,{})]})});n(51);Object(a.render)(Object(s.jsx)(o,{children:Object(s.jsx)(X,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.b3067dc6.chunk.js.map