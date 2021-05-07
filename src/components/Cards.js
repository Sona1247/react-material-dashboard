import React,{useEffect} from "react";
import {useSelector} from "react-redux";
import "../styles/Cards.scss";
import "../mediaqueries/CardsMediaquery.scss";
import overPicture3 from "../images/cardIconfirst.png";
import overPicture1 from "../images/overPicture1.png";
import overPicture2 from "../images/overPicture2.png";
import CardImage2 from "../images/CardImage2.png";
import CardImage3 from "../images/CardImage3.png";
import CardImage6 from "../images/CardImage6.png";
import CardImage7 from "../images/CardImage7.png";
import CardImage8 from "../images/CardImage8.png";
const Cards = () => {
  const data2 = useSelector((state) => state.allDataReducer);
  useEffect(() => {
    console.log(data2);
  });
  return (
    <div className="all-cards">
      <div className="first-card">
        <div className="card-text-content">
          <div>
            <h3>{data2.data.firstCard.title}</h3>
            <h1>{data2.data.firstCard.value}</h1>
          </div>
          <div className="first-card-main-image">
<img className="card-over-picture1" src={overPicture3} alt="over"/>

</div>
        </div>
        <div className="card-value-content">
          <img src={CardImage2} alt="cardImage" />
          <h6>{data2.data.firstCard.percent}</h6>
          <p>{data2.data.firstCard.subtitle}</p>
        </div>
      </div>
      <div className="second-card">
        <div className="card-text-content">
          <div>
            <h3>{data2.data.secondCard.title}</h3>
            <h1>{data2.data.secondCard.value}</h1>
          </div>
         <div className="second-card-main-image">
           <img src={overPicture1} alt="over"/>
         </div>
        </div>
        <div className="card-value-content">
          <img src={CardImage3} alt="cardImage" />
          <h6 className="green-card-value">{data2.data.secondCard.percent}</h6>
          <p>{data2.data.secondCard.subtitle}</p>
        </div>
      </div>
      <div className="third-card">
        <div className="card-text-content">
          <div>
            <h3>{data2.data.thirdCard.title}</h3>
            <h1>{data2.data.thirdCard.value}</h1>
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
            <h3 className="blue-fourth-card-content">{data2.data.fourthCard.title}</h3>
            <h1 className="blue-fourth-card-value">{data2.data.fourthCard.value}</h1>
          </div>
          <img src={CardImage6} alt="cardImage" />
        </div>
        <div className="fourth-card-value-content">
          <img src={CardImage7} alt="cardImage" className="card-image7"/>
          <h6 className="blue-card-percent">{data2.data.fourthCard.percent}</h6>
          <p className="blue-card-month">{data2.data.fourthCard.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
