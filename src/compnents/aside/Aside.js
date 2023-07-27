import React, { useEffect, useState } from "react";
import "./Aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBriefcase,
  faComment,
  faHome,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { actions, stateSelector } from "../../redux/slice";
import { useSelector, useDispatch } from "react-redux";
export default function Aside() {
  //
  const {
    page,
    theme: { theme: curTheme },
  } = useSelector(stateSelector);
  const [open, setOpen] = useState(true);
  //
  const dispatch = useDispatch();
  //
  function handleClick() {
    setOpen((p) => !p);
    dispatch(actions.setFullScreen({ val: open }));
  }
  //
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (!open) return;
      if (window.innerWidth < 1212) {
        setOpen(false);
        dispatch(actions.setFullScreen({ val: true }));
      } else if (window.innerWidth >= 1212) {
        setOpen(true);
        dispatch(actions.setFullScreen({ val: false }));
      }
    });
  }, []);

  //
  function handleLinkClick() {
    if (window.innerWidth >= 1212) return;
    setOpen(false);
  }
  //
  return (
    <div className={`${!open && "close"} aside`}>
      <div className="logo" style={{ marginTop: "30px" }}>
        <Link to="#" className={`${curTheme}`}>
          <span>N</span>amaste
        </Link>
      </div>
      <div className={`nav-toggler`} onClick={handleClick}>
        <span className={`${curTheme}`}></span>
      </div>
      <ul className="nav">
        <li>
          <Link
            to="/"
            className={`${page.home && "active"} ${curTheme}`}
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${page.about && "active"} ${curTheme}`}
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faUser} />
            About
          </Link>
        </li>
        <li>
          <Link
            to={"/cirtificates"}
            className={`${page.cirtificates && "active"} ${curTheme}`}
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faBook} />
            Cirtificates
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={`${page.services && "active"} ${curTheme}`}
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faList} />
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={`${page.portfolio && "active"} ${curTheme}`}
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${page.contact && "active"} ${curTheme}`}
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faComment} />
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
