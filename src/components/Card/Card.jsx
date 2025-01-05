import "./card.scss";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";
const Card = (props) => {
  return (
    <div className="card">
      {props?.cardType === "project" ? (
        <div className="card-wrapper">
          <div className="card-backdrop"></div>
          <div className="card-border">
            <img src={props.image} alt="app" className="project-image" />
            <div className="project-data-wrapper">
              <div className="project-data">
                <div className="project-title">{props.title}</div>

                <p className="project-description">{props.description}</p>
              </div>
              <div className="project-link-buttons-wrapper">
                {props.projectLink && (
                  <a
                    className="project-link-buttons"
                    href={props.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink className="icon" />
                  </a>
                )}
                {props.gitLink && (
                  <a
                    className="project-link-buttons"
                    href={props.gitLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoGithub className="icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="reusable-component">
          <div className="foreground">
            <div className="icon-container">{props.icon}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
