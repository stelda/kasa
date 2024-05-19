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

        </main>
    );
}

export default About;
