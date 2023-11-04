import React, { useEffect } from "react";
import "./blog.scss";
import lit from "../../assets/img/lit.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const post = [
  {
    id: 1,
    postImage: lit,
    title: "",
    desc: " The agarwood industry faces challenges due to weather fluctuations leading to crop losses. Smart agriculture, employing technologies like remote sensing, imaging, and AI, plays a crucial role in disease identification and management [2]. Researchers have explored various methods to automate disease identification processes. Dharmasiri and Jayalal used image processing techniques to identify passion fruit plant illnesses with 79% accuracy [1]. Chakravarthy and Raman achieved 99.952% accuracy in classifying Early Blight using neural networks. Khattab, Habib, Ismail, Zayan, Fahmy, and Khairy implemented an IoT-based precision agriculture system, predicting epidemics in advance using AI and prediction algorithms. A holistic approach is emphasized by Kim, Lee, and Shin, who utilized Farm as a Service (FaaS), a cloud-based technology, in strawberry infection prediction, outperforming other models. Khalid et al. employed YOLOv5 deep learning model, achieving 93% accuracy in money plant leaf health classification. Wang, Sun, and Wang utilized deep convolutional neural networks to assess apple black rot severity with 90.4% accuracy, showcasing the potential of deep learning in disease control [3]. In summary, the integration of artificial intelligence, machine learning, and IoT technologies in agriculture facilitates early and efficient disease identification. These advancements are pivotal for sustainable agriculture, ensuring food security by minimizing crop losses and enabling timely preventive measures.",
    link: "https://www.saltinourhair.com/sri-lanka/kandy-ella-train/",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntrosty" style={{marginTop: 40}}>
          <p data-aos="fade-up" data-aos-duration="2500">
            Project scope
          </p>
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Literature Survey
          </h2>
        </div>

        <div className="mainContainer grid">
          {post.map(({ id, postImage, title, desc, link }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={postImage} />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}{" "}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                    {desc}
                  </p>
                  <h4 data-aos="fade-up" data-aos-duration="4000">
                    Refernces
                  </h4>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="4000"
                    style={{ color: "black" }}
                  >
                    [1] S. Zhang, C. Zhang, D. S. Park, and S. Yoon, “Editorial:
                    Machine learning and artificial intelligence for smart
                    agriculture, volume II,” Front Plant Sci, vol. 14, p.
                    1166209, Apr. 2023, doi: 10.3389/FPLS.2023.1166209/BIBTEX.
                    <br />
                    [2] A. Khattab, S. E. D. Habib, H. Ismail, S. Zayan, Y.
                    Fahmy, and M. M. Khairy, “An IoT-based cognitive monitoring
                    system for early plant disease forecast,” Comput Electron
                    Agric, vol. 166, p. 105028, Nov. 2019, doi:
                    10.1016/J.COMPAG.2019.105028.
                    <br />
                    [3] G. Wang, Y. Sun, and J.Wang, “Automatic Image-Based
                    Plant Disease Severity Estimation Using Deep Learning,”
                    Comput Intell Neurosci, vol. 2017, 2017, doi:
                    10.1155/2017/2917536.
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

export default Blog;
