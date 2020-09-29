import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FlashCards from "./components/FlashCards.component";
import Header from "./components/Header.component";
import ManageCards from "./components/ManageCards.component";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={FlashCards} />
          <Route exact path="/manage" component={ManageCards} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
