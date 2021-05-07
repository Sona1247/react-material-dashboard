import React from "react";
import styled from "styled-components";
import "../styles/RightDirectionNav.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeLink } from "../redux/actions/action";

import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: none;

  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 850px) {
    flex-flow: column nowrap;
    background-color: #3f51b5;
    z-index: 9;
    position: absolute;
    display: block;
    right: ${({ open }) => (open ? "0" : "100%")};
    top: 64px;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: all 0.4s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export default function RightDirectionNav({ open }) {
  const dispatch = useDispatch();
  const listKey = useSelector((state) => state.linkDataReducer);
  const linkClick = (key) => {
    dispatch(changeLink(key));
    document.querySelector(".sc-gtsrHT").classList.remove("dpkqfm")
    document.querySelector(".sc-bdnxRM").classList.add("gEseQU")
    document.querySelector(".sc-bdnxRM").classList.remove("fuRgLU")
    document.querySelector(".sc-gtsrHT").classList.add("fXvcEa")
    document.querySelector(".sc-bdnxRM").classList.add("fzGQbW")
    document.querySelector(".sc-gtsrHT").classList.add("jmvFTq")
    document.querySelector(".sc-gtsrHT").classList.remove("ctYbLy")
    document.querySelector(".sc-bdnxRM").classList.remove("gAuIUi")
  
  };
  const sidebarList = [
    {
      image: (key) => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask8"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.800354 0.521606H9.22562V11.0532H0.800354V0.521606ZM19.7572 0.521606H11.3319V6.84055H19.7572V0.521606ZM7.1193 8.94687V2.62792H2.90667V8.94687H7.1193ZM17.6509 4.73424V2.62792H13.4382V4.73424H17.6509ZM17.6509 11.0532V17.3721H13.4382V11.0532H17.6509ZM7.1193 17.3721V15.2658H2.90667V17.3721H7.1193ZM19.7572 8.94687H11.3319V19.4784H19.7572V8.94687ZM0.800354 13.1595H9.22562V19.4784H0.800354V13.1595Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask8)">
            <rect
              style={key === listKey.key ? { fill: "#3F51B5" } : {}}
              x="-2"
              y="-2"
              width="24"
              height="24"
              fill="white"
            />
          </g>
        </svg>
      ),
      link: "Dashboard",
    },
    {
      image: (key) => (
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask9"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="14"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.11336 7.00002C8.95237 7.00002 10.4484 5.50403 10.4484 3.66502C10.4484 1.826 8.95237 0.330017 7.11336 0.330017C5.27435 0.330017 3.77836 1.826 3.77836 3.66502C3.77836 5.50403 5.27435 7.00002 7.11336 7.00002ZM0.443359 12.0025C0.443359 9.78236 4.88367 8.66752 7.11336 8.66752C9.34305 8.66752 13.7834 9.78236 13.7834 12.0025V13.67H0.443359V12.0025ZM7.11336 10.5732C5.40775 10.5732 3.47345 11.2116 2.67305 11.7643H11.5537C10.7533 11.2116 8.81897 10.5732 7.11336 10.5732ZM8.54264 3.66502C8.54264 2.87415 7.90423 2.23573 7.11336 2.23573C6.32249 2.23573 5.68407 2.87415 5.68407 3.66502C5.68407 4.45589 6.32249 5.0943 7.11336 5.0943C7.90423 5.0943 8.54264 4.45589 8.54264 3.66502ZM13.8215 8.72469C14.9268 9.52509 15.6891 10.5923 15.6891 12.0025V13.67H19.5005V12.0025C19.5005 10.0777 16.1655 8.98196 13.8215 8.72469ZM16.1655 3.66502C16.1655 5.50403 14.6695 7.00002 12.8305 7.00002C12.316 7.00002 11.8395 6.87615 11.4012 6.66652C12.0015 5.81847 12.3541 4.77986 12.3541 3.66502C12.3541 2.55017 12.0015 1.51156 11.4012 0.663517C11.8395 0.453889 12.316 0.330017 12.8305 0.330017C14.6695 0.330017 16.1655 1.826 16.1655 3.66502Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask9)">
            <rect
              style={key === listKey.key ? { fill: "#3F51B5" } : {}}
              x="-2"
              y="-5"
              width="24"
              height="24"
              fill="white"
            />
          </g>
        </svg>
      ),

      link: "Users",
    },
    {
      image: (key) => (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask10"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="18"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.3024 6.82498H18.4697C18.9482 6.82498 19.3397 7.21648 19.3397 7.69498L19.3136 7.92988L17.1038 15.9948C16.895 16.7256 16.2251 17.265 15.4247 17.265H4.11471C3.31431 17.265 2.64441 16.7256 2.44431 15.9948L0.234507 7.92988C0.208407 7.85158 0.199707 7.77328 0.199707 7.69498C0.199707 7.21648 0.591207 6.82498 1.06971 6.82498H5.23701L9.04761 1.12648C9.21291 0.87418 9.49131 0.75238 9.76971 0.75238C10.0481 0.75238 10.3265 0.87418 10.4918 1.11778L14.3024 6.82498ZM12.2057 6.82498L9.76971 3.17098L7.33371 6.82498H12.2057ZM15.4247 15.525L4.12341 15.5337L2.20941 8.56498H17.3387L15.4247 15.525ZM8.02971 12.045C8.02971 11.088 8.81271 10.305 9.76971 10.305C10.7267 10.305 11.5097 11.088 11.5097 12.045C11.5097 13.002 10.7267 13.785 9.76971 13.785C8.81271 13.785 8.02971 13.002 8.02971 12.045Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask10)">
            <rect
              style={key === listKey.key ? { fill: "#3F51B5" } : {}}
              x="-2"
              y="-3"
              width="24"
              height="24"
              fill="white"
            />
          </g>
        </svg>
      ),
      link: "Products",
    },
    {
      image: (key) => (
        <svg
          width="17"
          height="22"
          viewBox="0 0 17 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask11"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="17"
            height="22"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.1376 7.665H13.1848V5.75928C13.1848 3.1294 11.0504 0.994995 8.42046 0.994995C5.79058 0.994995 3.65618 3.1294 3.65618 5.75928H5.56189C5.56189 4.17754 6.83872 2.90071 8.42046 2.90071C10.0022 2.90071 11.279 4.17754 11.279 5.75928V7.665H2.70332C1.65518 7.665 0.797607 8.52257 0.797607 9.57071V19.0993C0.797607 20.1474 1.65518 21.005 2.70332 21.005H14.1376C15.1858 21.005 16.0433 20.1474 16.0433 19.0993V9.57071C16.0433 8.52257 15.1858 7.665 14.1376 7.665ZM2.70332 19.0993V9.57071H14.1376V19.0993H2.70332ZM10.3262 14.335C10.3262 15.3831 9.46861 16.2407 8.42046 16.2407C7.37232 16.2407 6.51475 15.3831 6.51475 14.335C6.51475 13.2869 7.37232 12.4293 8.42046 12.4293C9.46861 12.4293 10.3262 13.2869 10.3262 14.335Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask11)">
            <rect
              style={key === listKey.key ? { fill: "#3F51B5" } : {}}
              x="-4"
              y="-1"
              width="24"
              height="24"
              fill="white"
            />
          </g>
        </svg>
      ),
      link: "Authentication",
    },
    {
      image: (key) => (
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask12"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="19"
            height="16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.86377 3.71215V0.853577H13.2509V3.71215H8.48663V15.1464H5.62806V3.71215H0.86377ZM10.3923 5.61786H18.9681V8.47643H16.1095V15.1464H13.2509V8.47643H10.3923V5.61786Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask12)">
            <rect
              style={key === listKey.key ? { fill: "#3F51B5" } : {}}
              x="-2"
              y="-4"
              width="24"
              height="24"
              fill="white"
            />
          </g>
        </svg>
      ),
      link: "Typography",
    },
    {
      image: (key) => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask13"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.9074 0.521606H2.1632C1.00473 0.521606 0.0568848 1.46945 0.0568848 2.62792V17.3721C0.0568848 18.5306 1.00473 19.4784 2.1632 19.4784H16.9074C18.0659 19.4784 19.0137 18.5306 19.0137 17.3721V2.62792C19.0137 1.46945 18.0659 0.521606 16.9074 0.521606ZM16.9074 2.62792V17.3721H2.1632V2.62792H16.9074ZM8.62959 13.9283L11.7891 9.85259L15.8543 15.2658H3.21636L6.37583 11.2006L8.62959 13.9283Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask13)">
            <rect
              style={key === listKey.key ? { fill: "#3F51B5" } : {}}
              x="-2"
              y="-2"
              width="24"
              height="24"
              fill="white"
            />
          </g>
        </svg>
      ),
      link: "Icons & Images",
    },
  ];
  return (
    <Ul open={open}>
      <div className="all-menu-links">
        {sidebarList.map((item, key) => (
          <div
            className="navLinks"
            key={key}
            onClick={() => linkClick(key)}
            style={
              key === listKey.key
                ? { background: "#F6F9FD", borderRadius: "4px"}
                : {}
            }
          >
            <div className="subNavLinks" key={key}>
              {item.image(key)}
              <NavLink
                key={key}
                to={key === 0 ? "/Dashboard" : "/Users"}
                className="list"
                onClick={() => linkClick(key)}
                style={key === listKey.key ? { color: "black" } : {}}
              >
                {item.link}
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </Ul>
  );
}
