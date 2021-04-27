import React from "react";
import Navbar from "./components/Navbar";
import "../src/styles/App.scss";

import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <Main />
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
