import React from 'react'
import PropTypes from 'prop-types'

const DataWifi = ({icon, text,className}) => (
    <div className={className}>
        <div className="png-container"><i className={icon}></i></div>
        <p>{text}</p>
    </div>
)

DataWifi.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string
}

DataWifi.defaultProps = {
    text: "Default text",
    icon: "",
    className:""
}

export default DataWifi