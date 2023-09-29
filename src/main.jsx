import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Home/Home";
import Donations from "./component/Donations/Donations";
import Statistics from "./component/Statistics/Statistics";
import DonationApply from "./component/DonationApply/DonationApply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar></NavBar>,
    children: [
      {
        path: "/",
        loader: () => fetch("../public/donations.json"),
        element: <Home></Home>,
      },
      {
        path: "/donations",
        element: <Donations></Donations>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donation/:Id",
        loader: () => fetch("../public/donations.json"),
        element: <DonationApply></DonationApply>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
