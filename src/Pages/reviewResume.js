import React from "react";
import { useSelector } from "react-redux";
import styles from "../Styles/reviewResume.module.css";

export default function ReviewResume() {
  const pName = useSelector((state) => state.resumeForm.name);
  const pAddress = useSelector((state) => state.resumeForm.address);
  const pPhone = useSelector((state) => state.resumeForm.phone);
  const pEmail = useSelector((state) => state.resumeForm.email);
  const educationalDetails = useSelector(
    (state) => state.resumeForm.educationList
  );
  const experienceDetails = useSelector(
    (state) => state.resumeForm.experienceSection
  );
  const skillSetDetails = useSelector((state) => state.resumeForm.skillset);
  return (
    <React.Fragment>
      <h2>Review Resume</h2>
      <form>
        <div className={styles.details}>
          <label>Name:</label>
          <p className={styles.p}>{pName}</p>
        </div>
        <div className={styles.details}>
          <label>Eamil:</label>
          <p className={styles.p}>{pEmail}</p>
        </div>
        <div className={styles.details}>
          <label>Address:</label>
          <p className={styles.p}>{pAddress}</p>
        </div>
        <div className={styles.details}>
          <label>Phone:</label>
          <p className={styles.p}>{pPhone}</p>
        </div>
        <div>
          {educationalDetails.map((educationalDetail, index) => (
            <div key={index}>
              <label>Education {index + 1}:</label>
              <div className={styles.details}>
                <label>Institute:</label>
                <p className={styles.p}>{educationalDetail.Institute}</p>
              </div>
              <div className={styles.details}>
                <label>Graduated Year:</label>
                <p className={styles.p}>{educationalDetail.GradYear}</p>
              </div>
              <div className={styles.details}>
                <label>Degree:</label>
                <p className={styles.p}>{educationalDetail.Degree}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          {experienceDetails.map((experienceDetail, index) => (
            <div key={index}>
              <label>Experience {index + 1}:</label>
              <div className={styles.details}>
                <label>Company:</label>
                <p className={styles.p}>{experienceDetail.Company}</p>
              </div>
              <div className={styles.details}>
                <label>From:</label>
                <p className={styles.p}>{experienceDetail.From}</p>
              </div>
              <div className={styles.details}>
                <label>To:</label>
                <p className={styles.p}>
                  {experienceDetail.To === ""
                    ? "Current Company"
                    : experienceDetail.To}
                </p>
              </div>
              <div className={styles.details}>
                <label>Designation:</label>
                <p className={styles.p}>{experienceDetail.Designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.details}>
          <label>Skills:</label>
          {skillSetDetails.map((skill, index) => (
            <p className={styles.p} key={index}>
              {skill},{" "}
            </p>
          ))}
        </div>
      </form>
    </React.Fragment>
  );
}
