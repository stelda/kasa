import React from "react";

function Card({ item }) {
    return (
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
    );
}

export default Card;