import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import { skillIcons } from "./projects-data";
import "./about.scss";
const About = () => {
  const getIconSize = () => {
    const width = window.innerWidth;
    if (width < 770) return 40;
    if (width < 1080) return 60;
    return 80;
  };
  const [iconSize, setIconSize] = useState(getIconSize());
  useEffect(() => {
    const handleResize = () => setIconSize(getIconSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const mySkills = skillIcons(iconSize);
  return (
    <div className="about-section">
      <div className="about-top-wrapper">
        <div>
          <div className="about-top-head">
            Know Who <span className="highlighted-text"> I'm </span>
            <br />
          </div>
          <div className="intro">
            Hi Everyone, I am{" "}
            <span className="highlighted-text">Shikhar Gupta</span> from
            <span className="highlighted-text"> Jammu & Kashmir, India.</span>
          </div>
          <div className="intro-grad">
            I am an undergraduate pursuing B.tech in Electrical Engineering at
            PEC.
          </div>
          <div className="intro-hobbies">
            {" "}
            Apart from coding, some other activities that I love to do!
            <div className="hobby-list">
              <ul className="list-style">
                <li>Playing Games</li>
                <li>Travelling</li>
                <li>Enjoying Songs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-section">
        <div className="skill-head">
          My <span className="highlighted-text">Skills</span>
        </div>
        <div className="skills-icons-wrapper">
          {mySkills.map((item) => {
            return <Card icon={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default About;
