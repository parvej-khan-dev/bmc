import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import MyBooking from "./Component/MyBooking/MyBooking.jsx";
import Header from "./Component/Header/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header /> {/* Include the Header component */}
        <App />
      </>
    ),
  },
  {
    path: "/booking",
    element: (
      <>
        <Header />
        <MyBooking />
      </>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
