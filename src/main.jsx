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
        loader: () => fetch("/donations.json"),
        element: <Home></Home>,
      },
      {
        path: "/donation/:Id",
        loader: () => fetch("/donations.json"),
        element: <DonationApply></DonationApply>,
      },
      {
        path: "/donations",
        loader: () => fetch("/donations.json"),
        element: <Donations></Donations>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
