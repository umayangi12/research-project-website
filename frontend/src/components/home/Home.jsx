import React, { useEffect } from "react";
import "./home.css";
import "./home.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import video from "../../assets/img/bg.mp4";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <div className="video-container">
        <video autoPlay loop muted className="video-bg">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
            Unlocking Plant Health Insights with AgarRiskPro
          </h1>
          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Your Device-Based Disease Detective
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
