import React, { useRef, useState } from "react";
import "./project-form.scss";
import {
  aboutYouRephrase,
  descriptionRephrase,
  getGeneratedResponses,
  handleFormUpdate,
  initialFormRefData,
  shortIntroRephrase,
} from "../../utils/helper";
import { ProjectSection } from "./ProjectSection";
import { cloneDeep } from "lodash";
import { useDispatch } from "react-redux";
import { updateForm, updateShowPortfolio } from "../../redux/formSlice";
import { Loader } from "../Loader";
import { TbExclamationMark } from "react-icons/tb";
import { ProjectSkillSection } from "./ProjectSkillSection";

const ProjectForm = () => {
  const [showLoader, setLoader] = useState(false);
  const formRef = useRef(cloneDeep(initialFormRefData));
  const dispatch = useDispatch();

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

  const handleIntroUpdate = async () => {
    const value = await shortIntroRephrase(formRef);
    const inputElement = document.getElementById("short-intro"); // Get the input element by ID
    if (inputElement) {
      inputElement.value = value;
      formRef.current.home.shortIntro = value;
    }
  };
  const handleDescriptionUpdate = async () => {
    const value = await descriptionRephrase(formRef);
    const inputElement = document.getElementById("description"); // Get the input element by ID
    if (inputElement) {
      inputElement.value = value;
      formRef.current.home.description = value;
    }
  };
  const handleAboutYouUpdate = async () => {
    const value = await aboutYouRephrase(formRef);
    const inputElement = document.getElementById("about-yourself"); // Get the input element by ID
    if (inputElement) {
      inputElement.value = value;
      formRef.current.about.aboutYourself = value;
    }
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
              <div className="tooltip-wrapper">
                <textarea
                  id="description"
                  onChange={(e) =>
                    handleFormUpdate(
                      "home.description",
                      e.target.value,
                      formRef
                    )
                  }
                  required={true}
                  className="tooltip-input"
                />
                <div
                  className="ai-tooltip"
                  title="You can rephrase this with google gemini"
                >
                  <TbExclamationMark className="exclamation-icon" />
                </div>
              </div>{" "}
              <button
                type="button"
                className="form-button"
                onClick={handleDescriptionUpdate}
              >
                Rephrase
              </button>
            </div>
            <div className="form-group">
              <label htmlFor="short-intro">Short intro of you:</label>
              <div className="tooltip-wrapper">
                <textarea
                  id="short-intro"
                  onChange={(e) =>
                    handleFormUpdate("home.shortIntro", e.target.value, formRef)
                  }
                  required={true}
                  className="tooltip-input"
                />
                <div
                  className="ai-tooltip"
                  title="You can rephrase this with google gemini"
                >
                  <TbExclamationMark className="exclamation-icon" />
                </div>
              </div>
              <button
                type="button"
                className="form-button"
                onClick={handleIntroUpdate}
              >
                Rephrase
              </button>
            </div>
            <div className="form-group">
              <h3>About yourself:</h3>
              <div>
                <label htmlFor="about-yourself">
                  Write little about your education background:
                </label>
                <div className="tooltip-wrapper">
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
                    className="tooltip-input"
                  />
                  <div
                    className="ai-tooltip"
                    title="You can rephrase this with google gemini"
                  >
                    <TbExclamationMark className="exclamation-icon" />
                  </div>
                </div>
                <button
                  type="button"
                  className="form-button"
                  onClick={handleAboutYouUpdate}
                >
                  Rephrase
                </button>
              </div>
              <div>
                <label htmlFor="hobbies">Write little about hobbies:</label>
                <div className="tooltip-wrapper">
                  <textarea
                    id="hobbies"
                    onChange={(e) =>
                      handleFormUpdate("about.hobbies", e.target.value, formRef)
                    }
                    required={true}
                    className="tooltip-input"
                  />
                  <div
                    className="ai-tooltip"
                    title="You can rephrase this with google gemini"
                  >
                    <TbExclamationMark className="exclamation-icon" />
                  </div>
                </div>
              </div>
            </div>
            <ProjectSkillSection formRef={formRef} />
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
