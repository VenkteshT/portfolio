import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./serviceitem.css";
import { useSelector } from "react-redux";
import { stateSelector } from "../../redux/slice";

export default function Service_Item({ title, png, info }) {
  //
  const {
    theme: { theme: curTheme },
  } = useSelector(stateSelector);

  //
  return (
    <div className="service-item pad-15">
      <div className={`service-item-inner ${curTheme}`}>
        <div className="icon">
          <FontAwesomeIcon icon={png} />
        </div>
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
    </div>
  );
}
