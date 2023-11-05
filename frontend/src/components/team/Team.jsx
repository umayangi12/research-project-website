import React from "react";
import "./team.css";
import supervisor from "../../assets/img/super.png";
import cosupervisor from "../../assets/img/cosuper.png";
import mem1 from "../../assets/img/mem1.jpg";
import mem2 from "../../assets/img/mem2.jpg";
import mem3 from "../../assets/img/mem3.jpg";
import linkedin from "../../assets/img/linkedin.png";


const Team = () => {
  return (
    <div>
      <section>
        <div className="containe" style={{ marginTop: 30 }}>
          <h1>Meet our Team</h1>
          <div className="cards">
            <div className="card">
              <img
                src={supervisor}
                alt=""
                style={{ width: 250, height: 250 }}
              />
              <h3 style={{ fontSize: 25 }}>Dr. Amitha Caldera</h3>
              <p class="supervisor">Supervisor</p>
              <p>Sri Lanka Institute of Information Technology</p>
              <a href="https://www.linkedin.com/in/amitha-caldera-a7086740/">
                <img src={linkedin} alt="" style={{ width: 50, height: 50 }} />
              </a>
            </div>
            <div className="card">
              <img
                src={cosupervisor}
                alt=""
                style={{ width: 250, height: 250 }}
              />
              <h3 style={{ fontSize: 25 }}>Dr. Sanvitha Kasthuriarachchi</h3>
              <p class="supervisor">Co-Supervisor</p>
              <p>Sri Lanka Institute of Information Technology</p>

              <a href="https://www.linkedin.com/in/sanvitha-kasthuriarachchi-31b50a37/">
                <img src={linkedin} alt="" style={{ width: 50, height: 50 }} />
              </a>
            </div>
          </div>
        </div>
        <div className="containe" style={{ marginTop: 30 }}>
          <div className="cards">
            <div className="card">
              <img src={mem1} alt="" style={{ width: 250, height: 250 }} />
              <h3 style={{ fontSize: 25 }}>Indrachapa Ekanayake</h3>
              <p class="supervisor">Member</p>
              <p>Sri Lanka Institute of Information Technology</p>
              <a href="https://www.linkedin.com/in/indrachapa-ekanayake/">
                <img src={linkedin} alt="" style={{ width: 50, height: 50 }} />
              </a>
            </div>
            <div className="card">
              <img src={mem2} alt="" style={{ width: 250, height: 250 }} />
              <h3 style={{ fontSize: 25 }}>Surath Chathuranga</h3>
              <p class="supervisor">Member</p>
              <p>Sri Lanka Institute of Information Technology</p>
              <a href="https://www.linkedin.com/in/surath-chathuranga-arachchi-bbb04a220/">
                <img src={linkedin} alt="" style={{ width: 50, height: 50 }} />
              </a>
            </div>
            <div className="card">
              <img src={mem3} alt="" style={{ width: 250, height: 250 }} />
              <h3 style={{ fontSize: 25 }}>Tharindu Rathnayake</h3>
              <p class="supervisor">Member</p>
              <p>Sri Lanka Institute of Information Technology</p>
              <a href="https://www.linkedin.com/in/tharindu-rathnayake-977049226/">
                <img src={linkedin} alt="" style={{ width: 50, height: 50 }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
