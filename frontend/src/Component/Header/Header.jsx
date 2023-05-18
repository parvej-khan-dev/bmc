import { useState, useEffect } from "react";
import { Input, Menu, Button, Modal, Form, Label } from "semantic-ui-react";
import { bookTicket } from "../../api";
// import SeatBooking from "../Booking/SeatBooking";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [name, setName] = useState("");
  const [seats, setSeats] = useState("");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const openModel = () => {
    setOpen((prev) => !prev);
  };

  const bookticket = async (event, data) => {
    try {
      event.preventDefault();
      if (username.trim() === "" || seats.trim() === "") {
        // Display an error message or perform appropriate action
        alert("Please fill in all required fields.");
      } else {
        const ticketBookingApi = await bookTicket(data);
        console.log(ticketBookingApi);
        window.alert(`${username} Your ${seats} Ticket Booked`);
        setSeats("");
        setName("");
        window.location.reload();
      }
    } catch (error) {
      console.log(error, "error");
      // throw new Error(error);
      // alert(error.response.data.error);
      // window.alert(error.response.data.error);
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      const userInput = window.prompt("Please enter your username:");
      if (userInput) {
        setUsername(userInput);
        localStorage.setItem("username", userInput);
      }
    }
  }, []);

  return (
    <>
      <Menu secondary>
        <NavLink to="/" activeClassName="active">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
            style={{ fontSize: "18px" }}
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
            style={{ fontSize: "18px" }}
          />
        </NavLink>
        {/* <Link to={`booking`}> */}

        {/* </Link> */}

        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
          style={{ fontSize: "18px" }}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item>
            <Label image>
              <img src="https://react.semantic-ui.com/images/avatar/small/ade.jpg" />
              {username}
            </Label>
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
                value={username}
                // onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Enter the number seat that your want to book</label>
              <input
                placeholder="Ex. 1,5,6,3, max 7"
                value={seats}
                type="number"
                onChange={(e) => setSeats(e.target.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={(e) => {
              let data = {
                user: username,
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
