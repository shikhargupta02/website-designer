import { useRef, useState } from "react";
import { skillsDropdown } from "../projects-data";
import SearchableDropdown from "./Dropdown";

export const ProjectSkillSection = (props) => {
  const [skills, setSkills] = useState([""]);
  const skillSectionList = useRef(
    skillsDropdown.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    })
  );
  // const handleSkillChange = (index, value) => {
  //   const newSkills = [...skills];
  //   newSkills[index] = value;
  //   if (props.formRef.current.about.skills.length < index + 1) {
  //     props.formRef.current.about.skills.push(value);
  //   } else {
  //     props.formRef.current.about.skills[index] = value;
  //   }
  //   setSkills(newSkills);
  // };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((item, i) => i !== index);
    const updatedSkills = skills.filter(
      (item, i) => i !== index && item !== ""
    );
    props.formRef.current.about.skills = updatedSkills;
    setSkills(newSkills);
  };
  return (
    <div className="form-group">
      <label>Skills:</label>
      {skills.map((skill, index) => (
        <div key={index} className="skill-group">
          {/* <input
            type="text"
            onChange={(e) => handleSkillChange(index, e.target.value)}
            placeholder="Skill"
            required={true}
            value={skill}
          />
          <input
          type=""
          /> */}
          <SearchableDropdown
            options={skillSectionList.current}
            placeholder="Type to search..."
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
  );
};
