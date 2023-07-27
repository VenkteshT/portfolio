import React, { useEffect, useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { actions, stateSelector } from "../../redux/slice";
import { contactInfo } from "../../mydata";
import Contact_item from "../../compnents/contactitem/Contact_item";
export default function Contact() {
  //
  const dispatch = useDispatch();

  //
  const {
    isFullScreen,
    theme: { theme: curTheme },
  } = useSelector(stateSelector);

  //
  useEffect(() => {
    dispatch(actions.setPage({ curPage: "contact" }));
  }, []);

  const [myContactInfo, setMyContactInfo] = useState(contactInfo);

  //
  return (
    <section className={`${isFullScreen && "full"} section contact`}>
      <div className="container">
        <div className="row">
          <div className={`section-title ${curTheme} pad-15`}>
            <h2>Contact me</h2>
          </div>
        </div>
        <h3 className={`contact-title ${curTheme}`}>
          Have you any Questions ?
        </h3>
        <h4 className="contact-sub-title">I'M AT YOUR SERVICES</h4>
        <div className="row">
          {myContactInfo.map((item, i) => (
            <Contact_item
              key={i}
              _key={item.key}
              val={item.val}
              icon={item.icon}
            />
          ))}
        </div>

        <h3 className={`contact-title ${curTheme} pad-15`}>SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title pad-15">
          I'M VERY RESPONSIVE TO MESSAGES
        </h4>

        <div className="row">
          <div className="contact-form pad-15">
            <div className="row">
              <div className="form-item col-6 pad-15">
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="form-item col-6 pad-15">
                <div className="form-group">
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 pad-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="subject"
                    />
                  </div>
                </div>
              </div>

              <div className="form-item col-12 pad-15">
                <div className="form-group">
                  <textarea
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="message"
                  />
                </div>
              </div>
            </div>

            <div className="form-item col-12 pad-15">
              <div className="form-group">
                <button
                  type="submit"
                  className={`btn ${curTheme}`}
                  style={{ border: "none" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
