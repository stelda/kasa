import React from 'react';
import Banner from "../components/Banner";
import aboutBannerImage from "../assets/about_banner.jpg";

function About() {
    return (
        <div>
            <Banner
                title=""
                backgroundImage={aboutBannerImage}
                className="about-banner"
            />


            <div>
                <h1>About Us</h1>
                <p>Learn more about our company.</p>
            </div>
        </div>
    );
}

export default About;
