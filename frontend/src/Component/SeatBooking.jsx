
// import React from 'react';
import { Grid ,Icon} from 'semantic-ui-react';
import "./seatbooking.css"

const SeatBooking = () => {
  return (
    <div className="train-coach">
      {Array.from({ length: 10 }, (_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: rowIndex === 9 ? 3 : 7 }, (_, seatIndex) => (
            <div key={seatIndex} className="seat"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatBooking;
