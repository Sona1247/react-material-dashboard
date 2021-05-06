import React from "react";
import "../styles/Cards.scss";
import CardImage1 from "../images/CardImage1.png";
import overPicture3 from "../images/cardIconfirst.png";
import overPicture1 from "../images/overPicture1.png";
import overPicture2 from "../images/overPicture2.png";
import CardImage2 from "../images/CardImage2.png";
import CardImage3 from "../images/CardImage3.png";
import CardImage6 from "../images/CardImage6.png";
import CardImage7 from "../images/CardImage7.png";
import CardImage8 from "../images/CardImage8.png";
const Cards = () => {
  return (
    <div className="all-cards">
      <div className="first-card">
        <div className="card-text-content">
          <div>
            <h3>BUDGET</h3>
            <h1>$24,000</h1>
          </div>
          <div className="first-card-main-image">
<img className="card-over-picture1" src={overPicture3} alt="over"/>

</div>
        </div>
        <div className="card-value-content">
          <img src={CardImage2} alt="cardImage" />
          <h6>12%</h6>
          <p>Since last month</p>
        </div>
      </div>
      <div className="second-card">
        <div className="card-text-content">
          <div>
            <h3>TOTAL USERS</h3>
            <h1>1600</h1>
          </div>
         <div className="second-card-main-image">
           <img src={overPicture1} alt="over"/>
         </div>
        </div>
        <div className="card-value-content">
          <img src={CardImage3} alt="cardImage" />
          <h6 className="green-card-value">16%</h6>
          <p>Since last month</p>
        </div>
      </div>
      <div className="third-card">
        <div className="card-text-content">
          <div>
            <h3>PROGRESS</h3>
            <h1>75,5%</h1>
          </div>
         
<div className="third-card-main-image">
<img className="card-over-picture2" src={overPicture2} alt="over"/>

</div>
        </div>
        <div className="card-value-content">
          <img src={CardImage8} className="card-image8" alt="cardImage" />
        </div>
      </div>
      <div className="fourth-card">
        <div className="fourth-card-text-content">
          <div>
            <h3 className="blue-fourth-card-content">TOTAL PROFITS</h3>
            <h1 className="blue-fourth-card-value">$23,200.00</h1>
          </div>
          <img src={CardImage6} alt="cardImage" />
        </div>
        <div className="fourth-card-value-content">
          <img src={CardImage7} alt="cardImage" className="card-image7"/>
          <h6 className="blue-card-percent">16%</h6>
          <p className="blue-card-month">Since last month</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
