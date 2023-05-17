import React from "react";

const SeatGrid = ({ seats }) => {
  console.log("seats", seats);
  const renderSeats = () => {
    let renderedSeats = [];
    let currentRow = 0;

    for (let i = 0; i < seats.length; i++) {
      const seat = seats[i];
      const { row, seatNumber, isBooked } = seat;

      if (row !== currentRow) {
        currentRow = row;
        renderedSeats.push(<br key={`br-${currentRow}`} />);
      }

      const seatColor = isBooked ? "red" : "green";

      renderedSeats.push(
        <div
          key={seatNumber}
          style={{
            backgroundColor: seatColor,
            padding: "10px",
            borderRadius: 10,
            margin: "5px",
            display: "inline-block",
            color:"white"
          }}
        >
          {seatNumber.toString().padStart(2, "0")}
        </div>
      );
    }

    return renderedSeats;
  };

  return <div>{renderSeats()}</div>;
};

export default SeatGrid;
