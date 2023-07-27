import React, { useEffect, useState } from "react";
import "./Service.css";
import Service_Item from "../../compnents/serviceItem/Service_Item";
import { services } from "../../mydata";
import { useDispatch, useSelector } from "react-redux";
import { actions, stateSelector } from "../../redux/slice";
export default function Service() {
  //
  const dispatch = useDispatch();

  //
  const {
    isFullScreen,
    theme: { theme: curTheme },
  } = useSelector(stateSelector);
  //
  useEffect(() => {
    dispatch(actions.setPage({ curPage: "services" }));
  }, []);
  //
  const [myServices, setMyServices] = useState([]);

  //
  useEffect(() => {
    setMyServices(services);
  }, [services]);

  //
  return (
    <section className={`${isFullScreen && "full"} section service`}>
      <div className="container">
        <div className="row">
          <div className={`section-title ${curTheme} pad-15`}>
            <h2>Services</h2>
          </div>
          {myServices.map((el, i) => (
            <Service_Item
              key={i}
              title={el.title}
              png={el.png}
              info={el.info}
            />
          ))}
        </div>
        <div className="row"></div>
      </div>
    </section>
  );
}
