import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'
import SeatBooking from './Component/Booking/SeatBooking.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/booking",
    element:  <SeatBooking />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />

  </React.StrictMode>,
)
