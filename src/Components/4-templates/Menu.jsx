import React, { Component } from "react"




class Menu extends Component {

    componentDidMount(){
        let menuBar = document.getElementById('menu-bar')
        let Left = document.getElementById('left')
        let Close = document.getElementById('close')

        menuBar.addEventListener('click',()=>{
            Left.classList.add("left-menu")
        })
        Close.addEventListener('click',()=>{
            Left.classList.remove("left-menu")
        })
        document.getElementById('homelink').addEventListener('click',()=>{
            Left.classList.remove("left-menu")
        })
        document.getElementById('gameslink').addEventListener('click',()=>{
            console.log('lalal')
            Left.classList.remove("left-menu")
        })
        document.getElementById('promoslink').addEventListener('click',()=>{
            Left.classList.remove("left-menu")
        })
        document.getElementById('mapalink').addEventListener('click',()=>{
            Left.classList.remove("left-menu")
        })


    }
    render() {
        return (
            <div className="menu-bar" id="menu-bar">
            <i className="fas fa-bars"></i>
        </div>
        )
    }



}


export default Menu 