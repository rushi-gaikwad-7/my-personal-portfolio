import React from "react";
import styles from "../css/footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>Dont be a stranger.!</h1>
      <p>Let's connect!</p>
      <div>
        <a target={"_blank"}  rel="noreferrer" href="https://www.linkedin.com/in/gaikwadrushi/"><img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1653718396~hmac=143061fb93855469a0f567ffefd1cb0f" alt="" /></a>
        <a target={"_blank"}  rel="noreferrer" href="https://github.com/rushig777"><img src="https://cdn-icons-png.flaticon.com/512/38/38401.png" alt="" /></a>
        <a target={"_blank"} rel="noreferrer" href="https://twitter.com/_RUSHI_GAIKWAD"><img src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494477.png?token=exp=1653718396~hmac=19a357529effa34a51dbfe71c898f836" alt="" /></a>
        {/* <a target={"_blank"}rel="noreferrer" href="https://www.facebook.com/Rushigaikwad007"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="" /></a>
        <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/rushikesh.gaikwad_/"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" /></a> */}
      </div>
      <div>© 2022 Designed and Built by Rushikesh Gaikwad with ❤️</div>
    </div>
  );
};
