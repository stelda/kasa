import React from 'react';
import Banner from "../components/Banner";
import aboutBannerImage from "../assets/about_banner.jpg";
import Dropdown from "../components/Dropdown";
import about_content from "../data/about_content.js";


function About() {
    return (
        <main className='main-container'>
            <Banner
                title=""
                backgroundImage={aboutBannerImage}
                className="about-banner"
            />

            <section className="about-content">
                {about_content.map((item, index) => (
                    <Dropdown key={index} title={item.title} content={item.content} />
                ))}
            </section>

        </main>
    );
}

export default About;
