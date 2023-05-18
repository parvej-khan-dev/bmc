import "./seatbooking.css";
import { SeatsAll } from "../../api";
import { useEffect, useState } from "react";
import SeatGrid from "./SeatGrid";
import MyBooking from "../MyBooking/MyBooking";

const SeatBooking = () => {
  const [bookingData, setBookingData] = useState([]);
  const getBookingData = async () => {
    try {
      const bookedData = await SeatsAll();
      let bookingSeat = bookedData.data.seats;
      setBookingData(bookingSeat);
      console.log(bookingSeat, "booked data");
      console.log(bookingData, "update data");
    } catch (error) {
      console.error(error, "eroro");
      let err = error.response.data.error;
      window.alert(err);
    }
  };

  useEffect(() => {
    getBookingData();
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      {/* <Header /> */}

      <div>
        <h2 style={{ textAlign: "left" ,marginTop:20}}>Seat Availability</h2>
        <SeatGrid seats={bookingData} />
      </div>

      <div style={{ margin: 10, padding: 10 }}>
        <h2 style={{ textAlign: "left" }}>My Booking</h2>
        <MyBooking />
      </div>
    </div>
  );
};

export default SeatBooking;
