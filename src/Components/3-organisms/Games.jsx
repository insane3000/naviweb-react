import React from "react"
import games from '../1-atoms/games'

const Games = () => {
    return (
        <div className="games">
            <div className="contenido" id="juegos">
                <h2 className="juegos-color-h2">JUEGOS ACTUALIZADOS</h2>
                <span>
                    A continuación te mostramos los juegos más populares de <strong>Navi Games Cbba</strong> <br/>
                    Si alguno no está actualizado, con solo notificar al que atiende tu juego estará actualizado en cuestión de minutos.
                </span>
            </div>

            <div className="game-list">
                {games.map(i => <a key={i.game} target="_blank" rel="noreferrer" href={i.href}><img key={i.game} className="img-games" src={i.img} alt={i.game} loading="lazy" /></a>)}
            </div>
        </div>
    )
}

export default Games