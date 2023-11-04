import React, { useEffect } from "react";
import "./methodology.scss";
import methodology from "../../assets/img/methodology.png";
import Aos from "aos";
import "aos/dist/aos.css";

const post = [
  {
    id: 1,
    postImage: methodology,
  },
];

const Methodology = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntrosty">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Methodology
          </h2>
        </div>

        <div className="mainContainer grid">
          {post.map(({ id, postImage, title, }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className=" grid"
              >
                <div className="imgDiv">
                  <img src={postImage} />
                </div>
                <p style={{fontSize: 12}}>
                  Fig. 1. Illustrates the system diagram of the AgarRiskPro
                  system
                </p>
                <div className="postDetails">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="4000"
                    style={{ marginTop: 30 }}
                  >
                    The proposed system comprises four key components: image
                    processing, segmentation, and disease identification;
                    IoT-based Agarwood disease risk detection; IoT-based
                    Agarwood Disease Spreading time duration Prediction; and
                    IoT-based Agarwood Disease severity Prediction and Remedy
                    Prediction. Advanced image processing techniques utilizing
                    NumPy and cv2 libraries in Python are employed, refining
                    images for precise disease detection by enhancing edges and
                    margins.
                    <br />
                    Additionally, a user-friendly mobile application enhances
                    user experience, presenting data in a familiar language.
                    Khattab et al. developed an IoT-enabled monitoring system
                    focusing on epidemic disease control in precision
                    agriculture. By monitoring environmental factors like
                    temperature and humidity, this system ensures optimal crop
                    growth conditions and provides early forecasts for potential
                    epidemic disease outbreaks. Utilizing a wireless sensor
                    network, data on the environment and soil are collected and
                    stored in a database.
                    <br />
                    An AI-driven expert system alerts users before disease
                    epidemics, enhancing disease management strategies. A
                    portable IoT device, integrating an ESP32 microcontroller
                    with various sensors, facilitates precise environmental
                    monitoring. The ESP32's mobility and autonomous data
                    collection capabilities, along with wireless data
                    transmission to a cloud-based database, ensure real-time
                    information availability. The dataset is divided into
                    training and validation subsets, employing techniques like
                    grid search and random search to fine-tune model parameters.
                    Temporal validation methods reflect real-world scenarios,
                    enhancing prediction accuracy for disease outbreaks. A
                    hybrid approach combining experimental and observational
                    methods with machine learning algorithms optimizes treatment
                    programs in agarwood plants.
                    <br />
                    Extensive field observations provide insights into
                    environmental stimuli, enabling the creation of standardized
                    severity evaluation scales. Real-time data on event triggers
                    such as temperature, humidity, pH, and NPK content are
                    collected using sensors, enhancing the dataset's richness.
                    Machine learning algorithms benefit from this comprehensive
                    dataset, enabling accurate prediction of disease severity
                    scores based on environmental cues.
                    <br />
                    In summary, the developed system integrates cutting-edge
                    technologies, including image processing, IoT devices, and
                    machine learning algorithms, to address crucial challenges
                    in Agarwood disease management. By enhancing disease
                    detection accuracy, predicting disease outbreaks, and
                    optimizing treatment strategies, this system contributes
                    significantly to the advancement of precision agriculture,
                    ensuring sustainable Agarwood production.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
