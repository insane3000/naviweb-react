import React, { Component } from "react";

class Menu extends Component {
  componentDidMount() {
    let menuBar = document.getElementById("menu-bar");
    let Left = document.getElementById("left");
    let Close = document.getElementById("close");
    let homelink = document.getElementById("homelink");
    let gameslink = document.getElementById("gameslink");
    let promoslink = document.getElementById("promoslink");
    let ubicacionlink = document.getElementById("ubicacionlink");
    let reclamaPuntosLink = document.getElementById("reclama-puntos-link");
    // let tiendaLink = document.getElementById("tienda-link");

    menuBar.addEventListener("click", () => {
      Left.classList.add("left-menu");
    });
    Close.addEventListener("click", () => {
      Left.classList.remove("left-menu");
    });
    homelink.addEventListener("click", () => {
      Left.classList.remove("left-menu");
    });
    reclamaPuntosLink.addEventListener("click", () => {
      Left.classList.remove("left-menu");
    });
    gameslink.addEventListener("click", () => {
      Left.classList.remove("left-menu");
    });
    promoslink.addEventListener("click", () => {
      Left.classList.remove("left-menu");
    });
    ubicacionlink.addEventListener("click", () => {
      Left.classList.remove("left-menu");
    });
    // tiendaLink.addEventListener("click", () => {
    //   Left.classList.remove("left-menu");
    // });
  }
  render() {
    return (
      <div className="menu-bar" id="menu-bar">
        <i className="fas fa-bars"></i>
      </div>
    );
  }
}

export default Menu;
