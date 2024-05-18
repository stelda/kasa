import React from "react";
import items from "../data/housing.js";

function Gallery() {
    return (
        alert(items[0].title),

        <section className="gallery">
            <div className="card">{items[0].id}</div>
            <div className="card"></div>
            <div className="card"></div>
        </section>
    );

}

export default Gallery;