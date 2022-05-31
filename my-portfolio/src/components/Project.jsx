import React from "react";
import styles from "../css/project.module.css";
import project from "../dp.json"
import  { Slideshow } from "./swiper";

export const Project = () => {
  
 let data=project.project;
  return (
    <div className={styles.Project} id="project">
      <h1>Projects</h1>
      <div>
      {
        data.map((el,i)=>{
          return<div key={i}>
          <h2>{el.title}</h2>
          <div className={styles.slide}>
          <Slideshow data={el.img}/>
          </div>
         
          <div className={styles.link}>
            <div className={styles.tag}>
              <a
                target={"_blank"}
                rel="noreferrer"
                href={el.liveLink}
              >
                GO LIVE
              </a>
            </div>
            <div className={styles.tag}>
              <a
                target={"_blank"}
                rel="noreferrer"
                href={el.gitLink}
              >
                SHOW CODE
              </a>
            </div>
          </div>
          <div>
            <p className={styles.tools}>
             {el.about}
            </p>
            <h3>{el.tool}</h3>
          </div>
        </div>
        })
      }  
      </div>
    </div>
  );
};
