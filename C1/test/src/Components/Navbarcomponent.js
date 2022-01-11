import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
const Nav = () => {
  const html = (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/addjoke"
                  className="nav-link active"
                  aria-current="page"
                >
                  Add Joke
                </Link>
              </li>
            </ul>
            <label
              style={{ cursor: "pointer" }}
              onClick={() => {
                localStorage.clear(["test"]);
                // window.location.reload(false);
                window.location.href = "http://localhost:3000/";
              }}
            >
              Log out
            </label>
          </div>
        </div>
      </nav>
    </>
  );
  return html;
};
export default Nav;
