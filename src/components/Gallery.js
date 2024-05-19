import React from "react";
import items from "../data/housing.js";

function Gallery() {
    if (!items || items.length === 0) {
        return <p>Aucun élément à afficher</p>;
    }

    return (
        <section className="gallery">
            {items.map(item => (

                <a href={`/housing/${item.id}`} className="card-link">
                    <div
                        key={item.id}
                        className="card"
                        style={{backgroundImage: `url(${item.cover})`}}
                    >
                        <div className="card-content">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                </a>
            ))}
        </section>
    );
}

export default Gallery;