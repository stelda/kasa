import React from 'react';
import Banner from "../components/Banner";
import aboutBannerImage from "../assets/about_banner.jpg";

function About() {
    return (
        <main className='main-container'>
            <Banner
                title=""
                backgroundImage={aboutBannerImage}
                className="about-banner"
            />

            <div className='about-content'>
                <h1>About Us</h1>
                <p>Learn more about our company.</p>
            </div>
        </main>
    );
}

export default About;
