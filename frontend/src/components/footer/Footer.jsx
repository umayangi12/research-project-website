import React from "react";
import "./footer.scss";
import { ImLeaf } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className="flex">
                <ImLeaf className="icon" />
                AgarRiskPro®
              </h1>
            </a>
          </div>
          <div className="socials flex">
            <BsFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Literature Survey</a>
          </li>
          <li>
            <a href="#">Research Gap</a>
          </li>
          <li>
            <a href="#">Research Problem</a>
          </li>
          <li>
            <a href="#">Research Objectives</a>
          </li>
          <li>
            <a href="#">Methodology</a>
          </li>
          <li>
            <a href="#">Downloads</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <span className="phone">076 555 5555</span>
          <span className="email">umayangi1999@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
