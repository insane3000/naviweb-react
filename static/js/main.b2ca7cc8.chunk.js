(this["webpackJsonpnaviweb-react"]=this["webpackJsonpnaviweb-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),i=a(3),o=a.n(i),r=(a(13),a.p+"static/media/logo.85060efd.webp"),l=function(e){var t=e.icon,a=e.text,c=e.className;return Object(s.jsxs)("div",{className:c,children:[Object(s.jsx)("div",{className:"png-container",children:Object(s.jsx)("i",{className:t})}),Object(s.jsx)("p",{children:a})]})};l.defaultProps={text:"Default text",icon:"",className:""};var d=l,m=[{id:"1",icon:"fas fa-wifi",text:"Natus Vincere",className:"data-wifi"},{id:"2",icon:"fas fa-lock",text:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",className:"data-wifi"},{id:"3",icon:"fas fa-exclamation",text:"El password del WiFi solo esta disponible en el establecimiento de Navi Games.",className:"data-wifi font-color"}],f=function(e){var t=e.icon,a=e.text,c=e.className,n=e.href;return Object(s.jsxs)("a",{href:n,className:c,children:[Object(s.jsx)("div",{className:"png-menu-container",children:Object(s.jsx)("i",{className:t})}),Object(s.jsx)("p",{children:a})]})};f.defaultProps={text:"Default text",icon:"",className:"",href:""};var u=f,j=[{id:"1",icon:"fas fa-home",text:"Home",className:"data-menu",href:"index.html"},{id:"2",icon:"fab fa-steam",text:"Juegos Actualizados",className:"data-menu",href:"#"},{id:"3",icon:"fas fa-cog",text:"Promociones",className:"data-menu",href:"#"},{id:"4",icon:"fas fa-map-marker-alt",text:"Ubicacion",className:"data-menu",href:"#"},{id:"5",icon:"fab fa-facebook-f",text:"Facebook",className:"data-menu",href:"https://www.facebook.com/NaviGamesCbba"}],h=function(){return Object(s.jsxs)("div",{className:"left",children:[Object(s.jsx)("a",{className:"logo",href:"index.html",children:Object(s.jsx)("img",{src:r,alt:"Logo de navi games cbba"})}),Object(s.jsx)("h3",{className:"h3-wifi",children:"Wi-Fi"}),Object(s.jsx)("hr",{}),m.map((function(e){return Object(s.jsx)(d,{icon:e.icon,text:e.text,className:e.className},e.id)})),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"menu-container",children:j.map((function(e){return Object(s.jsx)(u,{icon:e.icon,text:e.text,className:e.className,href:e.href},e.id)}))})]})},b=a(4),x=a(5),p=a(7),v=a(6),N=[{id:"1",promo:"lechu",photo:"https://insane3000.github.io/images/photos/img02.jpg"},{id:"2",promo:"inmortal",photo:"https://insane3000.github.io/images/photos/img03.jpg"},{id:"3",promo:"puntos",photo:"https://insane3000.github.io/images/photos/img05.jpg"}],O=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"componentDidMount",value:function(){var e=0,t=document.querySelectorAll(".img-photos"),a=document.getElementById("slider"),s=document.getElementById("prev"),c=document.getElementById("next"),n=document.querySelectorAll(".dot"),i=function(e){t.forEach((function(e){return e.style.display="none"})),n.forEach((function(e){return e.classList.remove("active")})),t[e].style.display="block",n[e].classList.add("active")};i(e);var o=function(){e>=t.length-1?e=0:e++,i(e)};function r(){var e=setInterval(o,3e3);a.addEventListener("mouseenter",(function(){window.clearInterval(e),s.classList.add("active-arrow"),c.classList.add("active-arrow")}))}s.addEventListener("click",(function(){e<=0?e=t.length-1:e--,i(e)})),c.addEventListener("click",o),n.forEach((function(e,t){e.addEventListener("click",(function(){return i(t)}))})),r(),a.addEventListener("mouseleave",(function(){r(),s.classList.remove("active-arrow"),c.classList.remove("active-arrow")}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"slider",id:"slider",children:[N.map((function(e){return Object(s.jsx)("img",{className:"img-photos",src:e.photo,alt:"wallpaper"},e.promo)})),Object(s.jsx)("div",{className:"dots-container",children:N.map((function(e){return Object(s.jsx)("span",{className:"dot"},e.id)}))}),Object(s.jsx)("i",{className:"fas fa-chevron-left prev",id:"prev"}),Object(s.jsx)("i",{className:"fas fa-chevron-right next",id:"next"})]})}}]),a}(c.Component),g=function(){return Object(s.jsx)("div",{className:"right",children:Object(s.jsx)(O,{})})},w=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{}),Object(s.jsx)(g,{})]})};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b2ca7cc8.chunk.js.map