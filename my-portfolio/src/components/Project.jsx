import React from "react";
import styles from "../css/project.module.css";
import homeimg from "./homepage.png";
import mynta from "./myntra.png"
export const Project = () => {
  return (
    <div className={styles.Project}>
      <h1>Projects</h1>
      <div>
        <div>
          <h2>Clone of Udemy</h2>
          <img src={homeimg} alt="" />
          <div className={styles.link}>
            <div className={styles.tag}>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://verdant-kitten-680f9d.netlify.app/"
              >
                {" "}
                GO LIVE{" "}
              </a>
            </div>
            <div className={styles.tag}>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://github.com/rushig777/Udemy-clone"
              >
                SHOW CODE
              </a>
            </div>
          </div>
          <div>
            <div className={styles.tools}>
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2>Clone of Myntra</h2>
          <img src={mynta} alt="" />
          <div className={styles.link}>
            <div className={styles.tag}>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://affectionate-hoover-dd46c5.netlify.app/"
              >
                {" "}
                GO LIVE{" "}
              </a>
            </div>
            <div className={styles.tag}>
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://github.com/rushig777/myntra"
              >
                SHOW CODE
              </a>
            </div>
          </div>
          <div>
            <div className={styles.tools}>
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
