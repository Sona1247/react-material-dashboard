import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles/mediaQuerry.scss";
import Navbar from "./components/Navbar";
import Main2 from "./components/Main2";
import "../src/styles/App.scss";
import { useDispatch } from "react-redux";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import { addData } from "./redux/actions/action";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://heroku-hosting1.herokuapp.com/getData")
      .then((res) => dispatch(addData(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const data = useSelector((state) => state.allDataReducer);
  const route = useSelector((state) => state.linkDataReducer);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard">
            <Navbar />
            <Main data={data} />
          </Route>
          <Route path="/users">
            <Navbar />
            <Main2 />
          </Route>
          <Redirect push to={route.key ? "/dashboard" : "/users"} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
