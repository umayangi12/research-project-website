import React, { useEffect } from "react";
import "./technology.scss";
import objective from "../../assets/img/objective.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Technology = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="about section">
      <div className="secContainer">
        <div className="title">Research Objectives</div>
        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem"
          >
            <img src={objective} alt="" />

            <p>
              Develop an ML model to predict the risk ratio of developing
              Agarwood plant disease using the identified factors
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={objective} alt="" />
            <p>
              Accurately identify the type of plant disease affecting the
              agarwood plant and predict the spreading time duration
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem"
          >
            <img src={objective} alt="" />
            <p>
              Predicting remedies and prioritizing treatment based on the
              severity of the disease depending on the sensor data, and
              environmental conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
