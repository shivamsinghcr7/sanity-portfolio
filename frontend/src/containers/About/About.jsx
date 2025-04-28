import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper/indexWrapper";

// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer.",
//     imgURL: images.about01,
//   },
//   {
//     title: "Web Design and Hosting",
//     description: "I am a good web developer.",
//     imgURL: images.about02,
//   },
//   {
//     title: "Backend Development",
//     description: "I am a good web developer.",
//     imgURL: images.about03,
//   },
//   {
//     title: "Freelancer",
//     description: "I am a good web developer.",
//     imgURL: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    < >
      <h2 className="head-text" id="about" >
        I know that <span>Good Product</span>
        <br />
        Means <span>Good Business</span>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profiles-item"
              key={about.title + index}
            >
              {/* <img src={about.imgUrl} alt={about.title} /> */}
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              {/* {console.log(about)} */}
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </h2>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
