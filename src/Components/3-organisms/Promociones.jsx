import React from "react"
import promos from '../1-atoms/promos'
const Promociones = () => {

    // constructor(props) {
    //     super(props)
    // }

    return (
        <div className="promociones">

            <div className="contenido " id="promos">
                <h2 className="promos-color-h2">NUESTRAS PROMOCIONES</h2>
                <span>
                    <strong>No tienes que perderte!</strong> <br />
                    Nuestras promociones son salvajes , a continuación te mostramos algunas...
                </span>
            </div>

            <div className="promos-list">
                {promos.map(i =>
                    <div key={i.h2} className="promo">
                        <img className="img-promo" src={i.img} alt={i.h2} loading="lazy" />
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
        </div>

    )




}


export default Promociones