import styles from "../css/Navbar.module.css"
import React from 'react'

export const Navbar = () => {
 
  return (
    <div className={styles.Navbar}>
    <div>
     <p onClick={()=>window.location.href="./Home.jsx"} className={styles.tag}>Home</p>
     <p className={styles.tag}>About</p>
     <p className={styles.tag}>Skills</p>
     <p className={styles.tag}>Projects</p>
     <p onClick={()=>window.location.href="./Footer.jsx"}  className={styles.tag}>Contact Info</p>
    </div>
    </div>
  )
}
