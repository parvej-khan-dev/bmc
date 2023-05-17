import "./seatbooking.css";
import { SeatsAll } from "../../api";
import { useEffect, useState } from "react";
import SeatGrid from "./SeatGrid";
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
      let err = error.response.data.error
      window.alert(err);
    }
  };

  useEffect(() => {
    getBookingData();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <SeatGrid seats={bookingData} />
    </div>
  );
};

export default SeatBooking;
