import React, { useState } from "react";

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleDropdown = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setIsOpen(!isOpen);
            setIsAnimating(false);
        }, 300); // Duration of the animation
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h3>{title}</h3>
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            <div className={`dropdown-content ${isOpen ? 'opening' : 'closing'}`}>
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
}

export default Dropdown;
