import "./Footer.css";
import React from "react";
import footerLogo from "../assets/logo_big.png";
import instagramIcon from "../assets/instagram_icon.png";
import pinterestIcon from "../assets/pintester_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>ShopEase</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagramIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterestIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsappIcon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
