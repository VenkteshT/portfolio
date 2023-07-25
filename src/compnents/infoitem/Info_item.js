import React from "react";
import "./info.css";
export default function Info_item({ _key, val }) {
  return (
    <div className="info-item pad-15">
      <p>
        {_key} : <span>{val}</span>
      </p>
    </div>
  );
}
