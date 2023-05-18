import axios from "axios";
// const BACKEND = "http://localhost:5000/api";
const BACKEND = "https://bmc-backend-wdac.onrender.com/api";

export const getMyBooking = (username) =>
  axios.get(`${BACKEND}/user/ticket/${username}`);

export const SeatsAll = () => axios.get(`${BACKEND}/seats`);

export const bookTicket = (data) =>
  axios.put(`${BACKEND}/ticket/booking`, data);
