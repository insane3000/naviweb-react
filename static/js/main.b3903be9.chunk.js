(this["webpackJsonpnaviweb-react"]=this["webpackJsonpnaviweb-react"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var s=t(0),o=t(1),i=t.n(o),n=t(7),c=t.n(n),r=(t(13),t.p+"static/media/logo.85060efd.webp"),m=function(e){var a=e.icon,t=e.text,o=e.className;return Object(s.jsxs)("div",{className:o,children:[Object(s.jsx)("div",{className:"png-container",children:Object(s.jsx)("i",{className:a})}),Object(s.jsx)("p",{children:t})]})};m.defaultProps={text:"Default text",icon:"",className:""};var l=m,d=[{id:"1",icon:"fas fa-wifi",text:"Natus Vincere",className:"data-wifi"},{id:"2",icon:"fas fa-lock",text:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",className:"data-wifi"},{id:"3",icon:"fas fa-exclamation",text:"El password del WiFi solo esta disponible en el establecimiento de Navi Games.",className:"data-wifi font-color"}],h=function(e){var a=e.icon,t=e.text,o=e.className,i=e.href;return Object(s.jsxs)("a",{href:i,className:o,children:[Object(s.jsx)("div",{className:"png-menu-container",children:Object(s.jsx)("i",{className:a})}),Object(s.jsx)("p",{children:t})]})};h.defaultProps={text:"Default text",icon:"",className:"",href:""};var p=h,b=[{id:"1",icon:"fas fa-home",text:"Home",className:"data-menu",href:"#slider"},{id:"2",icon:"fab fa-steam",text:"Juegos Actualizados",className:"data-menu",href:"#juegos"},{id:"3",icon:"fas fa-cog",text:"Promociones",className:"data-menu",href:"#promos"},{id:"4",icon:"fas fa-map-marker-alt",text:"Ubicacion",className:"data-menu",href:"#mapa"},{id:"5",icon:"fab fa-facebook-f",text:"Facebook",className:"data-menu",href:"https://www.facebook.com/NaviGamesCbba"}],u=function(){return Object(s.jsxs)("div",{className:"left",children:[Object(s.jsx)("a",{className:"logo",href:"index.html",children:Object(s.jsx)("img",{src:r,alt:"Logo de navi games cbba"})}),Object(s.jsx)("h3",{className:"h3-wifi",children:"Wi-Fi"}),Object(s.jsx)("hr",{}),d.map((function(e){return Object(s.jsx)(l,{icon:e.icon,text:e.text,className:e.className},e.id)})),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"menu-container",children:b.map((function(e){return Object(s.jsx)(p,{icon:e.icon,text:e.text,className:e.className,href:e.href},e.id)}))})]})},j=t(2),g=t(3),f=t(5),O=t(4),x=function(e){Object(f.a)(t,e);var a=Object(O.a)(t);function t(){return Object(j.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"intro",children:[Object(s.jsxs)("div",{className:"intro-data",children:[Object(s.jsx)("h2",{children:"Navi Games Cbba"}),Object(s.jsx)("h3",{children:"Un lugar tranquilo para jugar!"})]}),Object(s.jsx)("div",{class:"intro-img",children:Object(s.jsx)("img",{src:"https://insane3000.github.io/images/photos/mascota.webp",alt:"mascota"})})]})}}]),t}(o.Component),N=[{id:"1",game:"dota",img:"https://insane3000.github.io/images/photos/game1.webp",href:"https://es.dota2.com/"},{id:"2",game:"lol",img:"https://insane3000.github.io/images/photos/game2.webp",href:"https://na.leagueoflegends.com/"},{id:"3",game:"apex",img:"https://insane3000.github.io/images/photos/game3.webp",href:"https://www.ea.com/es-es/games/apex-legends"},{id:"4",game:"wow",img:"https://insane3000.github.io/images/photos/game4.webp",href:"https://worldofwarcraft.com/es-es/"},{id:"5",game:"pugb",img:"https://insane3000.github.io/images/photos/game5.webp",href:"https://www.pubg.com/es/"},{id:"6",game:"fortnite",img:"https://insane3000.github.io/images/photos/game6.webp",href:"https://www.epicgames.com/fortnite/es-ES/home"},{id:"7",game:"csgo",img:"https://insane3000.github.io/images/photos/game7.webp",href:"https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?l=spanish"},{id:"8",game:"freefire",img:"https://insane3000.github.io/images/photos/game8.webp",href:"https://ffsoporte.garena.com/hc/es-419"}],w=function(e){Object(f.a)(t,e);var a=Object(O.a)(t);function t(){return Object(j.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"games",children:N.map((function(e){return Object(s.jsx)("a",{href:e.href,children:Object(s.jsx)("img",{className:"img-games",src:e.img,alt:e.game,loading:"lazy"},e.game)})}))})}}]),t}(o.Component),v=function(e){Object(f.a)(t,e);var a=Object(O.a)(t);function t(){return Object(j.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"contenido",id:this.props.link,children:[Object(s.jsx)("h2",{className:this.props.className,children:this.props.titulo}),Object(s.jsxs)("span",{children:[this.props.contenido1," ",Object(s.jsx)("strong",{children:this.props.negrita})," ",Object(s.jsx)("br",{}),this.props.contenido2]})]})}}]),t}(o.Component),E=[{id:"1",h2:"juega gratis!",img:"https://insane3000.github.io/images/photos/promo1.webp",h3:"\xbfERES BUENO EN DOTA?",contenido1:"Saca un Rampage con el heroe de la semana.",contenido2:"Reclama 50Bs de cr\xe9dito y 10 puntos.",className1:"info",className2:"degradado1"},{id:"2",h2:"promo cumple",img:"https://insane3000.github.io/images/photos/promo2.webp",h3:"",contenido1:"En tu cumple trae tu carnet y reclama tu doble carga!",className1:"info",className2:"degradado2"},{id:"3",h2:"acumula putos",img:"https://insane3000.github.io/images/photos/promo3.webp",h3:"",contenido1:"Por cada carga de 20bs el sistema te regala 4Bs o 4 puntos.",contenido2:"Esos puntos los puedes gastar como cr\xe9dito o acumular para reclamar premios!",className1:"info",className2:"degradado3"},{id:"4",h2:"promo rampage",img:"https://insane3000.github.io/images/photos/promo4.webp",h3:"\xbfERES BUENO EN DOTA?",contenido1:"Saca un Rampage con el heroe de la semana.",contenido2:"En modo RANKING SOLO y reclama 20Bs de cr\xe9ditoy 4 puntos.",className1:"info",className2:"degradado4"},{id:"5",h2:"promo domingo",img:"https://insane3000.github.io/images/photos/promo5.webp",h3:"",contenido1:"Aprovecha los domingos para comprar tu boleto...",contenido2:"Por 50Bs, obtienes 60bs y 12 puntos.",className1:"info",className2:"degradado5"},{id:"6",h2:"cuenta inmortal",img:"https://insane3000.github.io/images/photos/promo6.webp",h3:"\xbfNECESITAS MAS TIEMPO Y MEJOR PRECIO",contenido1:"Crea tu cuenta INMORTAL, la hora es mas econ\xf3mica.",className1:"info",className2:"degradado6"}],y=function(e){Object(f.a)(t,e);var a=Object(O.a)(t);function t(){return Object(j.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"promociones",children:E.map((function(e){return Object(s.jsxs)("div",{className:"promo",children:[Object(s.jsx)("img",{className:"img-promo",src:e.img,alt:e.h2,loading:"lazy"},e.id),Object(s.jsxs)("div",{class:"".concat(e.className1," ").concat(e.className2),children:[Object(s.jsx)("h2",{children:e.h2}),Object(s.jsx)("h3",{children:e.h3}),Object(s.jsxs)("span",{children:[e.contenido1," ",Object(s.jsx)("br",{}),e.contenido2]})]})]})}))})}}]),t}(o.Component),A=function(e){Object(f.a)(t,e);var a=Object(O.a)(t);function t(){return Object(j.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"mapa",children:Object(s.jsx)("iframe",{title:"mapa",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15229.448610247093!2d-66.1514648!3d-17.3943994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x718e0fb972b7017e!2s%5BNavi%20Games%20Dota%202%5D!5e0!3m2!1ses-419!2sbo!4v1609808792320!5m2!1ses-419!2sbo",width:"600",height:"450",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})})}}]),t}(o.Component),S=function(){return Object(s.jsxs)("div",{className:"right",children:[Object(s.jsx)(x,{}),Object(s.jsx)(v,{link:"juegos",className:"juegos-color-h2",titulo:"JUEGOS ACTUALIZADOS",contenido1:"A continuaci\xf3n te mostramos los juegos m\xe1s populares de",negrita:"Navi Games Cbba",contenido2:"Si alguno no est\xe1 actualizado, con solo notificar al que \r atiende tu juego estar\xe1 actualizado en cuesti\xf3n de minutos."}),Object(s.jsx)(w,{}),Object(s.jsx)(v,{link:"promos",className:"promos-color-h2",titulo:"NUESTRAS PROMOCIONES",negrita:"No tienes que perderte!",contenido2:"Nuestras promociones son salvajes , a continuaci\xf3n te mostramos algunas..."}),Object(s.jsx)(y,{}),Object(s.jsx)(v,{link:"mapa",className:"ubicacion-color-h2",titulo:"NUESTRA UBICACION",contenido1:"Calle Jordan.\r Entre 16 de julio y antezana N\xba723 acera norte.",negrita:"Planta baja del instituto INAP.",contenido2:"Abrimos de 7:30 am a 10:00 pm. Y lechu los fines de semana... :D"}),Object(s.jsx)(A,{})]})},k=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u,{}),Object(s.jsx)(S,{})]})};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b3903be9.chunk.js.map