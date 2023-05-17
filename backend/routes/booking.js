const { fillCoachWithSeats, ticketBooking, userBookingTicket } = require("../controllers/booking");
const express = require("express");
const router = express.Router();

router.post("/booking", fillCoachWithSeats);
router.put("/ticket/booking", ticketBooking);
router.get("/user/ticket", userBookingTicket);

module.exports = router;
