import styles from "../css/Navbar.module.css"
import React from 'react'
import {Link} from "react-router-dom"
export const Navbar = () => {
 
  return (
    <div className={styles.Navbar}>
    <div>
     <Link to={""} className={styles.tag}>Home</Link>
     <Link to={"/about"} className={styles.tag}>About</Link>
     <Link to={"/skills"} className={styles.tag}>Skills</Link>
     <Link to={"/projects"} className={styles.tag}>Projects</Link>
     <Link to={"/resume"}  className={styles.tag}>Resume</Link>
    </div>
    </div>
  )
}
