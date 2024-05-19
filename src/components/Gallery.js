import React from "react";
import Card from "./Card";
import items from "../data/housing.js";

function Gallery() {
    if (!items || items.length === 0) {
        return <p>Aucun élément à afficher</p>;
    }

    return (
        <section className="gallery">
            {items.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </section>
    );
}

export default Gallery;