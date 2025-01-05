import { useState } from "react";
import { cloneDeep } from "lodash";
import "./project-form.scss";
import { initialProjectData } from "../../utils/helper";
import { TbExclamationMark } from "react-icons/tb";
export const ProjectSection = (props) => {
  const [projects, setProjects] = useState([cloneDeep(initialProjectData)]);

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    if (props.formRef.current.projects.length < index + 1) {
      props.formRef.current.projects.push(newProjects[index]);
    } else {
      props.formRef.current.projects[index][field] = value;
    }
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([...projects, cloneDeep(initialProjectData)]);
  };

  const removeProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    const updatedProjects = projects.filter(
      (item, i) => i !== index && item !== cloneDeep(initialProjectData)
    );
    props.formRef.current.projects = updatedProjects;
    setProjects(newProjects);
  };

  return (
    <div className="form-group">
      <h3>Projects:</h3>
      {projects.map((project, index) => (
        <div key={index} className="project-group">
          <input
            type="text"
            onChange={(e) =>
              handleProjectChange(index, "projectName", e.target.value)
            }
            value={project.projectName}
            placeholder="Project Name"
            required={true}
          />
          <input
            type="text"
            onChange={(e) =>
              handleProjectChange(index, "githubLink", e.target.value)
            }
            value={project.githubLink}
            placeholder="GitHub Link"
            required={true}
          />
          <input
            type="text"
            onChange={(e) =>
              handleProjectChange(index, "projectLink", e.target.value)
            }
            value={project.projectLink}
            placeholder="Project Link"
          />
          <div className="tooltip-wrapper">
            <textarea
              onChange={(e) =>
                handleProjectChange(index, "projectDescription", e.target.value)
              }
              placeholder="Project Description"
              value={project.projectDescription}
              required={true}
              className="tooltip-input"
            />
            <div
              className="ai-tooltip"
              title="This text will be repharsed by AI"
            >
              <TbExclamationMark className="exclamation-icon" />
            </div>
          </div>
          <input
            type="file"
            onChange={(e) =>
              handleProjectChange(index, "image", e.target.files[0])
            }
            accept="image/*"
          />
          <button
            type="button"
            className="form-button"
            onClick={() => removeProject(index)}
          >
            Remove Project
          </button>
        </div>
      ))}
      <button type="button" className="form-button" onClick={addProject}>
        Add Project
      </button>
    </div>
  );
};
