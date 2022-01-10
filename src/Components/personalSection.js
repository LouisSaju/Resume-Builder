import { React, useState } from "react";
import styles from "../Styles/createResume.module.css";

export default function PersonalSection({ applicantPer }) {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const pDetailsHandler = (event) => {
    const details = { ...personalDetails };
    details[event.target.name] = event.target.value;
    setPersonalDetails(details);
    applicantPer(personalDetails);
  };
  return (
    <div>
      <div>
        <label>
          <span className={styles.span}>*</span>
          Name:
        </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Enter your Name"
          onChange={pDetailsHandler}
          value={personalDetails.name}
          required
        />
      </div>
      <div>
        <label>
          <span className={styles.span}>*</span>
          Email:
        </label>
        <input
          className={styles.input}
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={pDetailsHandler}
          value={personalDetails.email}
          required
        />
      </div>
      <div>
        <label>
          <span className={styles.span}>*</span>
          Address:
        </label>
        <input
          className={styles.input}
          type="text"
          name="address"
          placeholder="Enter your Address"
          onChange={pDetailsHandler}
          value={personalDetails.address}
          required
        />
      </div>
      <div>
        <label>
          <span className={styles.span}>*</span>
          Phone:
        </label>
        <input
          className={styles.input}
          type="number"
          name="phone"
          placeholder="Enter your phone number"
          onChange={pDetailsHandler}
          value={personalDetails.phone}
          required
        />
      </div>
    </div>
  );
}
