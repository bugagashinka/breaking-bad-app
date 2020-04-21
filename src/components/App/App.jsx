import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quotes from "pages/Quotes";
import Episodes from "pages/Episodes";
import Characters from "pages/Characters";
import Background from "components/Background";
import Error from "pages/Error";

const App = () => {
  return (
    <Router>
      <Background />
      <Switch>
        <Route exact path="/" component={Episodes} />
        <Route path="/characters" component={Characters} />
        <Route path="/quotes" component={Quotes} />
        <Route path="*">
          <Error code="404" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
