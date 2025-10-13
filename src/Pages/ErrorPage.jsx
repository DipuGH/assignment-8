import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // go back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      {/* 404 Image */}
      <img
        src="../../public/assets/error-404.png"
        alt="404 Illustration"
        className="w-80 max-w-xs mb-6"
      />

      {/* Error Text */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
        Oops, page not found!
      </h1>
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>

      {/* Button */}
      <button
        onClick={handleGoBack}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-all duration-300"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
