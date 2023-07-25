import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { projects } from "../../mydata";
import Project_Item from "../../compnents/projectitem/Project_Item";
export default function Portfolio() {
  //
  const [myProjects, setMyProjects] = useState({
    frontend: [],
    backend: [],
  });

  //
  useEffect(() => {
    setMyProjects((p) => ({
      ...p,
      frontend: projects.filter((el) => el.type === "Frontend"),
      backend: projects.filter((el) => el.type === "Backend"),
    }));
  }, [projects]);
  //
  return (
    <section className="section portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title pad-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading pad-15">
            <h2>My Last Projects:</h2>
          </div>
        </div>
        <h2>Frontend</h2>
        <div className="row">
          {myProjects.frontend.map((el, i) => (
            <Project_Item
              key={i}
              title={el.title}
              img={el.img}
              type={el.type}
              link={el.link}
            />
          ))}
        </div>
        <h2>Backend</h2>
        <div className="row">
          {myProjects.backend.map((el, i) => (
            <Project_Item
              key={i}
              title={el.title}
              img={el.img}
              type={el.type}
              link={el.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
