import React from 'react';
import phoneImage from '../../public/assets/hero.png';
import StatsSection from './StatusSection';
import TrendingApps from './TrendingApps';

const Home = () => {
    return (
        <section className="bg-gray-50 py-16 text-center font-sans">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                We Build <span className="text-purple-600">Productive</span> Apps
            </h1>

            {/* Subheading */}
            <p className="mt-4 max-w-xl mx-auto text-gray-600 leading-relaxed">
                At <span className="font-semibold text-gray-800">HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                <br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            {/* Store buttons */}
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                <a
                    href="#"
                    className="bg-white border border-gray-200 px-4 py-2 rounded shadow-sm hover:shadow-md transition"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Google Play"
                        className="h-10"
                    />
                </a>
                <a
                    href="#"
                    className="bg-white border border-gray-200 px-4 py-2 rounded shadow-sm hover:shadow-md transition"
                >
                    <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                        className="h-10"
                    />
                </a>
            </div>

            {/* Phone Image */}
            <div className="mt-12">
                <img
                    src={phoneImage}
                    alt="App preview on phone"
                    className="mx-auto max-w-xs md:max-w-md"
                />
            </div>

            <StatsSection></StatsSection>
            <div>
                <TrendingApps></TrendingApps>
            </div>
        </section>
        
    );
};

export default Home;