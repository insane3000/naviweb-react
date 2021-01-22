import React from 'react'
import logo from '../../img/logo.webp';
import Menus from '../2-molecules/Menus';
import MenuJson from '../1-atoms/MenuJson';

const Left = () => (
    <div className="left" id="left">
        <i className="fas fa-times" id="close"></i>
        <a className="logo" href="index.html"><img src={logo} alt="Logo de navi games cbba" loading="lazy" /></a>
        <h3 className="h3-wifi">Wi-Fi</h3>

        <div className="container-data-wifi">
            <div className="container-interno-wifi">
                <i className="fas fa-lock"></i>
                <p>Natus Vincere</p>
            </div>
            <div className="container-interno-wifi">
                <i className="fas fa-wifi"></i>
                <p>dobi3000</p>
            </div>
        </div>

        <div className="advertencia">
            <i className="fas fa-exclamation"></i>
            <p>Recuerda que la constraseña es renovada todos los días.</p>
        </div>

        <div className="menu-container">
            {MenuJson.map(c => <Menus key={c.id} icon={c.icon} text={c.text} className={c.className} href={c.href} id={c.id} />)}
        </div>
    </div>
)
export default Left 