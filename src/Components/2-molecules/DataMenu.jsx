import React from 'react'
import PropTypes from 'prop-types'

const DataMenu = ({ icon, text, className, href, id }) => (
    
        <a href={href} className={className} id={id}>
            <div className="png-menu-container"><i className={icon}></i></div>
            <p>{text}</p>
        </a>
    
)

DataMenu.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string
}

DataMenu.defaultProps = {
    text: "Default text",
    icon: "",
    className: "",
    href: ""
}

export default DataMenu