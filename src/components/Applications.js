import React from 'react'
import "../styles/Applications.scss"
import "../mediaqueries/ApplicationsMediaquery.scss"
import SlackLogo from "../images/slackLogo.png"
import firstApp from "../images/firstApp.png"
import secondApp from "../images/secondApp.png"
import GithubLogo from "../images/githubLogo.png"
import points from "../images/points.png"
import directionImage from "../images/directionImage.png"
import {NavLink} from "react-router-dom"
const Applications = () => {
    const applicationList = [
        {
          image1: firstApp,
          title: "Dropbox",
          subtitle:"Updated 5hr ago",
          image2: points,
        },
        {
          image1: secondApp,
          title: "Medium Corporation",
          subtitle:"Updated 5hr ago",
          image2: points,
        },
        {
          image1: GithubLogo,
          title: "GitHub",
          subtitle:"Updated 5hr ago",
          image2: points,
        },
        {
          image1: SlackLogo,
          title: "Slack",
          subtitle:"Updated 5hr ago",
          image2: points,
        },
      ];
    return (
        <div className="all-applications">
            <div className="products">
                <h5 className="product-title">Latest Products</h5>
                <p className="product-total">5 in total</p>
            </div>
            {applicationList.map((item, key) => (
           <div className="applications" key={key}>
             <div key={key} className="application-side">
             <img src={item.image1} alt="app-logo" className="application-image"/>
               <div className="applications-content" key={key}>
                   <h2 className="title">{item.title}</h2>
                   <p className="subtitle">{item.subtitle}</p>
               </div>
             </div>
               <img src={item.image2} alt="points" className="point"/>
             
           </div>
             ))}
             <div className="last-applications">
              <NavLink to="/" className="view">
              View all
              </NavLink>
              <img src={directionImage} alt="direction-logo" className="direction"/>
             </div>
        </div>
    )
}

export default Applications


