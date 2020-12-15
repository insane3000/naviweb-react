import React from 'react'
import logo from './img/logo.webp';
import DataWifi from './DataWifi';

const datas = [
    {
        icon: "fas fa-wifi",
        text: "Natus Vincere"
    },
    {
        icon: "fas fa-lock",
        text: "••••••••••••••"
    },
    {
        icon: "fas fa-exclamation",
        text: "El password del WiFi solo esta disponible en el establecimiento de Navi Games."
    }
]


const Left = () => (
    <div className="left">
        <img className="logo" src={logo} alt="Logo de navi games cbba" />
        {datas.map(c => <DataWifi icon={c.icon} text = {c.text} />)}
    </div>
)
export default Left 