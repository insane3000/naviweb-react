import React from 'react'
import Menus from '../2-molecules/Menus';
import MenuJson from '../1-atoms/MenuJson';

const Left = () => (
    <div className="left" id="left">
        <i className="fas fa-times" id="close"></i>
        <a className="logo" href="https://navigamescbba.com/"><img src='https://1.bp.blogspot.com/-5zpomtRtkTs/YAty-hefDcI/AAAAAAAAI7M/6qGyAJYZZZgIY9zwzQZXiyreUHM2RDooACLcBGAsYHQ/s320/logo.webp' alt="Logo de navi games cbba" loading="lazy" /></a>
        <h3 className="h3-wifi">Wi-Fi</h3>

        <div className="container-data-wifi">
            <div className="container-interno-wifi">
                <img src="https://1.bp.blogspot.com/-i1CVdDTN8Qk/YAt6O7fMaaI/AAAAAAAAI9Y/9GijJfmpmrg_-gOCxg2QK6OYNO5KNdhlQCLcBGAsYHQ/s200/wifi.png" alt="wifi icon"/>
                <p>Natus Vincere</p>
            </div>
            <div className="container-interno-wifi">
                <img src="https://1.bp.blogspot.com/-lbc7hLJYbtA/YAt6Nb2RFWI/AAAAAAAAI9E/Phsw47befIMSQaFtGmMT60Q0KtrrpWDdgCLcBGAsYHQ/s200/candado.png" alt="candado icon"/>
                <p>pocoyo3000</p>
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