import React, { useEffect } from "react";
import "./about.scss";
import remedy from "../../assets/img/remedy.png";
import severity from "../../assets/img/severity.png";
import slanka from "../../assets/img/slanka.png";
import spreadtime from "../../assets/img/spreadtime.png";
import iot from "../../assets/img/iot.png";
import mobileapp from "../../assets/img/mobileapp.png";
import video from "../../assets/intro.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="about section">
      <div className="secContainer">
        <div className="title">Research Gap</div>
        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem"
          >
            <img src={remedy} alt="" />
            <h3>Display remedies after detecting the disease</h3>
            <p>
              In our developed system, a significant research gap is addressed
              by providing tailored remedies post-disease detection for
              agarwoods. This innovative approach ensures prompt and accurate
              intervention, enhancing agricultural productivity and preserving
              the precious Aquilaria trees.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={slanka} alt="" />
            <h3>Using a data set related to Sri Lanka</h3>
            <p>
              In our developed system, focused on Sri Lanka's agarwood diseases,
              a research gap emerges in understanding the local disease patterns
              and their impact on crop yield. This gap necessitates a
              comprehensive study to bridge the knowledge divide and enhance
              disease management strategies for sustainable agarwood production.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem"
          >
            <img src={severity} alt="" />
            <h3>Severity Classfication</h3>
            <p>
              In our developed system, a crucial research gap addressed is the
              implementation of Severity Classification for agarwood diseases.
              This feature fills a significant gap in existing research,
              enabling precise assessment of disease severity in agarwood
              plants, enhancing disease management strategies and ensuring
              optimal yield.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={spreadtime} alt="" />
            <h3>Identify disease spreading time duration</h3>
            <p>
              In our developed system, we have introduced a unique feature to
              identify the duration of disease spreading in agarwoods. This
              innovation addresses a significant research gap by enabling
              precise tracking of disease progression, aiding farmers in timely
              interventions and crop protection strategies.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={iot} alt="" />
            <h3>Portable device detect environmental factors</h3>
            <p>
              In our developed system, a portable device detects crucial
              environmental factors for agarwoods. This innovation addresses a
              significant research gap by providing real-time, on-site data
              collection, enabling more accurate analysis and cultivation
              strategies for agarwood production.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={mobileapp} alt="" />
            <h3>Developed a mobile application</h3>
            <p>
              In our developed system, a mobile application is utilized to
              address a critical research gap by enabling disease detection,
              remedy prediction, and spreading time estimation specifically
              tailored for agarwoods. This approach bridges a significant
              technological void, empowering farmers with timely and accurate
              information for efficient disease management
            </p>
          </div>

          {/* <div className="title" style={{ textAlign: "center" }}>
            Research Problem & Solution
          </div> */}
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>Research Problem & Solution</h2>
              <h4>Proposed Problem</h4>
              <p>
                Agarwood, also known as oud, is a precious resinous wood sourced
                from Aquilaria and Gyrinops trees. Formed in response to mold or
                bacterial infections, agarwood emits a unique woody, earthy
                aroma. It has historical uses in medicine, incense, perfumes,
                and spirituality across cultures. Overharvesting has made wild
                agarwood scarce; cultivated trees now dominate supply. Disease
                threats include Phytophthora blight, Powdery mildew, and Root
                rot. Manual disease management exists, but advanced solutions
                integrating machine learning and image recognition are vital.
                Such technology promises accurate, efficient disease detection,
                fostering proactive agricultural practices and boosting agarwood
                plantation productivity.
              </p>
              <h4>Proposed Solution</h4>
              <p>
                The proposed system integrates image processing and IoT
                technology to detect diseases in agarwood plants. An IoT device,
                equipped with sensors and a camera, monitors environmental
                factors and captures plant images. Machine learning algorithms
                analyze this data, predicting disease risks and suggesting
                remedies. The user-friendly mobile app displays disease details
                and treatment options. Utilizing datasets from Sadaharitha
                Plantation (Pvt) Ltd and Pintanna Plantations (Pvt) Ltd, the
                system identifies threats, offers preventive guidance, and
                disseminates knowledge effectively, benefiting both experienced
                and inexperienced users and safeguarding the economy.
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted type="video/mp4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
