import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

// import { Button ,Modal,Form} from "semantic-ui-react";
import Header from './Component/Header/Header';
import SeatBooking from './Component/Booking/SeatBooking'
function App() {
 

  return (
    <>
         <div style={{ position: "relative" }}>
    <Header/>
     <SeatBooking />
    </div>

      {/* <SeatBooking /> */}
      
  
    </>
  );
}

export default App;
