import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Main2 from "./components/Main2";
import "../src/styles/App.scss";
import axios from "axios";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    axios
      .get("http://heroku-hosting1.herokuapp.com/getData")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Dashboard">
            <Navbar />

            <Main />
          </Route>
          <Route path="/Users">
            <Navbar />
            <Main2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
