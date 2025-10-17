import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast'; // ✅ Import Toaster

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

            {/* ✅ Toast Notification Container */}
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Root;
