import React, { useEffect, useState } from "react";
import { FaDownload, FaStar, FaComments } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AppInfoCard = () => {
  const location = useLocation();
  const appData = location.state?.app;
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (appData) {
      const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
      const alreadyInstalled = installedApps.some((app) => app.id === appData.id);
      setIsInstalled(alreadyInstalled);
    }
  }, [appData]);

  const handleInstall = () => {
    if (!appData) return;
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.some((app) => app.id === appData.id);

    if (!alreadyInstalled) {
      installedApps.push(appData);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setIsInstalled(true);
      toast.success(`${appData.title} installed successfully! 🎉`); // ✅ Toast
    } else {
      toast.info(`${appData.title} is already installed.`);
    }
  };

  const formatDownloads = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  if (!appData) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No app data found. Go back and select one.
      </div>
    );
  }

  return (
    <div className="mx-auto bg-white shadow-md p-6 pt-10 ">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={appData.image}
          alt={appData.title}
          className="w-32 h-32 rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900">{appData.title}</h1>
          <p className="text-sm text-gray-500">
            Developed by{" "}
            <span className="text-blue-500 font-medium">{appData.companyName}</span>
          </p>

          <div className="flex flex-wrap gap-8 justify-center sm:justify-start mt-2">
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

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`mt-4 px-6 py-2 rounded-full font-medium transition-all duration-200 
              ${isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
          >
            {isInstalled ? "Installed" : `Install Now (${appData.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Ratings</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            layout="vertical"
            data={[...appData.ratings].reverse()}
            margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#f97316" barSize={20} radius={[5, 5, 5, 5]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed">{appData.description}</p>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AppInfoCard;
