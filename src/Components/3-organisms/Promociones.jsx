import React, { Component } from "react"
import promos from '../1-atoms/promos'
class Promociones extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="promociones">
                {promos.map(i =>
                <div className="promo">
                    <img key={i.id} className="img-promo" src={i.img} alt={i.h2} />
                    <div class={`${i.className1} ${i.className2}`}>
                        <h2>{i.h2}</h2>
                        <h3>{i.h3}</h3>
                        <span>{i.contenido1}</span>
                        <span>{i.contenido2}</span>

                    </div>
                </div>)}
                
            </div>
        )
    }




}


export default Promociones