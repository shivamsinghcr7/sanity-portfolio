import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper/indexWrapper";
import { urlFor, client } from "../../client";

import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => setTestimonials(data));
  }, []);

  const tmonial = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {console.log("here", testimonials)}
      {testimonials.length ? (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(tmonial.imageUrl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{tmonial.feedback}</p>
              <div>
                <h4 className="bold-text">{tmonial.name}</h4>
                <h5 className="p-text">{tmonial.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app_testimonial"),
  "testimonials",
  "app__primarybg"
);
