import React, { Component } from "react"
import mascota from '../../img/mascota.webp';
class Intro extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="intro" id="intro">
                <div className="intro-data">
                    <h2>Navi Games Cbba</h2>
                    <h3>Un lugar tranquilo para jugar!</h3>
                </div>
                <div className="intro-img">
                    <img src={mascota} alt="mascota" />
                </div>
            </div>
        )
    }
}
export default Intro