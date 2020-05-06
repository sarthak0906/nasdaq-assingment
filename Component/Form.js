import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import DatePicker from "react-datepicker";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../static/css/NavStyle.css';
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


function Former(props) {
  const [startDate, setDate] = useState(new Date(2020, 3, 16));
  const [stock, setStock] = useState("XLK");

  const changeDate = (date) => {
    let d1 = new Date(2020,3,16);
    let d2 = new Date(2020,3,17);
    if (date.getTime() >= d1.getTime() && date.getTime() <= d2.getTime()){
      setDate(date);
    }
  }

  const submit = () => {
    // console.log(props);
    props.submitFn(stock, startDate.getDate());
  }

  const select = (event) => {
    setStock(event.target.value);
  }

  return (
    <Navbar className="bg-light justify-content-end">
      <Form inline className="Form">
        <Form.Group onChange={select}>
            <Form.Label className="FormLabel">Stock Select</Form.Label>
            <Form.Control className="FormInput" as="select">
              <option>XLK</option>
              <option>FTEC</option>
            </Form.Control>
          </Form.Group>
          <DatePicker
            className="FormInput"
            selected={startDate}
            onChange={changeDate}
          />
          <Button variant="primary" onClick={submit}>
            Submit
          </Button>
      </Form>
    </Navbar>
  )
}

export default Former;