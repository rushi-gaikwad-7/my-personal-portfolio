import styles from "../css/Navbar.module.css"
import React from 'react'
import {HashLink as LINK} from "react-router-hash-link"
import pdf from "./cv.pdf"
export const Navbar = () => {
 
  return (
    <div className={styles.Navbar}>
    <div>
     <LINK smooth to="/#home" className={styles.tag}>Home</LINK>
     <LINK smooth to="/#about" className={styles.tag}>About</LINK>
     <LINK smooth to="/#skills" className={styles.tag}>Skills</LINK>
     <LINK smooth to="/#project"className={styles.tag}>Projects</LINK>
     <a  target="_blank" rel="noreferrer" className={styles.tag} href={"https://drive.google.com/file/d/1EVQF0bDvXWY4y5AgU_zWsCvmhGG1mP5N/view?usp=sharing"}>
            Resume
          </a>
    </div>
    </div>
  )
}
