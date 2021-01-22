import React from 'react'
// import Slider from '../3-organisms/Slider'
import Intro from '../3-organisms/Intro'
import Games from '../3-organisms/Games'
import Promociones from '../3-organisms/Promociones'
import Ubicacion from '../3-organisms/Ubicacion'
import ReclamaPuntos from '../3-organisms/ReclamaPuntos'

const Right = () => (
    <div className="right" >
        {/* <Slider /> */}
        <Intro />
        <ReclamaPuntos />
        <Games />
        <Promociones />
        <Ubicacion />
    </div>
)
export default Right 