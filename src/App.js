import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Result from "./components/result.js";
import LandingPage from "./components/LandingPage";
import BookDetails from './components/BookDetails'

class App extends React.Component {


  render() {
    return (
      <div>
        <Router>

          <Link to="/" style={{ border: "1px solid" }}>
            Go Back!!
          </Link>

          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/result" component={Result} />
            <Route path="/BookDetails" component={BookDetails} />
          </Switch>

        </Router>
      </div>
    )
  }
}
export default App;



