import React, { useEffect, useState } from "react";
import { FaDownload, FaStar, FaComments } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const AppInfoCard = () => {
    const location = useLocation();
    const appData = location.state?.app;
    const [isInstalled, setIsInstalled] = useState(false);

    // ✅ Check if app already installed (from localStorage)
    useEffect(() => {
        if (appData) {
            const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
            const alreadyInstalled = installedApps.some(
                (app) => app.id === appData.id
            );
            setIsInstalled(alreadyInstalled);
        }
    }, [appData]);

    // ✅ Handle Install Button Click
    const handleInstall = () => {
        if (!appData) return;

        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        const alreadyInstalled = installedApps.some(
            (app) => app.id === appData.id
        );

        if (!alreadyInstalled) {
            installedApps.push(appData);
            localStorage.setItem("installedApps", JSON.stringify(installedApps));
            setIsInstalled(true);
        }
    };

    if (!appData) {
        return (
            <div className="text-center mt-10 text-gray-500">
                No app data found. Go back and select one.
            </div>
        );
    }

    const formatDownloads = (num) => {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
        return num.toString();
    };

    return (
        <div className="mx-auto bg-white shadow-md p-6 pt-10">
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* App Icon */}
                <img
                    src={appData.image}
                    alt={appData.title}
                    className="w-32 h-32 rounded-xl object-cover"
                />

                {/* Info */}
                <div className="flex flex-col gap-3 text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-gray-900">{appData.title}</h1>
                    <p className="text-sm text-gray-500">
                        Developed by <a href="#">{appData.companyName}</a>
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap gap-6 justify-center sm:justify-start mt-2">
                        <div className="flex flex-col items-center">
                            <FaDownload className="text-green-600 text-xl" />
                            <span className="text-lg font-semibold text-gray-800">
                               {formatDownloads(appData.downloads)}
                            </span>
                            <p className="text-xs text-gray-500">Downloads</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaStar className="text-yellow-500 text-xl" />
                            <span className="text-lg font-semibold text-gray-800">
                                {appData.ratingAvg}
                            </span>
                            <p className="text-xs text-gray-500">Average Ratings</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaComments className="text-purple-500 text-xl" />
                            <span className="text-lg font-semibold text-gray-800">
                                {formatDownloads(appData.reviews)}
                            </span>
                            <p className="text-xs text-gray-500">Total Reviews</p>
                        </div>
                    </div>

                    {/* Install Button */}
                    <button
                        onClick={handleInstall}
                        disabled={isInstalled}
                        className={`mt-4 px-6 py-2 rounded-full font-medium transition-all duration-200 
            ${isInstalled
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-emerald-600 text-white hover:bg-emerald-700"
                            }`}
                    >
                        {isInstalled ? "Installed" : `Install Now (${appData.size}M)`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppInfoCard;
