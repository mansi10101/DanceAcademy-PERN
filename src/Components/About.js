import React from 'react'
import styles from '../Stylesheet/Text.module.css'
import AboutText from './AboutText'
import EnrollForm from './Forms/EnrollForm'
const About = () => {
  return (
    <div>
    <div className={styles.aboutcontainer}>
      {/* <AboutText/> */}
         <EnrollForm/>
      </div>
    </div>
  )
}

export default About