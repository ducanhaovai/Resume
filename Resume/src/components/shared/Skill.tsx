import { useState } from "react";

export default function Skill() {
  const [activeSkill, setActiveSkill] = useState("HTML");
  const skills = ["HTML", "CSS", "JS", "React"];
  const skillIcons = [
    "fa-html5 fa-beat",
    "fa-css3-alt fa-bounce",
    "fa-js fa-fade",
    "fa-react fa-flip",
  ];

  const handleSkillClick = (skill: string) => {
    setActiveSkill(skill);
  };

  return (
    <div className="skills padd-15">
      <div className="row">
        {skills.map((skill, index) => (
          <div className="skill-item padd-15" key={index}>
            <i className={`fa-brands ${skillIcons[index]}`}></i>
            <h5>{skill}:</h5>
            <p
              className={skill === activeSkill ? "active" : ""}
              onClick={() => handleSkillClick(skill)}
            >
              Intern
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
