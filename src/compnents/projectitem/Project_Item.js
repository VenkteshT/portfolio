import React from "react";
import "./projectitem.css";
export default function Project_Item({ title, type, img, link }) {
  return (
    <div className="portfolio-item pad-15">
      <div className="portfolio-item-inner shadow-dark">
        <div className="portfolio-img">
          <a href={link} target="new">
            <img src={img} alt={title} />
          </a>
        </div>
      </div>
    </div>
  );
}
