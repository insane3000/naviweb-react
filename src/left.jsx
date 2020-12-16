import React from 'react'
import logo from './img/logo.webp';
import DataWifi from './DataWifi';
import DataMenu from './DataMenu';

const datas = [
    {
        icon: "fas fa-wifi",
        text: "Natus Vincere",
        className: "data-wifi"
    },
    {
        icon: "fas fa-lock",
        text: "••••••••••••••",
        className: "data-wifi"
    },
    {
        icon: "fas fa-exclamation",
        text: "El password del WiFi solo esta disponible en el establecimiento de Navi Games.",
        className: "data-wifi font-color"
    }
]
const menus = [
    {
        icon: "fas fa-home",
        text: "Home",
        className: "data-menu",
        href: "index.html"
        
    },
    {
        icon: "fab fa-steam",
        text: "Juegos Actualizados",
        className: "data-menu",
        href: "#"
    },
    {
        icon: "fas fa-cog",
        text: "Promociones",
        className: "data-menu",
        href: "#"
    }
    ,
    {
        icon: "fas fa-map-marker-alt",
        text: "Ubicacion",
        className: "data-menu",
        href: "#"
    }
    ,
    {
        icon: "fab fa-facebook-f", 
        text: "Facebook",
        className: "data-menu",
        href: "https://www.facebook.com/NaviGamesCbba"
    }
]



const Left = () => (
    <div className="left">
        <a className="logo" href="index.html"><img  src={logo} alt="Logo de navi games cbba" /></a>
        <h3 className="h3-wifi">Wi-Fi</h3>
        <hr />
        {datas.map(c => <DataWifi icon={c.icon} text={c.text} className={c.className} />)}
        <hr />
        <div className="menu-container">
            {menus.map(c => <DataMenu icon={c.icon} text={c.text} className={c.className} href={c.href}/>)}
        </div>
    </div>
)
export default Left 