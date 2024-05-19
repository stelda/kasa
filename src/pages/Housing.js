import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import items from "../data/housing.js";
import Dropdown from "../components/Dropdown";


function Housing() {
    const { id } = useParams();
    const item = items.find(item => item.id === id);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!item) {
        return <p>Élément non trouvé</p>;
    }

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % item.pictures.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + item.pictures.length) % item.pictures.length);
    };

    return (
        <div className="housing-container">
            <div className="carrousel">
                <button className="prev-arrow" onClick={prevImage}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <img src={item.pictures[currentIndex]} alt={item.title} className="carrousel-image" />
                <button className="next-arrow" onClick={nextImage}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
                <div className="image-number">{currentIndex + 1}/{item.pictures.length}</div>
            </div>
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
        </div>
    );
}

export default Housing;
