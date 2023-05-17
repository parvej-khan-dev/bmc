import { useState } from "react";
import { Input, Menu, Button, Modal, Form } from "semantic-ui-react";
import { bookTicket } from "../../api";
// import SeatBooking from "../Booking/SeatBooking";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [name, setName] = useState("");
  const [seats, setSeats] = useState("");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [open, setOpen] = useState(false);

  const openModel = () => {
    setOpen((prev) => !prev);
  };

  const bookticket = async (event, data) => {
    event.preventDefault();
    try {
      const ticketBookingApi = await bookTicket(data);
      console.log(ticketBookingApi);
      window.alert(`${name} Your ${seats} Ticket Booked`);
      setSeats("");
      setName("");
      window.location.reload();
    } catch (error) {
      console.log(error, "error");
      // throw new Error(error);
      alert(error.response.data.error);
      // window.alert(error.response.data.error);
    }
  };

  return (
    <>
      <Menu secondary>
        <NavLink to="/" activeClassName="active">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
        </NavLink>
        <NavLink
          to={{
            pathname: "/booking",
          }}
          activeClassName="active"
        >
          <Menu.Item
            name="My Booking"
            active={activeItem === "My Booking"}
            onClick={handleItemClick}
          />
        </NavLink>
        {/* <Link to={`booking`}> */}

        {/* </Link> */}

        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>

          <Button color="green" onClick={openModel}>
            Book ticket
          </Button>
        </Menu.Menu>
      </Menu>

      <Modal
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Header>Book Your Ticket</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Your Name</label>
              <input
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Enter the number seat that your want to book</label>
              <input
                placeholder="Ex. 1,5,6,3"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={(e) => {
              let data = {
                user: name,
                numberOfSeats: Number(seats),
              };
              bookticket(e, data);
              setOpen(false);
            }}
          >
            Submit
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Header;
