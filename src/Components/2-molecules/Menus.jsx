import React from 'react'

const Menus = ({ icon, text, className, href, id }) => (
    
        <a href={href} className={className} id={id}>
            <div className="png-menu-container"><i className={icon}></i></div>
            <p>{text}</p>
        </a>
)

export default Menus