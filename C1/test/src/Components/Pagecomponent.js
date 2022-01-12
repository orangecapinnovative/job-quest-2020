import Nav from "./Navbarcomponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Add from "./Addjokecomponent";

const Page = () => {
  const html = (
    <>
      <Router>
        <Nav />
        <div className="container">
          <br />
          <Switch>
            <Route exact path={`/addjoke`}>
              <Add />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
  return html;
};
export default Page;
