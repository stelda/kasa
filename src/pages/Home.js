import React from 'react';
import Banner from "../components/Banner";
import homeBannerImage from "../assets/home_banner.jpg";

function Home() {
    return (
        <div>
            <Banner
                title="Chez vous, partout et ailleurs"
                backgroundImage={homeBannerImage}
                className="home-banner"
            />
            <h2>Home</h2>
        </div>

    );
}

export default Home;
