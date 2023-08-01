import React, { useState } from "react";
import "./switcher.css";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { actions, stateSelector } from "../../redux/slice";
export default function Switcher() {
  //
  const dispatch = useDispatch();

  //
  const {
    theme: { theme: curTheme },
  } = useSelector(stateSelector);
  //
  const [togger, setToggler] = useState(false);

  function handleSwitch(color) {
    dispatch(actions.setTheme({ color }));
  }
  return (
    <div
      className={`style-switcher ${togger && "show"} ${curTheme && curTheme}`}
    >
      <div
        className="style-switcher-toggler s-icon"
        onClick={() => setToggler((p) => !p)}
      >
        <FontAwesomeIcon icon={faPalette} />
      </div>
      <div className={`colors`}>
        <span
          className="theme-default"
          onClick={() => {
            handleSwitch("default");
            setToggler(false);
          }}
        ></span>
        <span
          className="theme-1"
          onClick={() => {
            handleSwitch("color-1");
            setToggler(false);
          }}
        ></span>
        <span
          className="theme-2"
          onClick={() => {
            handleSwitch("color-2");
            setToggler(false);
          }}
        ></span>
        <span
          className="theme-3"
          onClick={() => {
            handleSwitch("color-3");
            setToggler(false);
          }}
        ></span>
        <span
          className="theme-4"
          onClick={() => {
            handleSwitch("color-4");
            setToggler(false);
          }}
        ></span>
      </div>
    </div>
  );
}
