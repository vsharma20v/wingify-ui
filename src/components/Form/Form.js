import { useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import styles from "./Form.module.css";

const dates = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years = [
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
];

const emailRegex = new RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const passwordRegex = new RegExp(/^(?=.*\d).{1,}$/);

const emailValidator = (value) => emailRegex.test(value.trim());

const passwordValidator = (value) => passwordRegex.test(value.trim());

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("01");
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("1995");
  const [identity, setIdentity] = useState("individual");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const emailChangeHandler = (e) => {
    if (showEmailError) {
      setShowEmailError(false);
    }
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    if (showPasswordError) {
      setShowPasswordError(false);
    }
    setPassword(e.target.value);
  };

  const dateChangeHandler = (e) => setDate(e.target.value);
  const monthChangeHandler = (e) => setMonth(e.target.value);
  const yearChangeHandler = (e) => setYear(e.target.value);
  const identityChangeHandler = (e) => setIdentity(e.target.id);

  const emailInvalidHandler = (e) => {
    e.preventDefault();
    setShowEmailError(true);
  };

  const passwordInValidHandler = (e) => {
    e.preventDefault();
    setShowPasswordError(true);
  };

  const resetAllState = () => {
    setEmail("");
    setPassword("");
    setDate("01");
    setMonth("January");
    setYear("1995");
    setIdentity("individual");
    setShowEmailError(false);
    setShowPasswordError(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const emailIsValid = emailValidator(email);
    const passwordIsValid = passwordValidator(password);
    const formIsValid = emailIsValid && passwordIsValid;
    if (!formIsValid) {
      if (!emailIsValid) {
        setShowEmailError(true);
      }
      if (!passwordIsValid) {
        setShowPasswordError(true);
      }
      return;
    }

    resetAllState();
    alert("Form Submitted Successfully");
  };

  return (
    <form className={styles["form-container"]} onSubmit={formSubmitHandler}>
      <h2 className={styles["form-heading"]}>Create an account</h2>
      <div className={styles["email-container"]}>
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          value={email}
          onChange={emailChangeHandler}
          className={showEmailError ? `${styles["error"]}` : ""}
          id="email"
          onInvalid={emailInvalidHandler}
        />
        {showEmailError && <Tooltip>Please add valid email address</Tooltip>}
      </div>
      <div className={styles["dob-container"]}>
        <label>
          Date of birth <small>(Optional)</small>
        </label>
        <div className={styles["dob-input-container"]}>
          <div>
            <label htmlFor="date">
              <small>Date</small>
            </label>
            <select value={date} id="date" onChange={dateChangeHandler}>
              {dates.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="month">
              <small>Month</small>
            </label>
            <select id="month" value={month} onChange={monthChangeHandler}>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="year">
              <small>Year</small>
            </label>
            <select id="year" value={year} onChange={yearChangeHandler}>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={styles["password-container"]}>
        <label htmlFor="password">Choose a strong password</label>
        <input
          value={password}
          onChange={passwordChangeHandler}
          type="password"
          id="password"
          className={showPasswordError ? `${styles["error"]}` : ""}
          onInvalid={passwordInValidHandler}
        />
        {showPasswordError && (
          <Tooltip>Password must have a numeric value</Tooltip>
        )}
      </div>
      <div className={styles["identity-container"]}>
        <label>Are you an agency or individual?</label>
        <div className={styles["identity-radio-container"]}>
          <div>
            <input
              type="radio"
              name="identity"
              id="individual"
              checked={identity === "individual"}
              onChange={identityChangeHandler}
            />
            <label htmlFor="individual">Individual</label>
          </div>

          <div>
            <input
              type="radio"
              name="identity"
              id="agency"
              checked={identity === "agency"}
              onChange={identityChangeHandler}
            />
            <label htmlFor="agency">Agency</label>
          </div>
        </div>
      </div>
      <button className={styles["form-submit-btn"]} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
