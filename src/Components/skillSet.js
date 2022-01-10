import { React, useState } from "react";
import styles from "../Styles/createResume.module.css";

export default function SkillSet({ applicantSkills }) {
  let [skillSet, setSkillSet] = useState([]);
  let [matchedSkills, setMatchedSkills] = useState([]);
  let [dropdown, setDropdown] = useState(true);
  let [text, setText] = useState("");
  const skills = [
    { id: 0, name: "angular" },
    { id: 1, name: "java" },
    { id: 2, name: "react" },
    { id: 3, name: "css" },
    { id: 4, name: "html" },
    { id: 5, name: "python" },
    { id: 6, name: "javascript" },
    { id: 7, name: "redux" },
    { id: 8, name: "c" },
    { id: 9, name: "ruby" },
  ];
  const suggestions = (skill) => {
    setText(skill);
    if (skill.length > 1) {
      let matches = skills.filter((s) => s.name.match(skill));
      setMatchedSkills(matches);
      setDropdown(true);
    } else {
      setMatchedSkills("");
    }
  };
  const addSkill = (skill) => {
    setSkillSet([...skillSet, skill]);
    setText("");
    setDropdown(false);
    applicantSkills(skill);
  };
  const deleteSkill = (index) => {
    const values = [...skillSet];
    values.splice(index, 1);
    setSkillSet(values);
    applicantSkills(index);
  };
  return (
    <div>
      <label>
        <span className={styles.span}> *</span>Skill:
      </label>
      <div>
        {skillSet &&
          skillSet.map((skill, index) => (
            <p
              className={styles.p}
              onClick={() => deleteSkill(index)}
              key={index}
            >
              {skill}
            </p>
          ))}
        <input
          className={styles.skillSet}
          type="text"
          placeholder="Enter your skills"
          name="skillset"
          value={text}
          onChange={(event) => suggestions(event.target.value)}
          required={skillSet.length !== 0 ? false : true}
        />
        <div>
          {dropdown ? (
            <ul className={styles.ul}>
              {matchedSkills &&
                matchedSkills.map((matchedSkill, index) => (
                  <li
                    className={styles.li}
                    key={index}
                    onClick={(e) => addSkill(e.target.innerText)}
                  >
                    {matchedSkill.name}
                  </li>
                ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
