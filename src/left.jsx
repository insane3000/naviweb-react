import React from 'react'
import logo from './img/logo.webp';
import DataWifi from './DataWifi';

const datas = [
    {
        icon: "fas fa-wifi",
        text: "Natus Vincere",
        className:"data-wifi"
    },
    {
        icon: "fas fa-lock",
        text: "••••••••••••••",
        className:"data-wifi"
    },
    {
        icon: "fas fa-exclamation",
        text: "El password del WiFi solo esta disponible en el establecimiento de Navi Games.",
        className:"data-wifi font-color"
    }
]


const Left = () => (
    <div className="left">
        
        <img className="logo" src={logo} alt="Logo de navi games cbba" />
        <h3 className="h3-wifi">Wi-Fi</h3>
        <hr/>
        {datas.map(c => <DataWifi icon={c.icon} text={c.text} className={c.className}/>)}
        <hr/>
    </div>
)
export default Left 