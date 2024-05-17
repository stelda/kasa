import React from "react";

function Banner({title, backgroundImage, className}) {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div className={`banner ${className}`} style={bannerStyle}>
            <h1>{title}</h1>
        </div>
    );
}

export default Banner;
