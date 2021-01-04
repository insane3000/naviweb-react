import React from 'react'
import Slider from '../3-organisms/Slider'
import Games from '../3-organisms/Games'
import Contenido from '../3-organisms/Contenido'

const Right = () => (
    <div className="right" >
        <Slider />
        <Contenido 
        className="juegos-color-h2"
        titulo="JUEGOS ACTUALIZADOS" 
        contenido1="A continuación te mostramos los juegos más populares de" 
        negrita="Navi Games Cbba"
        contenido2="Si alguno no está actualizado, con solo notificar al que 
        atiende tu juego estará actualizado en cuestión de minutos."
        />
        <Games />
        <Contenido 
        className="promos-color-h2"
        titulo="NUESTRAS PROMOCIONES" 
        // contenido1="No tienes que perderte!" 
        negrita="No tienes que perderte!"
        contenido2="Nuestras promociones son salvajes , a continuación te mostramos algunas..."
        />

    </div>
)
export default Right 