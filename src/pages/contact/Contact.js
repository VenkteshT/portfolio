import React, { useEffect, useState, useRef } from "react";
import "./contact.css";

import { useDispatch, useSelector } from "react-redux";
import { actions, stateSelector } from "../../redux/slice";
import { contactInfo } from "../../mydata";
import Contact_item from "../../compnents/contactitem/Contact_item";
import emailjs from "@emailjs/browser";
import Modal from "../../compnents/modal/Modal";
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

  //
  const [myContactInfo, setMyContactInfo] = useState(contactInfo);
  const [status, setStaus] = useState({
    loading: false,
    sent: false,
    err: false,
  });
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((p) => ({ ...p, [name]: value }));
  };

  function reset() {
    setStaus({
      loading: false,
      sent: false,
      err: false,
    });
    setEmail({
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    });
    setModal(false);
  }
  //
  const form = useRef();

  const sendEmail = (e) => {
    setModal(true);
    setStaus((p) => ({ ...p, loading: true }));
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pmjouwl",
        "template_wy4kvoe",
        form.current,
        "vGGELV94C4nnPicpZ"
      )
      .then(
        (result) => {
          setStaus((p) => ({ ...p, loading: false, sent: true }));
        },
        (error) => {
          setStaus((p) => ({ ...p, loading: false, err: true }));
        }
      );
  };
  //
  return (
    <section className={`${isFullScreen && "full"} section contact`}>
      {modal && <Modal status={status} setModal={setModal} reset={reset} />}
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
              link={item?.link}
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
          <form onSubmit={sendEmail} ref={form} className="contact-form pad-15">
            <div className="row">
              <div className="form-item col-6 pad-15">
                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    className="form-control"
                    placeholder="name"
                    onChange={handleChange}
                    value={email.user_name}
                  />
                </div>
              </div>
              <div className="form-item col-6 pad-15">
                <div className="form-group">
                  <input
                    type="email"
                    name="user_email"
                    id=""
                    className="form-control"
                    placeholder="email"
                    onChange={handleChange}
                    value={email.user_email}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 pad-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      id=""
                      className="form-control"
                      placeholder="subject"
                      onChange={handleChange}
                      value={email.subject}
                    />
                  </div>
                </div>
              </div>

              <div className="form-item col-12 pad-15">
                <div className="form-group">
                  <textarea
                    type="text"
                    name="message"
                    id=""
                    className="form-control"
                    placeholder="message"
                    value={email.message}
                    onChange={handleChange}
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
          </form>
        </div>

        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}
      </div>
    </section>
  );
}
