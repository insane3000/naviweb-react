import React from 'react'
import PropTypes from 'prop-types'

const DataWifi = ({icon, text,className}) => (
    <div className={className}>
        <div className="png-container"><i class={icon}></i></div>
        <p>{text}</p>
    </div>
)

DataWifi.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string
}

DataWifi.defaultProps = {
    text: "Default text",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Thumb_up_icon_2.svg/1200px-Thumb_up_icon_2.svg.png"
}

export default DataWifi