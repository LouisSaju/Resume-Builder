import { React, useState } from "react";
import styles from "../Styles/createResume.module.css";

export default function EducationSec({ applicantEdu }) {
  const [educationalInfos, setEducationalInfos] = useState([
    { Institute: "", GradYear: "", Degree: "" },
  ]);
  const eDetailsHandler = (index, event) => {
    const details = [...educationalInfos];
    details[index][event.target.name] = event.target.value;
    setEducationalInfos(details);
    applicantEdu(details);
  };
  const addEd = () => {
    setEducationalInfos([
      ...educationalInfos,
      { Institute: "", GradYear: "", Degree: "" },
    ]);
  };
  const removeEd = (index) => {
    if (educationalInfos.length !== 1) {
      const values = [...educationalInfos];
      values.splice(index, 1);
      setEducationalInfos(values);
    }
  };
  return (
    <div>
      {educationalInfos.map((educationalInfo, index) => (
        <div className={styles.educationSec} key={index}>
          <label>Education:</label>
          <div>
            <label>
              <span className={styles.span}>*</span>Institute:
            </label>
            <input
              className={styles.input}
              type="text"
              name="Institute"
              placeholder="Enter your Institute name"
              value={educationalInfo.Institute}
              onChange={(event) => eDetailsHandler(index, event)}
              required
            />
          </div>
          <div>
            <label>
              <span className={styles.span}>*</span>Graduated Year:
            </label>
            <input
              className={styles.input}
              type="date"
              name="GradYear"
              max="2019-12-12"
              value={educationalInfo.GradYear}
              onChange={(event) => eDetailsHandler(index, event)}
              required
            />
          </div>
          <div>
            <label>
              <span className={styles.span}>*</span>Degree:
            </label>
            <input
              className={styles.input}
              type="text"
              name="Degree"
              placeholder="Enter your Degree"
              value={educationalInfo.Degree}
              onChange={(event) => eDetailsHandler(index, event)}
              required
            />
          </div>
          <button className={styles.button} onClick={addEd}>
            Add
          </button>
          <button className={styles.button} onClick={() => removeEd(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
