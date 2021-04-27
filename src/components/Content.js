import React from "react";
import Cards from "./Cards";
import Applications from "./Applications";
import Tables from "./Tables";
import "../styles/Content.scss"
const Content = () => {
  return (
    <div className="content">
      <Cards />
     <div className="apps-table">
     <Applications />
      <Tables />
     </div>
    </div>
  );
};

export default Content;
