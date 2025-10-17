import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "../Components/LoadingSpinner";

const Root = () => {
  const navigation = useNavigation(); // ✅ detect navigation state
  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow relative">
        {isLoading && <LoadingSpinner />} {/* Show spinner during navigation */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Root;
