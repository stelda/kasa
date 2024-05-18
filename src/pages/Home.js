import React from 'react';
import Banner from "../components/Banner";
import homeBannerImage from "../assets/home_banner.jpg";
import items from "../data/housing.js";
import Gallery from "../components/Gallery";

function Home() {
    return (
        <main className='main-container'>
            <Banner
                title="Chez vous, partout et ailleurs"
                backgroundImage={homeBannerImage}
                className="home-banner"
            />
            <Gallery />
        </main>

    );
}

export default Home;
