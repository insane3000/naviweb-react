import React from "react";

const Menus = ({ icon, text, className, href, id, funciontScroll }) => (
  <a href={href} className={className} id={id} onClick={(e) => funciontScroll(e)}>
    <img src={icon} alt="icon" />
    <p>{text}</p>
  </a>
);

export default Menus;
