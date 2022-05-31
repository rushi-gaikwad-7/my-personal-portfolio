import React from "react";
import { Link } from "react-router-dom";
import img from "./userimg.png";
import styles from "../css/Home.module.css";

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
        <p>
         <b>Full Stack Web Developer</b><br /> who focuses on writing
          clean and user-friendly web-applications
        </p>
        <div>
          <Link className={styles.resume} to={"/resume"}>
            Resume
          </Link>
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
