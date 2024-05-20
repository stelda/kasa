import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import items from "../data/housing.js";
import Dropdown from "../components/Dropdown";
import Carrousel from "../components/Carrousel";

function Housing() {
    const { id } = useParams();
    const item = items.find(item => item.id === id);

    if (!item) {
        return <Navigate to="/404" />;
    }

    return (
        <main className="main-container">
            <Carrousel item={item}/>
            <div className="housing-details">
                <div className="housing-header">
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.location}</p>
                        <div className="tags">
                            {item.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="housing-host">
                            <div className="host-info">
                                <span className="host-name">{item.host.name}</span>
                                <img className="host-picture" src={item.host.picture} alt={item.host.name}/>
                            </div>
                            <div className="rating">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index}
                                          className={`fa-solid fa-star star ${index < item.rating ? 'filled' : ''}`}></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="description-equipments">
                    <Dropdown
                        title="Description"
                        content={item.description}
                    />
                    <Dropdown
                        title="Équipements"
                        content={item.equipments}
                    />
                </div>
            </div>
        </main>
    );
}

export default Housing;
