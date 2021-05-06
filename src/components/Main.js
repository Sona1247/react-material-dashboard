import React,{useEffect} from "react";
import Content from "./Content"
import Sidebar from "./Sidebar";
import "../styles/Main.scss"
const Main = (props) => {
  return (
    <div className="main">
      <Sidebar />
     <Content  />
    </div>
  );
};

export default Main;
