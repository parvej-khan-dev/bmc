import { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import Header from "../Header/Header";
import { getMyBooking } from "../../api";
import moment from "moment";

const MyBooking = () => {
  const [bookingData, setBookingData] = useState([]);
  async function getBookingData(username) {
    // Set the booking data to the state or perform any necessary operations
    // setMyBookingData(data);
    try {
      let bookeddata = await getMyBooking(username);

      console.log(bookeddata.data.seats, "apidata");
      let data = bookeddata.data;
      let arr = [];
      data.map((item) => {
        item.seats.forEach((el) => {
          arr.push(el);
        });
      });
      console.log(arr, "Arr");
      setBookingData(arr);
      console.log(bookingData, "bookingData");
    } catch (error) {
      console.log(error, error);
    }
  }

  useEffect(() => {
    let usernamae = localStorage.getItem("username");
    getBookingData(usernamae);
  }, []);

  return (
    <div style={{ height: "400px", overflowY: "auto" }}>
      {/* <Header /> */}
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Row No.</Table.HeaderCell>
            <Table.HeaderCell>Seat No.</Table.HeaderCell>
            <Table.HeaderCell>Booking Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {bookingData.map((element) => (
            <Table.Row key={element._id}>
              <Table.Cell>{element.user}</Table.Cell>
              <Table.Cell>{element.row}</Table.Cell>
              <Table.Cell>{element.seatNumber}</Table.Cell>
              <Table.Cell>
                {" "}
                {moment(element.date).format("MMMM Do YYYY, h:mm:ss a")}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyBooking;
