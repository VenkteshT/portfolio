import React, { useEffect, useState } from "react";
import "./About.css";
import Card from "../../compnents/card/Card";
import Info_item from "../../compnents/infoitem/Info_item";
import Skill_item from "../../compnents/skillitem/Skill_item";
import { Link } from "react-router-dom";
import { info, skills, education } from "../../mydata.js";
//
export default function About() {
  //
  const [myInfo, setMyInfo] = useState([]);
  const [mySkills, setMySkills] = useState([]);
  const [myEducation, setMyEducation] = useState(education);
  //
  useEffect(() => {
    setMySkills(skills);
  }, [skills]);

  //
  useEffect(() => {
    setMyInfo(info);
  }, [info]);

  //
  return (
    <section className="section about">
      <div className="container">
        <div className="row">
          <div className="section-title pad-15">
            <h2> About me</h2>
          </div>
        </div>

        <div className="row">
          <div className="about-content pad-15">
            <div className="row">
              <div className="about-text pad-15">
                <h3>
                  I'm Venktesh and <span>Full Stack Developer [MERN]</span>
                </h3>
                <p>
                  Highly motivated and skilled Full Stack Developer seeking an
                  entry-level position to leverage my technical expertise and
                  passion for software development. I am eager to contribute to
                  a dynamic team and gain practical experience in creating
                  innovative and user-friendly web applications
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info pad-15">
                <h3>My data</h3>
                <div className="row">
                  {myInfo.map((el, i) => (
                    <Info_item key={i} _key={el.key} val={el.val} />
                  ))}
                </div>

                <div className="row">
                  <div className="buttons pad-15">
                    <Link to={"#"} className="btn">
                      Download CV
                    </Link>
                    <Link to={"/contact"} className="btn hire-me">
                      Hire me
                    </Link>
                  </div>
                </div>
              </div>
              <div className="skills pad-15">
                <h3>My skills</h3>
                <div className="row">
                  {mySkills.map((el, i) => (
                    <Skill_item key={i} name={el.name} img={el.img} />
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education pad-15">
                <h3 className="title">Education</h3>

                <div className="row">
                  <div className="timeline-box pad-15">
                    <div className="timeline shadow-dark">
                      {myEducation.map((el, i) => (
                        <Card
                          key={i}
                          from={el.from}
                          to={el.to}
                          education={el.education}
                          info={el.info}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
