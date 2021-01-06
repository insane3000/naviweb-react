import React from 'react'
import logo from '../../img/logo.webp';
import DataWifi from '../2-molecules/DataWifi';
import Datas from '../1-atoms/Datas';
import DataMenu from '../2-molecules/DataMenu';
import Menus from '../1-atoms/Menus';

const Left = () => (
    <div className="left" id="left">
        <i className="fas fa-times" id="close"></i>
        <a className="logo" href="index.html"><img  src={logo} alt="Logo de navi games cbba" loading="lazy" /></a>
        <h3 className="h3-wifi">Wi-Fi</h3>
        <hr />
        {Datas.map(c => <DataWifi key={c.id} icon={c.icon} text={c.text} className={c.className} />)}
        <hr />
        <div className="menu-container">
            {Menus.map(c => <DataMenu key={c.id} icon={c.icon} text={c.text} className={c.className} href={c.href} id={c.id}/>)}
        </div>
    </div>
)
export default Left 