import React from "react";
import "./skills.css";
export default function Skill_item({ name, img }) {
  return (
    <div className="skill-item pad-15" id="item">
      <img src={img} className="skill-img" alt={name} />
      <h5>{name}</h5>
    </div>
  );
}
