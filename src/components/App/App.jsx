import React from "react";
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import Quotes from "pages/Quotes";
import Episodes from "pages/Episodes";
import Characters from "pages/Character";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="episodes">Episodes</NavLink>
          </li>
          <li>
            <NavLink to="characters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="quotes">Quotes</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Episodes} />
        <Route path="/characters" component={Characters} />
        <Route path="/quotes" component={Quotes} />
      </Switch>
    </Router>
  );
};

export default App;
