import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import AppInfoCard from '../Pages/AppData';
import AllApplications from '../Pages/AllApplications';
import InstalledApps from '../Pages/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/AppData",
        Component: AppInfoCard,
      },
      {
        path: "/Apps",
        Component: AllApplications,
      },
      {
        path: "/Installation",
        Component: InstalledApps,
      },
    ],
  },
]);
