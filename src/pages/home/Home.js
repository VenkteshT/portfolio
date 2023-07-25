import React from "react";
import profile_img from "../../imgs/profile.jpg";
import "./home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className="home section">
      <div className="container">
        <div className="row">
          <div className="home-info pad-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Venktesh T</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">Fullstack Developer</span>
            </h3>
            <p>
              Highly motivated and skilled Full Stack Developer seeking an
              entry-level position to leverage my technical expertise and
              passion for software development. I am eager to contribute to a
              dynamic team and gain practical experience in creating innovative
              and user-friendly web applications
            </p>
            <Link to={"/contact"} className="btn hire-me">
              Hire me
            </Link>
          </div>
          <div className="home-img">
            <img src={profile_img} alt="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
