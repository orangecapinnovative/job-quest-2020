import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hide, sethide] = useState("hidden");
  const html = (
    <>
      <center>
        <div className="card" style={{ width: "18rem", margin: "30px" }}>
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">Welcome!!!</h5>
            <input
              type="text"
              placeholder="username"
              className="form-control"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                // console.log(event.target.value);
              }}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                // console.log(event.target.value);
              }}
            />
            <label hidden={hide} style={{ color: "red", fontSize: "13px" }}>
              *------รหัสไม่ถูกต้อง
            </label>
            <br />
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "30%" }}
              onClick={() => {
                if (username === "admin" && password === "1234") {
                  sethide("hidden");
                  props.onAdduser("1");
                  window.location.reload(false);
                } else {
                  setUsername("");
                  setPassword("");
                  return sethide("");
                }
              }}
            >
              login
            </button>
            &nbsp;
            <Link to="/guest" className="btn btn-info">
              guest
            </Link>
            <br />
          </div>
        </div>
      </center>
    </>
  );
  return html;
};
export default Login;
