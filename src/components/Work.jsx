import "./work.scss";
import Card from "./Card/Card.jsx";
import { getProjectData } from "./projects-data.js";
const Work = () => {
  const projectData = getProjectData();
  return (
    <div className="work-wrapper">
      <div className="work-head">
        My Recent <span className="highlighted-text">Works</span>
      </div>
      <div className="project-section">
        Here are a few projects I have worked on.
      </div>
      <div className="project-card-wrapper">
        {projectData.map((item) => {
          return (
            <Card
              cardType={"project"}
              title={item.title}
              description={item.description}
              image={item.img}
              projectLink={item.projectLink}
              gitLink={item.gitLink}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Work;
