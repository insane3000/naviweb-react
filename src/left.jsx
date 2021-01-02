import React from 'react'
import logo from './img/logo.webp';
import DataWifi from './DataWifi';
import Datas from './Datas';
import DataMenu from './DataMenu';
import Menus from './Menus';

const Left = () => (
    <div className="left">
        <a className="logo" href="index.html"><img  src={logo} alt="Logo de navi games cbba" /></a>
        <h3 className="h3-wifi">Wi-Fi</h3>
        <hr />
        {Datas.map(c => <DataWifi icon={c.icon} text={c.text} className={c.className} />)}
        <hr />
        <div className="menu-container">
            {Menus.map(c => <DataMenu icon={c.icon} text={c.text} className={c.className} href={c.href}/>)}
        </div>
    </div>
)
export default Left 