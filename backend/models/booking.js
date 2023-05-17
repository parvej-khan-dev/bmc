const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    coachNumber: {
      type: String,
      required: true,
    },
    seats: [
      {
        row: {
          type: Number,
          required: true,
          max: 12,
        },
        seatNumber: {
          type: Number,
          required: true,
        },
        isBooked: {
          type: Boolean,
          default: false,
        },
        user: {
          type: String,
          default: "Not Booked",
        },
        date: {
          type: Date,
        },
      },
    ],
    date: {
      type: String,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = { Booking };
