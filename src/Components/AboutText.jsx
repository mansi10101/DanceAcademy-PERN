import React from "react";
import styles from "../Stylesheet/Text.module.css";
import AboutButtonlayout from "./Buttons/AboutButtonlayout";

const AboutText = ({ addEnForm, addChForm }) => {
  return (
    <div>
      <div className={styles.textarea}>
        <p>
          <h2 className={styles.textareaheading}>Lace Up Your Dancing Shoes.</h2>
          Dance is a form of performance that consists of different patterns of movement. When music is added to dance movements, which frequently carry symbolic meaning and messages, they become even more beautiful and powerful. Dance Classes in Narsinghpur help beginners to learn dancing and get better each day.If you are into dancing, love exercising or looking for professional training, we strongly suggest you get in touch with Indian Dance Academy in Kandeli, Narsinghpur. They not only help you learn dancing but also provide various services such as Zumba.
          <ul>
            <li>Batches we provide : 6-7am, 7-8am, 8-9am, 5-6pm</li>
            <li>Age Group : 18-65 years old</li>
            <li>Fees : ONLY 500/-</li>
          </ul>
        </p>
      </div>

      <div className={styles.bottonarea}>
        <AboutButtonlayout addEnForm={addEnForm} addChForm={addChForm} />
      </div>
    </div>
  );
};

export default AboutText;
