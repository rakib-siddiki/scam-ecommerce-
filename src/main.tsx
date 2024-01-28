"use strict";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./Pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AosInit from "./utils/AOSInit";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AosInit />
    <RouterProvider router={router} />
  </React.StrictMode>
);
