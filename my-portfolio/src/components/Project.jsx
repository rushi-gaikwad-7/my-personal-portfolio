import React from "react";
import styles from "../css/project.module.css";
import project from "../dp.json"
import Slider from "./swiper";

export const Project = () => {
  
 let data=project.project;
  return (
    <div className={styles.Project}>
      <h1>Projects</h1>
      <div>
      {
        data.map((el,i)=>{
          return<div key={i}>
          <h2>{el.title}</h2>
          <img src="https://storage.cloudconvert.com/tasks/d7f564a9-3d92-49ab-8479-850594a89814/2022-05-28%20%282%29.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1653893477&Signature=S1l2Z7U0XUJtMLi7PY8Dy%2BvqGLk%3D&response-content-disposition=inline%3B%20filename%3D%222022-05-28%20%282%29.jpg%22&response-content-type=image%2Fjpeg" alt="" />
          <Slider data={el.img}/>
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
