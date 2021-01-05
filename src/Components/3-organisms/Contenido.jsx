import React, { Component } from "react"

class Contenido extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="contenido" id={this.props.link}>
                <h2 className={this.props.className}>{this.props.titulo}</h2>
                <span>{this.props.contenido1} <strong>{this.props.negrita}</strong> <br/>
                {this.props.contenido2}
                </span>
            </div>
        )
    }




}


export default Contenido