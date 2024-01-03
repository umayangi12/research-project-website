import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { ImLeaf } from "react-icons/im";
import "./header.scss";

const Header = () => {
  const [active, setActive] = useState("navBar");

  //show navbar
  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  //close navbar
  const removeNavBar = () => {
    setActive("navBar");
  };

  //adding bgcolor to the header
  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };

  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="/home" className="logo">
            <h1 className="flex">
              <ImLeaf className="icon" />
              AgarRiskPro®
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="/blog" className="navLink">
                Literature Survey
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Research Gap
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Problem
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Objectives
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Methodology
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Downloads
              </a>
            </li>
          </ul>
          <div onClick={removeNavBar} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNavBar} className="toggleNavBar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Header;
