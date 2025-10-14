import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ must be react-router-dom


const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/AppData.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  const formatDownloads = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  const displayedApps = showAll ? apps : apps.slice(0, 8);

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <div className="bg-gray-100 py-10 sm:py-14 text-center rounded-xl mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Trending Apps
        </h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm sm:text-base">
          Explore all trending apps on the market developed by us.
        </p>
      </div>

      {/* Apps Grid */}
      <div
        className="grid gap-6 sm:gap-8 justify-center sm:justify-start
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center"
      >
        {displayedApps.map((app) => (
          <Link key={app.id} to="/AppData" state={{ app }}>
            <div
              className="w-[100%] sm:w-[230px] md:w-[250px] bg-white 
              rounded-2xl shadow-sm border border-gray-100 
              hover:shadow-md transition-all duration-200 p-3"
            >
              <div className="bg-gray-200 rounded-xl overflow-hidden aspect-square">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-3 text-[15px] font-medium text-gray-800 truncate text-center sm:text-left">
                {app.title}
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 
                  text-xs font-medium px-2.5 py-1 rounded-md">
                  <FaDownload className="w-3.5 h-3.5" />
                  <span>{formatDownloads(app.downloads)}</span>
                </div>

                <div className="flex items-center gap-1 bg-orange-50 text-orange-700 
                  text-xs font-medium px-2.5 py-1 rounded-md">
                  <FaStar className="w-3.5 h-3.5" />
                  <span>{app.ratingAvg}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {!showAll && apps.length > 8 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full 
            hover:bg-blue-700 active:scale-95 transition-all duration-150"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default TrendingApps;
