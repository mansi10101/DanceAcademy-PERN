import React, { useState } from "react";
import styles from "../Stylesheet/Text.module.css";
import AboutText from "./AboutText";
import CheckForm from "./Forms/CheckForm";
import EnrollForm from "./Forms/EnrollForm";
const About = () => {
  const [section, setSection] = useState("1");

  const handleEnrollForm = () => {
    console.log("Enroll clicked!!");
    setSection("2");
  };
  const handleCheckform = () => {
    console.log("Check clicked!!");
    setSection("3");
  };
  const handleAbout = () => {
    console.log("close clicked");
    setSection("1");
  };

  return (
    <div>
      <div className={styles.aboutcontainer}>
        {section === "1" ? (
          <AboutText addEnForm={handleEnrollForm} addChForm={handleCheckform} />
        ) : section === "2" ? (
          <EnrollForm addAbout={handleAbout} />
        ) : (
          <CheckForm addAbout={handleAbout} />
        )}
      </div>
    </div>
  );
};

export default About;
