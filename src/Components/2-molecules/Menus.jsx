import React from 'react'

const Menus = ({ icon, text, className, href, id }) => (
    
        <a href={href} className={className} id={id}>
            <img src={icon} alt="icon"/>
            <p>{text}</p>
        </a>
)

export default Menus