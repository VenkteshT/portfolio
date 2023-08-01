import React, { useEffect, useState } from "react";
import profile_img from "../../imgs/profile.jpg";
import "./home.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { actions, stateSelector } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";

//
export default function Home() {
  //
  const {
    theme: { theme: curTheme },
    isFullScreen,
  } = useSelector(stateSelector);

  //
  const dispatch = useDispatch();
  const [render, setRender] = useState(false);

  //
  useEffect(() => {
    dispatch(actions.setPage({ curPage: "home" }));
    setRender(true);
    return () => setRender(false);
  }, []);

  //
  return (
    <section className={`${isFullScreen && "full"} home section`}>
      <div className="container">
        <div className="row">
          <div className="home-info pad-15">
            <h3 className="hello">
              Hello, my name is{" "}
              <span className={`${curTheme} name`}>Venktesh T</span>
            </h3>
            <h3 className="my-profession">
              I'm a{" "}
              <span className={`${curTheme} typing`}>
                <TypeAnimation
                  sequence={[
                    "Fullstack Developer",
                    1500,
                    "MERN stack Developer",
                    1500,
                    "Frontend Developer",
                    1500,
                    "Backend Developer",
                    1500,
                  ]}
                  wrapper="span"
                  speed={2}
                  deletionSpeed={2}
                  style={{ fontSize: "30px" }}
                  repeat={Infinity}
                />
              </span>
            </h3>
            <p>
              Highly motivated and skilled Full Stack Developer seeking an
              entry-level position to leverage my technical expertise and
              passion for software development. I am eager to contribute to a
              dynamic team and gain practical experience in creating innovative
              and user-friendly web applications
            </p>
            <Link to={"/contact"} className={`btn ${curTheme} hire-me`}>
              Hire me
            </Link>
          </div>
          <div className={`home-img ${curTheme}`}>
            <img src={profile_img} alt="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
