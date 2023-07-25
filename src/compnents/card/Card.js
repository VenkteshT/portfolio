import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Card({ from, to, education, info }) {
  return (
    <div className="timeline-item">
      <div className="circle-dot"></div>
      <h3 className="timeline-date">
        <FontAwesomeIcon icon={faCalendar} />
        {from} - {to}
      </h3>
      <h4 className="timeline-title">{education}</h4>
      <p className="timeline-text">{info}</p>
    </div>
  );
}
