import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Login from "./Components/Logincomponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Guest from "./Components/Guestcomponent";
// import Nav from "./Components/Navbarcomponent";
import Page from "./Components/Pagecomponent";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [item, setItem] = useState(null);
  const Addnewitem = (newitem) => {
    // console.log("ข้อมูลที่ส่งมาจากform", newitem);
    // setItem(newitem);

    localStorage["test"] = JSON.stringify({
      status_user: newitem,
    });
  };
  useEffect(() => {
    if (localStorage["test"]) {
      console.log(6666);
      setItem(JSON.parse(localStorage["test"]));
      // window.location.reload(false);
    }
  }, []);
  return (
    <>
      {item ? (
        <Page />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/">
              <Login onAdduser={Addnewitem} />
            </Route>
            <Route path="/guest">
              <Guest />
            </Route>
          </Switch>
        </Router>
      )}

      {/* <Router>
        <Switch>
          <Route exact path="/">
            // <Login />
          </Route>
          <Route path="/register">
            <Regis />
            <Nav />
            <Page />
          </Route>
        </Switch>
      </Router> */}
      {/* <Login onAdduser={Addnewitem} */}
    </>
  );
}

export default App;
