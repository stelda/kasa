import React, {useState} from "react";

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <h3>{title}</h3>
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            {isOpen && (
                <div className="dropdown-content">
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
            )}
        </div>
    );
}

export default Dropdown;