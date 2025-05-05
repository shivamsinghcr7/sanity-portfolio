import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper/indexWrapper";
import { clientWrite } from "../../client";
import { images } from "../../constants/index.js";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   setLoading(true);

  //   const contact = {
  //     _type: "contact",
  //     name: formData.name,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   clientWrite
  //     .create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScYa_BAdSo0JweDSOATQmbeb--lbLRiYVXc_vmThuabi-7JbA/formResponse";
    const timestamp = new Date().toLocaleString();

    const formDataToSend = new FormData();
    formDataToSend.append("submissionTimestamp", timestamp);
    formDataToSend.append("entry.2050861218", formData.name);
    formDataToSend.append("entry.834905363", formData.email);
    formDataToSend.append("entry.1287533321", formData.message);

    try {
      await fetch(formUrl, {
        method: "POST", 
        mode: "no-cors",
        body: formDataToSend,
      });
      setLoading(false);
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting to Google Form:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="head-text">
        Take a Coffee & <span>Chat with Me</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:shivam.iitk1@gmail.com" className="p-text">
            shivam.iitk1@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91-7398218243" className="p-text">
            +91-73982*****
          </a>
        </div>
        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>

            <div>
              <textarea
                className="p-text"
                placeholder="Your Message/Requirements/Testimonial"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank You, I got your message !!</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
