import "./work.scss";
import Card from "./Card/Card.jsx";
import { useSelector } from "react-redux";
import { selectForm } from "../redux/formSlice.js";
const Work = () => {
  const form = useSelector(selectForm);
  const projects = form.projects;
  return (
    <div className="work-wrapper">
      <div className="work-head">
        My Recent <span className="highlighted-text">Works</span>
      </div>
      <div className="project-section">
        Here are a few projects I have worked on.
      </div>
      <div className="project-card-wrapper">
        {projects.map((item) => {
          return (
            <Card
              cardType={"project"}
              title={item.projectName}
              description={item.projectDescription}
              image={item.image ? URL.createObjectURL(item.image) : null}
              projectLink={item.projectLink}
              gitLink={item.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Work;
