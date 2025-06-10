import React from "react";
import "./About.css";
import profile from "../../assets/profile1.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            I’m a passionate and dedicated **Computer Science graduate** with a strong interest in building web and software applications.
            </p>
            <p>
            As a fresher, I am eager to learn, grow, and contribute to real-world projects while continuously improving my technical and problem-solving skills.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React js </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Core Java</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Advance Java</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>years of expereince</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>happy clients</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
