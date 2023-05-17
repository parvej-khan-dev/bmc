const {
  fillCoachWithSeats,
  ticketBooking,
  userBookingTicket,
  AdmingetAllSeats,
} = require("../controllers/booking");
const express = require("express");
const router = express.Router();

router.post("/booking", fillCoachWithSeats);
router.put("/ticket/booking", ticketBooking);
router.get("/user/ticket", userBookingTicket);
router.get("/seats", AdmingetAllSeats);

module.exports = router;
