const { Booking } = require("../models/booking");

exports.fillCoachWithSeats = async (req, res) => {
  try {
    const existingCoach = await Booking.findOne({
      coachNumber: req.body.coachNumber,
    });

    if (existingCoach) {
      throw new Error("Coach already exists");
    }

    const seats = [];
    const numRows = 12; // Assuming 12 rows in each coach
    let seatNumber = 1;

    for (let row = 1; row <= numRows; row++) {
      const numSeats = row === numRows ? 3 : 7;

      for (let i = 1; i <= numSeats; i++) {
        seats.push({
          row: row,
          seatNumber: seatNumber,
          isBooked: false,
        });
        seatNumber++;
      }
    }

    const newCoach = new Booking({
      coachNumber: req.body.coachNumber,
      seats: seats,
    });

    // await newCoach.save();
    console.log(newCoach.seats.length);
    // res.json(newCoach);

    console.log(`Coach ${req.body.coachNumber} filled with seats successfully`);
  } catch (error) {
    console.error("Error filling coach with seats:", error.message);

    res.status(400).json({ error: error.message });
  }
};

exports.ticketBooking = async (req, res) => {
  try {
    const { user, numberOfSeats } = req.body;

    if (numberOfSeats > 7) {
      throw new Error("Maximum 7 seats can be booked at a time");
    }

    // Find a coach with available seats
    const coach = await Booking.findOne({
      seats: { $elemMatch: { isBooked: false } },
    });

    if (!coach) {
      throw new Error("No coach with available seats found");
    }

    const seatsToBook = [];

    // Loop through the seats to find the available seats for booking
    for (const seat of coach.seats) {
      if (seatsToBook.length === numberOfSeats) {
        break; // Enough seats found, exit the loop
      }

      if (!seat.isBooked) {
        seatsToBook.push(seat);
      }
    }

    // Check if enough available seats are found
    if (seatsToBook.length < numberOfSeats) {
      throw new Error("Insufficient available seats");
    }

    // Update the booked seats and mark them as booked
    seatsToBook.forEach((seat) => {
      seat.isBooked = true;
      seat.user = user;
      seat.date = new Date();
    });

    await coach.save();

    res
      .status(200)
      .json({ message: "Tickets booked successfully", seats: seatsToBook });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
