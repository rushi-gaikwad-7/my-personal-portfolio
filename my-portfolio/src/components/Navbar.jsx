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
     <a  target="_blank" rel="noreferrer" className={styles.tag} href={"https://drive.google.com/file/d/1Odd1Ju8MzJ878e0foRm2itH0_H_zVDMy/view?usp=sharing"}>
            Resume
          </a>
    </div>
    </div>
  )
}
