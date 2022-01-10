import React, { useState } from "react";
import styles from "../Styles/createResume.module.css";

export default function ExperienceSection({ applicantExp }) {
  let [isChecked, setisChecked] = useState(false);
  const [experienceInfos, setExperienceInfos] = useState([
    { Company: "", From: "", To: "", Designation: "" },
  ]);
  const handleOnChange = (index) => {
    setisChecked(!isChecked);
    const details = [...experienceInfos];
    details[index]["To"] = "";
    setExperienceInfos(details);
  };
  const eDetailsHandler = (index, event) => {
    const details = [...experienceInfos];
    details[index][event.target.name] = event.target.value;
    setExperienceInfos(details);
    applicantExp(details);
  };
  const addExp = () => {
    setExperienceInfos([
      ...experienceInfos,
      { Institute: "", GradYear: "", Degree: "" },
    ]);
  };
  const removeExp = (index) => {
    if (experienceInfos.length !== 1) {
      const values = [...experienceInfos];
      values.splice(index, 1);
      setExperienceInfos(values);
    }
  };
  return (
    <div>
      {experienceInfos.map((experienceInfo, index) => (
        <div className={styles.experienceSection} key={index}>
          <label>Experience:</label>
          <div>
            <label>
              <span className={styles.span}>*</span>Company:
            </label>
            <input
              className={styles.input}
              type="text"
              name="Company"
              placeholder="Enter your Company name"
              value={experienceInfo.Company}
              onChange={(event) => eDetailsHandler(index, event)}
              required
            />
          </div>
          <div>
            <label>
              <span className={styles.span}>*</span>From:
            </label>
            <input
              className={styles.input}
              type="date"
              name="From"
              value={experienceInfo.From}
              onChange={(event) => eDetailsHandler(index, event)}
              required
            />
            {isChecked ? (
              ""
            ) : (
              <div>
                <label>
                  <span className={styles.span}>*</span>To:
                </label>
                <input
                  className={styles.input}
                  type="date"
                  name="To"
                  value={experienceInfo.To}
                  onChange={(event) => eDetailsHandler(index, event)}
                  required
                />
              </div>
            )}
          </div>
          <div>
            <label>
              <span className={styles.span}>*</span>
              Current Company
              <input
                className={styles.input}
                type="checkbox"
                onChange={() => handleOnChange(index)}
                checked={isChecked}
              />
            </label>
          </div>
          <div>
            <label>
              <span className={styles.span}>*</span>Designation:
            </label>
            <input
              className={styles.input}
              type="text"
              name="Designation"
              placeholder="Enter your Designation"
              value={experienceInfo.Designation}
              onChange={(event) => eDetailsHandler(index, event)}
              required
            />
          </div>
          <button className={styles.button} onClick={addExp}>
            Add
          </button>
          <button className={styles.button} onClick={removeExp}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
