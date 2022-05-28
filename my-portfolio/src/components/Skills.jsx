import React from "react";
import styles from "../css/skills.module.css";

let skills = [{skill:"https://cdn-icons-png.flaticon.com/512/5968/5968267.png",sName:"HTML"},{skill:"https://cdn-icons-png.flaticon.com/512/5968/5968242.png",sName:"CSS"},{skill:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png",sName:"JavaScript"},{skill:"https://cdn-icons.flaticon.com/png/512/3222/premium/3222625.png?token=exp=1653722303~hmac=bf1ac34d360310e38ca8ab933aa9906f",sName:"Data Structure & Algorithm"},{skill:"https://cdn-icons-png.flaticon.com/512/2111/2111432.png",sName:"GitHub"},{skill:"https://portfolio-saravanakumarjn.vercel.app/static/media/react.e27571ea.svg",sName:"React"},{skill:"https://portfolio-saravanakumarjn.vercel.app/static/media/redux.a9567540.svg",sName:"Redux"},{skill:"https://portfolio-saravanakumarjn.vercel.app/static/media/nodejs-icon.3dc364b8.svg",sName:"Node.js"},{skill:"https://t4.ftcdn.net/jpg/00/90/67/37/240_F_90673721_nTq4hQ0UG1RxQ1niYwMnhzp05fsdkZyN.jpg",sName:"NPM"},{skill:"https://cdn-icons-png.flaticon.com/512/5968/5968381.png",sName:"TypeScript"},];
export const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1>Skills & Interests</h1>
      <div >{
        skills.map((el,i)=>{
          return <div key={i}>
            <img src={el.skill} alt="" />
            <p>{el.sName}</p>
          </div>
        })}</div>
    </div>
  );
};
