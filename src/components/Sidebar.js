import React from "react";
import "../styles/Sidebar.scss";
import avatar from "../images/avatarPhoto.png";
import sideIcon1 from "../images/sideLogo1.svg";
import sideIcon2 from "../images/sideLogo2.svg";
import sideIcon3 from "../images/sideLogo3.svg";
import sideIcon4 from "../images/sideLogo4.svg";
import sideIcon5 from "../images/sideLogo5.svg";
import sideIcon6 from "../images/sideLogo6.svg";
import sideIcon7 from "../images/sideLogo7.svg";

import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const sidebarList = [
    {
      image: sideIcon1,
      link: "Dashboard",
    },
    {
      image: sideIcon2,
      link: "Users",
    },
    {
      image: sideIcon3,
      link: "Products",
    },
    {
      image: sideIcon4,
      link: "Authentication",
    },
    {
      image: sideIcon5,
      link: "Typography",
    },
    {
      image: sideIcon6,
      link: "Icons & Images",
    },
  ];

  return (
    <div className="sidebar">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
        <h5>Roman Kutepov</h5>
        <p>Brain Director</p>
      </div>
      <div className="side-NavLinks">
        {sidebarList.map((item, key) => (
          <div className="navLinks" key={key}>
            <div className="subNavLinks">
              <img src={item.image} alt="icon" className="iconImage" />
              <NavLink key={key} to="/" className="list">
                {item.link}
              </NavLink>
            </div>
          </div>
        ))}
        <div className="sidebar-support-side">
          <h4>Support</h4>
          <div className="supportLink">
            <img src={sideIcon7} alt="icon" />{" "}
            <NavLink className="support" to="/">
              Support
            </NavLink>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
