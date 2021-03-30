import React from 'react'
// import Slider from '../3-organisms/Slider'
import Intro from '../3-organisms/Intro'
import CanjeaPuntos from '../3-organisms/CanjeaPuntos'
// import Tienda from '../3-organisms/Tienda'
import Games from '../3-organisms/Games'
import Promociones from '../3-organisms/Promociones'
import Ubicacion from '../3-organisms/Ubicacion'


const Right = () => (
    <div className="right" >
        {/* <Slider /> */}
        <Intro />
        <CanjeaPuntos />
        {/* <Tienda /> */}
        <Games />
        <Promociones />
        <Ubicacion />
    </div>
)
export default Right 