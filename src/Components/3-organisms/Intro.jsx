import React from "react"
import mascota from '../../img/mascota.webp';

const Intro = () => {

    return (
        <div className="intro" id="intro">
            <div className="intro-data">
                <h2>Navi Games Cbba</h2>
                <h3>Juega desde <strong>2Bs</strong> la hora... <br/> Con tu cuenta <strong>Inmortal.</strong></h3>
            </div>
            <div className="intro-img">
                <img src={mascota} alt="mascota" />
            </div>
        </div>
    )

}
export default Intro