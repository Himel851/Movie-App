import React from "react";
import "./Footer.scss";
import app from "../../Images/app.png";
import playStore from "../../Images/google-play.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <ul className="flex">
            <li>Terms of Use</li>
            <li>Privacy-Policy</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Watch List</li>
          </ul>
          <p>
            © 2022 STREAMIT. All Rights Reserved. All videos and shows on this
            platform are trademarks of, and all related images and content are
            the property of, Streamit Inc. Duplication and copy of this is
            strictly prohibited. All rights reserved.
          </p>
        </div>
        <div className="box">
          <h3>Follow Us</h3>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="box">
          <h3>Streamit App</h3>
          <div className="img flexSB">
            <img src={app} alt="" />
            <span>App Store</span>
            <img src={playStore} alt="" />
            <span>Google Play Store</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
