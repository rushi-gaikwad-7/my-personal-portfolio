import React from "react";
import styles from "../css/footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>Dont be a stranger.!</h1>
      <p>Let's connect!</p>
      <div>
        <a target={"_blank"}  rel="noreferrer" href="https://www.linkedin.com/in/gaikwadrushi/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a>
        <a target={"_blank"}  rel="noreferrer" href="https://github.com/rushig777"><img src="https://cdn-icons-png.flaticon.com/512/38/38401.png" alt="" /></a>
        <a target={"_blank"} rel="noreferrer" href="https://twitter.com/_RUSHI_GAIKWAD"><img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="" /></a>
        {/* <a target={"_blank"}rel="noreferrer" href="https://www.facebook.com/Rushigaikwad007"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="" /></a>
        <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/rushikesh.gaikwad_/"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" /></a> */}
      </div>
      <div>© 2022 Designed and Built by Rushikesh Gaikwad with ❤️</div>
    </div>
  );
};
