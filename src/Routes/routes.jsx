import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import AppInfoCard from '../Pages/AppData';
// import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
// import AppList from '../Pages/AppList';
// import FatchData from '../Pages/FatchData';
import AllApplications from '../Pages/AllApplications';
import InstalledApps from '../Pages/Installation';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
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
                path:"/Apps",
                Component: AllApplications,
            },
            {
                path:"/Installation",
                Component: InstalledApps,
                
            }

        ]
    },
]);