import React from "react";
import "../styles/Navbar.scss";
import "../mediaqueries/NavbarMediaquery.scss";
import navLogo from "../images/flex.png";
import navButtonImage from "../images/button.png";
import navIcon1 from "../images/icon1.png";
import navIcon2 from "../images/icon2.png";
import Burger from "./Burger";
const Navbar = () => {
  
  return (
    <div className="navbar-side">
      <div className="navbar-logo-link">
        <div className="navbar-logo">
          <img src={navLogo} alt="logo" />
          <h3>Devias Kit</h3>
        </div>
        <div className="navbar-link">
          <img src={navButtonImage} alt="button text" />
          <p>
            See our PRO version for more design components & coded in React
            follow this link: <a href="/">https://devias.io/products/devias-kit-pro</a>
          </p>
        </div>
      </div>
      <div className="navbar-icons">
        <img src={navIcon1} alt="bell icon" />
        <img src={navIcon2}  className="navbar-second-iconImage"alt="comp icon" />
     <div className="navbar-burger-size">
     <Burger />
     </div>
      </div>
    </div>
  );
  
};

export default Navbar;



