import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="">
        <a
          href="https://github.com/shivamsinghcr7"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div className="">
        <a
          href="https://www.linkedin.com/in/shivamkrsingh/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="">
        <a
          href="https://www.instagram.com/shivamsinghcr7"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      {/* <div className="">         
        <FaFacebookF />
      </div> */}
    </div>
  );
};

export default SocialMedia;
