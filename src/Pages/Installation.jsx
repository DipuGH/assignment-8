import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // New state for sorting

  // ✅ Load installed apps from localStorage
  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  // ✅ Handle Uninstall
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    toast.success("App uninstalled successfully!", {
      duration: 2000,
      style: {
        background: "#10B981",
        color: "#fff",
      },
    });
  };

  // ✅ Handle Sorting
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedApps = [...installedApps].sort((a, b) => {
      const aDownloads = a.downloads || 0;
      const bDownloads = b.downloads || 0;
      return order === "high-low" ? bDownloads - aDownloads : aDownloads - bDownloads;
    });
    setInstalledApps(sortedApps);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* App Count and Sort Dropdown */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm font-semibold text-gray-700">
          ({installedApps.length}) Apps Found
        </p>
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="border border-gray-300 text-gray-700 text-sm px-3 py-1.5 rounded-md hover:bg-gray-100 transition"
        >
          <option value="">Sort By Downloads</option>
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      </div>

      {/* Installed Apps List */}
      <div className="space-y-4">
        {installedApps.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            No installed apps found.
          </div>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-gray-800 font-semibold text-base md:text-lg">
                    {app.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1 text-emerald-500">
                      <FaDownload /> {app.downloads ? app.downloads : "N/A"}
                    </span>
                    <span className="flex items-center gap-1 text-orange-400">
                      <FaStar /> {app.ratingAvg ? app.ratingAvg : "N/A"}
                    </span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-emerald-600 mt-3 sm:mt-0 transition"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InstalledApps;
