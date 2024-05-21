import React, {useState} from "react";

function Carrousel({ item }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % item.pictures.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + item.pictures.length) % item.pictures.length);
    };

    const isSingleImage = item.pictures.length === 1;

    return (
        <div className="carrousel">
            {!isSingleImage && (
                <>
                    <button className="prev-arrow" onClick={prevImage}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    <button className="next-arrow" onClick={nextImage}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>

                    <div className="image-number">{currentIndex + 1}/{item.pictures.length}</div>
                </>
            )}

            <img src={item.pictures[currentIndex]} alt={item.title} className="carrousel-image"/>
        </div>
    );
}

export default Carrousel;