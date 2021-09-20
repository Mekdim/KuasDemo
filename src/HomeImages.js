import React from 'react'
import './HomeImages.css'
function HomeImages({src, description }) {
    return (
        <div className="homeImages">
            <img src={src} alt=""/>
            <p> {description} </p>
        </div>
    )
}

export default HomeImages
