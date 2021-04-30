import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "../src/styles/App.scss";
import axios from "axios";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

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
        <Navbar />

        <Main />
      </div>
    </Router>
  );
};

export default App;
