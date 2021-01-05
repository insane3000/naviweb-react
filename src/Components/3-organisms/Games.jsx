import React, { Component } from "react"
import games from '../1-atoms/games'

class Games extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="games">
                {games.map(i =><a href={i.href}><img key={i.game} className="img-games" src={i.img} alt={i.game} loading="lazy" /></a>)}
            </div>
        )
    }




}


export default Games