import styles from "../css/Navbar.module.css"
import React from 'react'
import {HashLink as LINK} from "react-router-hash-link"
export const Navbar = () => {
 
  return (
    <div className={styles.Navbar}>
    <div>
     <LINK smooth to="/#home" className={styles.tag}>Home</LINK>
     <LINK smooth to="/#about" className={styles.tag}>About</LINK>
     <LINK smooth to="/#skills" className={styles.tag}>Skills</LINK>
     <LINK smooth to="/#project"className={styles.tag}>Projects</LINK>
     <LINK smooth to="/resume" className={styles.tag}>Resume</LINK>
    </div>
    </div>
  )
}
