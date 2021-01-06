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
                    <div key={i.h2} className="promo">
                        <img  className="img-promo" src={i.img} alt={i.h2} loading="lazy" />
                        <div className={`${i.className1} ${i.className2}`}>
                            <h2>{i.h2}</h2>
                            <h3>{i.h3}</h3>
                            <span>
                                {i.contenido1} <br />
                                {i.contenido2}
                            </span>

                        </div>
                    </div>)}

            </div>
        )
    }




}


export default Promociones