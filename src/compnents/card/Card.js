import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { stateSelector } from "../../redux/slice";
export default function Card({ from, to, education, info }) {
  const {
    theme: { theme: curTheme },
  } = useSelector(stateSelector);
  //
  return (
    <div className={`timeline-item ${curTheme}`}>
      <div className={`circle-dot ${curTheme}`}></div>
      <h3 className="timeline-date">
        <FontAwesomeIcon icon={faCalendar} />
        {from} - {to}
      </h3>
      <h4 className="timeline-title">{education}</h4>
      <p className="timeline-text">{info}</p>
    </div>
  );
}
