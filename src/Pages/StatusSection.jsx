import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        Trusted By Millions, Built For You
      </h2>

      <div className="flex flex-wrap justify-center gap-10 sm:gap-20">
        {/* Total Downloads */}
        <div>
          <p className="text-5xl font-extrabold">29.6M</p>
          <p className="text-sm mt-2 opacity-80">21% More Than Last Month</p>
          <p className="text-sm mt-2 font-medium opacity-80">Total Downloads</p>
        </div>

        {/* Total Reviews */}
        <div>
          <p className="text-5xl font-extrabold">906K</p>
          <p className="text-sm mt-2 opacity-80">46% More Than Last Month</p>
          <p className="text-sm mt-2 font-medium opacity-80">Total Reviews</p>
        </div>

        {/* Active Apps */}
        <div>
          <p className="text-5xl font-extrabold">132+</p>
          <p className="text-sm mt-2 opacity-80">31 More Will Launch</p>
          <p className="text-sm mt-2 font-medium opacity-80">Active Apps</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
