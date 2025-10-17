import React, { useEffect, useState } from "react";
import { FaDownload, FaStar, FaSearch, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllApplications = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  // ✅ Fetch JSON Data
  useEffect(() => {
    setLoading(true);
    fetch("/AppData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching JSON:", err);
        setLoading(false);
      });
  }, []);

  // ✅ Handle Search with delay
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearching(true);

    clearTimeout(window.searchTimer);
    window.searchTimer = setTimeout(() => setSearching(false), 500);
  };

  // ✅ Filtered Apps
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Format Downloads
  const formatDownloads = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      {/* ✅ Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Our All Applications
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Explore all apps developed by us — we code for millions.
        </p>
      </div>

      {/* ✅ Search & Count */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <p className="text-gray-700 font-medium text-sm sm:text-base">
          ({filteredApps.length}) Apps Found
        </p>

        <div className="relative w-full sm:w-[250px]">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search Apps..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* ✅ Loading Animation */}
      {loading && (
        <div className="flex justify-center items-center h-64">
          <FaSpinner className="animate-spin text-blue-500 text-4xl" />
          <span className="ml-3 text-gray-600 text-lg font-medium">
            Loading Apps...
          </span>
        </div>
      )}

      {/* ✅ Searching Animation */}
      {!loading && searching && (
        <div className="flex justify-center items-center h-40">
          <FaSpinner className="animate-spin text-green-500 text-3xl" />
          <span className="ml-2 text-gray-600 text-base font-medium">
            Searching...
          </span>
        </div>
      )}

      {/* ✅ Not Found */}
      {!loading && !searching && filteredApps.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
            alt="Not Found"
            className="w-24 h-24 mx-auto mb-3 opacity-80"
          />
          <p className="text-lg font-medium">No Apps Found</p>
          <p className="text-sm text-gray-400">Try searching something else.</p>
        </div>
      )}

      {/* ✅ Apps Grid */}
      {!loading && !searching && filteredApps.length > 0 && (
        <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
          {filteredApps.map((app) => (
            <Link key={app.id} to="/AppData" state={{ app }}>
              <div className="w-[90%] sm:w-[200px] bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 p-3 cursor-pointer">
                <div className="bg-gray-200 rounded-xl overflow-hidden aspect-square">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-[14px] font-medium text-gray-800 truncate text-center sm:text-left">
                  {app.title}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-md">
                    <FaDownload className="w-3.5 h-3.5" />
                    <span>{formatDownloads(app.downloads)}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-orange-50 text-orange-700 text-xs font-medium px-2.5 py-1 rounded-md">
                    <FaStar className="w-3.5 h-3.5" />
                    <span>{app.ratingAvg}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApplications;
