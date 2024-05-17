import React from 'react';

function Header() {
    return (
        <header>
            <img src="/logo_d.png" alt="Logo" className="desktop-logo"/>
            <img src="/logo_m.png" alt="Logo" className="mobile-logo"/>

            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">À propos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;