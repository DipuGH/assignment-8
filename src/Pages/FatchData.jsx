import React, { useEffect, useState } from "react";
import AppList from "./AppList"; // ✅ child component

const FatchData = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/AppData.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  return (
    <div className="p-4">
      <h1>Trending Apps</h1>
      {/* ✅ Pass data to child */}
      <AppList apps={apps} />
    </div>
  );
};

export default FatchData;
