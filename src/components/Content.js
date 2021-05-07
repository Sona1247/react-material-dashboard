import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import Applications from "./Applications";
import Tables from "./Tables";
import Progressbar from "./Progressbar";
import Donut from "./Donut";
import Footer from "./Footer";
import "../styles/Content.scss";
const Content = () => {
  const data = useSelector((state) => state.allDataReducer);
  const data2 = useSelector((state) => state.allDataReducer);
  return (
    <div className="content">
      {data2.data ? <Cards table={data2} /> : ""}
      <div className="charts">
        <Progressbar />
        <Donut />
      </div>
      <div className="apps-table">
        <Applications />
        {data.data ? <Tables table={data} /> : ""}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Content;
