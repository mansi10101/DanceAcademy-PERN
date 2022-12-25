import React from "react";
import styles from "../Stylesheet/Text.module.css";
import AboutButtonlayout from "./Buttons/AboutButtonlayout";

const AboutText = ({ addEnForm, addChForm }) => {
  return (
    <div>
      <div className={styles.textarea}>
        <p>
          <h2 className={styles.textareaheading}>Your Time. Your Space.</h2>
          As the world slowly reopens, we open our doors and our hearts with
          gratitude. It’s time for revival. It’s time to shake off dormant
          energy, get back to the mat and back to life. True freedom is having a
          full heart, open mind and peaceful vibration. Vikasa is where passion
          meets paradise. You’ll practice ancient lineages of yoga while perched
          on a cliff-side overlooking the glimmering, azure sea. You’ll connect
          with genuine people and rediscover your inner self while gaining
          skills and confidence to teach safely and passionately.
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
