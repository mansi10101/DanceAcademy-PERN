import React from 'react'
import Title from './Title'
import styles from '../Stylesheet/Layout.module.css'
import About from './About'

const Layout = () => {
  return (
    <div className={styles.outerbox}> 
        <div className={styles.Container}>
          <Title/>
          <About/>
        </div>  
    </div>
  )
}

export default Layout