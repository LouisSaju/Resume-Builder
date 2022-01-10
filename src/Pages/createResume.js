import React, { useState } from "react";
import EducationSec from "../Components/educationSection";
import ExperienceSection from "../Components/experienceSection";
import { useDispatch } from "react-redux";
import {
  setPersonalInfo,
  setEducationalInfo,
  setExperienceInfo,
  setSkillSet,
  
} from "../Store/Reducers/ResumeReducer";
import PersonalSection from "../Components/personalSection";
import SkillSet from "../Components/skillSet";
import { Link } from "react-router-dom";
import style from "../Styles/createResume.module.css";

export default function CreateResume() {
  const [submit, setsubmit] = useState(true);
  const dispatch = useDispatch();
  let [applicantPersonal, setApplicantPer] = useState({});
  let [applicantEducational, setapplicantEdu] = useState([]);
  let [applicantExperience, setapplicantExp] = useState([]);
  let [applicantSkillSet, setapplicantSkillSet] = useState([]);
  const setPersonalDetails = (details) => {
    setApplicantPer(details);
  };
  const setEducationalDetails = (details) => {
    setapplicantEdu(details);
  };
  const setExperienceDetails = (details) => {
    setapplicantExp(details);
  };
  const setSkillSetDetails = (details) => {
    if (isNaN(details)) {
      setapplicantSkillSet([...applicantSkillSet, details]);
    } else {
      const values = [...applicantSkillSet];
      values.splice(details, 1);
      setapplicantSkillSet(values);
    }
  };
  const submitResume = (event) => {
    event.preventDefault();
    let errorEd = false,
      errorPer = false,
      errorskillSet = false,
      errorExp = false;
    if (
      applicantPersonal.name === "" ||
      applicantPersonal.address === "" ||
      applicantPersonal.email === "" ||
      applicantPersonal.phone === ""
    ) {
      errorPer = true;
    }
    applicantEducational.filter((appEd) =>
      appEd.institute === "" || appEd.gradYear === "" || appEd.degree === ""
        ? (errorEd = true)
        : (errorEd = false)
    );
    applicantExperience.filter((appExp) =>
      appExp.company === "" ||
      appExp.desig === "" ||
      appExp.from === "" ||
      appExp.to === ""
        ? (errorExp = true)
        : (errorExp = false)
    );
    if (applicantSkillSet.length === 0) {
      errorskillSet = true;
    }
    if (!errorPer && !errorEd && !errorExp && !errorskillSet) {
      dispatch(setPersonalInfo(applicantPersonal));
      dispatch(setEducationalInfo(applicantEducational));
      dispatch(setExperienceInfo(applicantExperience));
      dispatch(setSkillSet(applicantSkillSet));
      setsubmit(false);
    }
  };
  return (
    <React.Fragment>
      <h2>Please fill the Resume</h2>
      <form onSubmit={submitResume}>
        <PersonalSection applicantPer={setPersonalDetails} />
        <EducationSec applicantEdu={setEducationalDetails} />
        <ExperienceSection applicantExp={setExperienceDetails} />
        <SkillSet applicantSkills={setSkillSetDetails} />
        <div style={{ display: "flex" }}>
          <button className={style.submit} type="submit" value="Submit">
            Save
          </button>
          <button
            className={style.submit}
            type="submit"
            value="Submit"
            disabled={submit}
          >
            <Link className={submit ? "style.disable" : ""} to="/reviewResume">
              View Resume
            </Link>
          </button>
        </div>
        {!submit ? <span className={style.span}>Resume Saved</span> : ""}
      </form>
    </React.Fragment>
  );
}
