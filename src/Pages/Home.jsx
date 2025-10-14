import React from 'react';
import phoneImage from '../../public/assets/hero.png';
import StatsSection from './StatusSection';
import TrendingApps from './TrendingApps';

const Home = () => {
    return (
        <section className="bg-gray-50 pt-15 text-center font-sans">
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
                    href="https://play.google.com/store/apps?hl=en"
                    target="_blank"
                    className="flex gap-2 bg-white border border-gray-200 px-2 py-2 rounded shadow-sm hover:shadow-md transition"
                >
                    <img
                        src="https://i.postimg.cc/4dBSnBxF/Play-Store.png"
                        alt="App Store"
                        className="w-5 h-5"
                    />
                    {/* Text */}
                    <span className="text-gray-800 font-medium text-sm">Play Store</span>
                </a>
                <a
                    href="https://www.apple.com/store"
                    target="_blank"
                    className="flex gap-2 bg-white border border-gray-200 px-4 py-2 rounded shadow-sm hover:shadow-md transition"
                >
                    <img
                        src="https://i.postimg.cc/CKZTyyM8/Apple-Store.jpg"
                        alt="App Store"
                        className="w-5 h-5"
                    />
                    {/* Text */}
                    <span className="text-gray-800 font-medium text-sm">App Store</span>
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