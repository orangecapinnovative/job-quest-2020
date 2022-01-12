import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Axios from "axios";
const Guest = () => {
  const [alljoke, setalljoke] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/").then((res) => {
      console.log(res.data);
      setalljoke(res.data);
    });
  }, []);
  const html = (
    <>
      <center>
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <div
              className="card-title"
              style={{ fontSize: "20px", color: "blue" }}
            >
              All Joke
            </div>
            {alljoke.map((val) => {
              return <label className="col-md-12">{val.joke}</label>;
            })}
            <Link to="/" className="btn btn-warning">
              go back to login
            </Link>
          </div>
        </div>
      </center>
    </>
  );
  return html;
};
export default Guest;
