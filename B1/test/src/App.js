import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
function App() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [data, setdata] = useState([]);
  return (
    <>
      <Form className="row">
        <Form.Group className="col-md-4">
          <Form.Label>first name</Form.Label>
          <Form.Control
            type="text"
            required="required"
            onChange={(event) => {
              setfirstname(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="col-md-4">
          <Form.Label>last name</Form.Label>
          <Form.Control
            type="text"
            required="required"
            onChange={(event) => {
              setlastname(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="col-md-4">
          <br />
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              Axios.get(
                `http://api.icndb.com/jokes/random?firstName=${firstname}&lastName=${lastname}`
              ).then((res) => {
                // console.log(res.data.value);
                setdata(res.data.value);
              });
            }}
          >
            Click
          </Button>
        </Form.Group>
        <label>{data.joke}</label>
      </Form>
    </>
  );
}

export default App;
