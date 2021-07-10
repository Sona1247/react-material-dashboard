import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./mediaqueries/AppMediaquery.scss";
import "./mediaqueries/AppMediaQuery2.scss";
import "./mediaqueries/SearchMediauqery.scss";
import Navbar from "./components/Navbar";
import Main2 from "./components/Main2";
import "../src/styles/App.scss";

import { useDispatch } from "react-redux";
import Main from "./components/Main";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import { addData, changeLink } from "./redux/actions/action";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://heroku-hosting1.herokuapp.com/getData")
      .then((res) => dispatch(addData(res.data)))
      .catch((err) => console.log(err));
if (
  window.location.href === "http://localhost:3000/react-material-dashboard#/Dashboard"
){
  dispatch(changeLink(0));
}
else if(
  window.location.href === "http://localhost:3000/react-material-dashboard#/Users"

){
  dispatch(changeLink(1));
}
  }, [dispatch]);

  const data = useSelector((state) => state.allDataReducer);
  const route = useSelector((state) => state.linkDataReducer);

  return (
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route path="/dashboard">
          
            <Main data={data} />
          </Route>
          <Route path="/users">
            <Main2 />
          </Route>
          <Redirect push to={route.key === 0 ? "/dashboard" : "/users"} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
