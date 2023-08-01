import React from "react";
import "./contactitem.css";
import { useSelector } from "react-redux";
import { stateSelector } from "../../redux/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Contact_item({ icon, _key, val, img, link }) {
  //
  const {
    theme: { theme: curTheme },
  } = useSelector(stateSelector);
  //
  return (
    <div className="contact-info-item pad-15">
      <a href={link ? link : ""} className={`icon ${curTheme}`}>
        <FontAwesomeIcon icon={icon} />
      </a>
      <h4>{_key}</h4>
      {link ? (
        <a href={link} target="new">
          {val}
        </a>
      ) : (
        <p>{val}</p>
      )}
    </div>
  );
}
