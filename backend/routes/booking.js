const { fillCoachWithSeats, ticketBooking } = require("../controllers/booking");
const express = require("express");
const router = express.Router();

router.post("/booking", fillCoachWithSeats);
router.put("/ticket/booking", ticketBooking);

module.exports = router;
