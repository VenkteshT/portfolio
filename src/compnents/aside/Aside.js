import React, { useState } from "react";
import "./Aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faComment,
  faHome,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Aside() {
  //
  const [activePage, setActive] = useState({
    home: true,
    about: false,
    services: false,
    portfolio: false,
    contact: false,
  });

  //
  function handleClick(page) {
    setActive({
      home: false,
      about: false,
      services: false,
      portfolio: false,
      contact: false,
      [page]: true,
    });
  }

  return (
    <div className="aside">
      <div className="logo">
        <Link to="#">
          <span>N</span>amaste
        </Link>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li onClick={() => handleClick("home")}>
          <Link to="/" className={`${activePage.home && "active"}`}>
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>
        </li>
        <li onClick={() => handleClick("about")}>
          <Link to="/about" className={`${activePage.about && "active"}`}>
            <FontAwesomeIcon icon={faUser} />
            About
          </Link>
        </li>
        <li onClick={() => handleClick("services")}>
          <Link to="/services" className={`${activePage.services && "active"}`}>
            <FontAwesomeIcon icon={faList} />
            Services
          </Link>
        </li>
        <li onClick={() => handleClick("portfolio")}>
          <Link
            to="/portfolio"
            className={`${activePage.portfolio && "active"}`}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            Portfolio
          </Link>
        </li>
        <li onClick={() => handleClick("contact")}>
          <Link to="/contact" className={`${activePage.contact && "active"}`}>
            <FontAwesomeIcon icon={faComment} />
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
