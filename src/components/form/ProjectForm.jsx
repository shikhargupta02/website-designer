import React, { useRef, useState } from "react";
import "./project-form.scss";
import {
  getGeneratedResponses,
  handleFormUpdate,
  initialFormRefData,
} from "../../utils/helper";
import { ProjectSection } from "./ProjectSection";
import { cloneDeep } from "lodash";
import { useDispatch } from "react-redux";
import { updateForm, updateShowPortfolio } from "../../redux/formSlice";
import { Loader } from "../Loader";

const ProjectForm = () => {
  const [showLoader, setLoader] = useState(false);
  const formRef = useRef(cloneDeep(initialFormRefData));
  const [skills, setSkills] = useState([""]);
  const dispatch = useDispatch();
  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    if (formRef.current.about.skills.length < index + 1) {
      formRef.current.about.skills.push(value);
    } else {
      formRef.current.about.skills[index] = value;
    }
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((item, i) => i !== index);
    const updatedSkills = skills.filter(
      (item, i) => i !== index && item !== ""
    );
    formRef.current.about.skills = updatedSkills;
    setSkills(newSkills);
  };

  // const handleImageChange = (index, file) => {
  //   const newProjects = [...projects];
  //   newProjects[index].image = file;
  //   // Create a URL for the image file
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImagePreview(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  //   setProjects(newProjects);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    await getGeneratedResponses(formRef);
    dispatch(updateForm(formRef.current));
    dispatch(updateShowPortfolio(true));
    setLoader(false);
  };

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="form-container">
          <h2>Project Form</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                onChange={(e) =>
                  handleFormUpdate("home.name", e.target.value, formRef)
                }
                required={true}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Describe yourself:</label>
              <textarea
                id="description"
                onChange={(e) =>
                  handleFormUpdate("home.description", e.target.value, formRef)
                }
                required={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="short-intro">Short intro of you:</label>
              <textarea
                id="short-intro"
                onChange={(e) =>
                  handleFormUpdate("home.shortIntro", e.target.value, formRef)
                }
                required={true}
              />
            </div>
            <div className="form-group">
              <h3>About yourself:</h3>
              <div>
                <label htmlFor="about-yourself">
                  Write little about your education background:
                </label>
                <textarea
                  id="about-yourself"
                  onChange={(e) =>
                    handleFormUpdate(
                      "about.aboutYourself",
                      e.target.value,
                      formRef
                    )
                  }
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="hobbies">Write little about hobbies:</label>
                <textarea
                  id="hobbies"
                  onChange={(e) =>
                    handleFormUpdate("about.hobbies", e.target.value, formRef)
                  }
                  required={true}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Skills:</label>
              {skills.map((skill, index) => (
                <div key={index} className="skill-group">
                  <input
                    type="text"
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    placeholder="Skill"
                    required={true}
                    value={skill}
                  />
                  <button
                    type="button"
                    className="form-button"
                    onClick={() => removeSkill(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" className="form-button" onClick={addSkill}>
                Add Skill
              </button>
            </div>

            <ProjectSection formRef={formRef} />
            <div className="form-group">
              <label htmlFor="resume-link">Resume Link:</label>
              <input
                id="resume"
                onChange={(e) =>
                  handleFormUpdate("resumeLink", e.target.value, formRef)
                }
                required={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="github-link">Github Id:</label>
              <input
                id="github"
                onChange={(e) =>
                  handleFormUpdate("githubLink", e.target.value, formRef)
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="mail">Mail Id:</label>
              <input
                id="mail"
                onChange={(e) =>
                  handleFormUpdate("mailId", e.target.value, formRef)
                }
                required={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedIn">Linkedin Id Link:</label>
              <input
                id="linkedin"
                onChange={(e) =>
                  handleFormUpdate("linkedinLink", e.target.value, formRef)
                }
                required={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="insta">Instagram Handle:</label>
              <input
                id="insta"
                onChange={(e) =>
                  handleFormUpdate("instaLink", e.target.value, formRef)
                }
                required={true}
              />
            </div>
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ProjectForm;
