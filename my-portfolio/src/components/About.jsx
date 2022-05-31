import React from "react";
import style from "../css/about.module.css";
export const About = () => {
  return (
    <div className={style.about} id="about">
      <div>
        <h1>About</h1>
        <img src="https://cdn-icons.flaticon.com/png/512/3242/premium/3242244.png?token=exp=1653804222~hmac=ca3830d2e16780e5f007d2e06818c391" alt="" />
        <p>
          Passion-driven learner and a web developer with the ability to write
          clean, reusable, optimized code.As a developer, I can learn quickly,
          adapt well, and solve complex problems. Looking forward to joining a
          progressive and challenging work environment
        </p>
      </div>
      <div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
            alt=""
          />
          <h3>Pune, Maharashtra</h3>
        </div>
        <div>
          <img src="https://cdn-icons.flaticon.com/png/512/2099/premium/2099199.png?token=exp=1653719558~hmac=938ef40d0a9eb05ed038a923a9299b3f" alt="" />
          <h3>gaikwadrushi777@gmail.com</h3>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159052.png"
            alt=""
          />
          <h3>7774962961</h3>
        </div>
      </div>
    </div>
  );
};
