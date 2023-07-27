import React, { useEffect, useState } from "react";
import "./cirtificates.css";
import Cirtificate_Item from "../../compnents/projectitem/Project_Item";
import { useDispatch, useSelector } from "react-redux";
import { myCirtificates } from "../../mydata";
import { actions, stateSelector } from "../../redux/slice";
//
export default function Cirtificates() {
  //
  const dispatch = useDispatch();
  //
  const [Cirtificates, setCirtificates] = useState(myCirtificates);
  //
  const {
    isFullScreen,
    theme: { theme: curTheme },
  } = useSelector(stateSelector);
  //
  useEffect(() => {
    dispatch(actions.setPage({ curPage: "cirtificates" }));
  }, []);

  //
  return (
    <section className={`${isFullScreen && "full"} section cirtificates`}>
      <div className="container">
        <div className="row">
          <div className={`section-title ${curTheme} pad-15`}>
            <h2>Cirtificates</h2>
          </div>
        </div>

        {Cirtificates.map((item, i) => (
          <>
            <h2>{item.name}</h2>
            <Cirtificate_Item
              img={item.img}
              link={item.link}
              title={item.name}
            />
          </>
        ))}
      </div>
    </section>
  );
}
