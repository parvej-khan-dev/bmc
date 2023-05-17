import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import { Button ,Modal,Form} from "semantic-ui-react";
import SeatBooking from "./Component/SeatBooking";

function App() {
  const [open, setOpen] = useState(false)


  const openModel = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
         <div style={{ position: "relative", backgroundColor: "red" }}>
      <Button
        style={{ position: "absolute", top: 0, right: 0 , zIndex: 1}}
        color="green"
        onClick={openModel}
      >
        Book ticket
      </Button>
    </div>

      <SeatBooking />
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
      <input placeholder='Enter Your Name' />
    </Form.Field>
    <Form.Field>
      <label>Enter the number seat that your want to book</label>
      <input placeholder='Ex. 1,5,6,3' />
    </Form.Field>

  </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Submit</Button>
      </Modal.Actions>
    </Modal>
  
    </>
  );
}

export default App;
