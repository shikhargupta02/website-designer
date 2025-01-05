import Animation from "./Animation";
import { ImGithub } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import "./home.scss";
import { FiExternalLink } from "react-icons/fi";

const Home = () => {
  return (
    <div name="home" className="home-page-wrapper">
      <div className="home-top-section">
        <div className="greeting">
          Hi there!<span className="animate-waving-hand ">👋🏻</span>
        </div>
        <h1 className="top-section-name">Shikhar Gupta</h1>
        <p className="top-section-intro">
          I'm a <span className="highlighted-text">Frontend developer</span> and
          a Fullstack developer enthusiast. I like to learn new technologies and
          build amazing stuff with it.{" "}
        </p>
        <div className="home-animation">
          <Animation />
        </div>
        <a
          href="https://drive.google.com/file/d/1MeMmeIO3rKnMRSDT3c-SQhTxNK07jDgb/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resume-button">
            My Resume <FiExternalLink className="icon" />
          </div>
        </a>
      </div>
      <div className="home-section-intro">
        <h1 className="home-section-intro-head">
          Let me <span className="highlighted-text">Introduce</span> myself
        </h1>
        <br />
        <p className="intro-details">
          I fell in love with programming and i have at least learnt something.
          I think... <br /> <br />I am fluent in classics like
          <span className="highlighted-text"> C++, Javascript.</span>
          <br />
          <br />
          My field of interest's are building new
          <span className="highlighted-text">
            {" "}
            Web Technologies and Products{" "}
          </span>
          and I intend to become a
          <span className="highlighted-text"> Fullstack Developer.</span>
          <br />
          <br />
          Whenever possible, I also apply my passion for developing products
          with <span className="highlighted-text"> Typescript</span> and modern
          library and frameworks like
          <span className="highlighted-text"> React.js</span> and
          <span className="highlighted-text"> Next.js</span>
        </p>
      </div>
      <div className="social-icons-bottom">
        <div className="social-head">FIND ME ON </div>
        <div className="sub-head">
          Feel free to <span className="highlighted-text">connect</span> with me
        </div>
        <div className="icon-flex">
          <a href="https://github.com/shikhargupta02">
            <div className="icon-wrapper ">
              <div className="icon-div">
                <ImGithub color="#192545" size={30} />
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/shikhar-gupta-4a8231172/">
            <div className="icon-wrapper">
              <div className="icon-div">
                <AiFillLinkedin color="#192545" size={30} />
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/accounts/login/?next=/gshikhar38/">
            <div className="icon-wrapper">
              <div className="icon-div">
                <AiFillInstagram color="#192545" size={30} />
              </div>
            </div>
          </a>
          <a href="mailto: gshikhar38@gmail.com">
            <div className="icon-wrapper">
              <div className="icon-div">
                <MdEmail color="#192545" size={30} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
