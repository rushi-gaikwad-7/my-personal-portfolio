import React from "react";
import img from "./img.png";
import styles from "../css/Home.module.css";
import { WindupChildren } from "windups";

export const Home = () => {
  return (
    <div className={styles.Home} id="home">
      <div>
        <div>
          
          <h1>
            Hey..,{" "}
            <img
              src="https://c.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif"
              alt=""
            />
            <br /> I am Rushikesh Gaikwad
          </h1>
          
        </div>
        <WindupChildren>
        <p>
         <b>Full Stack Web Developer</b><br /> who focuses on writing
          clean and user-friendly web-applications
        </p>
        </WindupChildren>
        <div>
          <a  target="_blank" rel="noreferrer" className={styles.resume} href={"https://drive.google.com/file/d/1Odd1Ju8MzJ878e0foRm2itH0_H_zVDMy/view?usp=sharing"}>
            Resume
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.linkedin.com/in/gaikwadrushi"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt=""
            />
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://github.com/rushig777"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/38/38401.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className={styles.photo}>
        <img src={img} alt="user img" />
      </div>
    </div>
  );
};
