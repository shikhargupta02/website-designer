import Animation from "./Animation";
import { ImGithub } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import "./home.scss";
import { FiExternalLink } from "react-icons/fi";
import { selectForm } from "../redux/formSlice.js";
import { useSelector } from "react-redux";

const Home = () => {
  const form = useSelector(selectForm);
  return (
    <div name="home" className="home-page-wrapper">
      <div className="home-top-section">
        <div className="greeting">
          Hi there!<span className="animate-waving-hand ">👋🏻</span>
        </div>
        <h1 className="top-section-name">{form.home.name}</h1>
        <p className="top-section-intro">{form.home.description}</p>
        <div className="home-animation">
          <Animation />
        </div>
        <a href={form.resumeLink} target="_blank" rel="noopener noreferrer">
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
        <p className="intro-details">{form.home.shortIntro}</p>
      </div>
      <div className="social-icons-bottom">
        <div className="social-head">FIND ME ON </div>
        <div className="sub-head">
          Feel free to <span className="highlighted-text">connect</span> with me
        </div>
        <div className="icon-flex">
          {form.githubLink && (
            <a href={`https://github.com/${form.githubLink}`}>
              <div className="icon-wrapper ">
                <div className="icon-div">
                  <ImGithub color="#192545" size={30} />
                </div>
              </div>
            </a>
          )}
          <a href={form.linkedinLink}>
            <div className="icon-wrapper">
              <div className="icon-div">
                <AiFillLinkedin color="#192545" size={30} />
              </div>
            </div>
          </a>
          <a
            href={`https://www.instagram.com/accounts/login/?next=/${form.instaLink}/`}
          >
            <div className="icon-wrapper">
              <div className="icon-div">
                <AiFillInstagram color="#192545" size={30} />
              </div>
            </div>
          </a>
          <a href={`mailto: ${form.mailId}`}>
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
