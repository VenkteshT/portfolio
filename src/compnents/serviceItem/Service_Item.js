import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./serviceitem.css";
export default function Service_Item({ title, png, info }) {
  return (
    <div className="service-item pad-15">
      <div className="service-item-inner">
        <div className="icon">
          <FontAwesomeIcon icon={png} />
        </div>
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
    </div>
  );
}
