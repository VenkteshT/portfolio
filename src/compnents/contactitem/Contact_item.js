import React from "react";
import "./contactitem.css";
import { useSelector } from "react-redux";
import { stateSelector } from "../../redux/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Contact_item({ icon, _key, val, img }) {
  //
  const {
    theme: { theme: curTheme },
  } = useSelector(stateSelector);
  //
  return (
    <div className="contact-info-item pad-15">
      <div className={`icon ${curTheme}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4>{_key}</h4>
      <p>{val}</p>
    </div>
  );
}
