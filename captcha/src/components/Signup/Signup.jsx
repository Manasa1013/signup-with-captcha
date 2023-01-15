import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/fontawesome-free-solid";

export function Signup({ showToastMessage }) {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  function createCaptcha() {
    let captchaString = "";
    for (let i = 0; i < 6; i++) {
      let captchaChar = "";
      captchaChar = Math.ceil(Math.random() * (26 - 0) + 0).toString(36);
      captchaString = captchaString + captchaChar;
    }

    console.log(captchaString);
    return captchaString;
  }
  function setfieldValuesHandler(fieldName, targetValue) {
    setFields((prev) => ({ ...prev, fieldName: targetValue }));
  }
  useEffect(() => {
    setCaptcha(() => createCaptcha());
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <section className="flex-container">
        <div className="field-box">
          <input
            type="text"
            placeholder="First Name"
            className="field-text"
            value={fields.firstName}
            name="first-name"
            onChange={(e) => {
              console.log(e.target.value);
              setFields((prev) => ({ ...prev, firstName: e.target.value }));
            }}
            onBlur={() => {
              console.log("blurred first name");
            }}
          />
          <p className="error-text"></p>
        </div>
        <div className="field-box">
          <input
            type="text"
            placeholder="Last Name"
            className="field-text"
            value={fields.lastName}
            name="last-name"
            onChange={(e) => {
              console.log(e.target.value);
              setFields((prev) => ({ ...prev, lastName: e.target.value }));
            }}
          />
          <p className="error-text"></p>
        </div>
        <div className="field-box">
          <input
            type="email"
            placeholder="Email"
            className="field-text"
            value={fields.email}
            name="email"
            onChange={(e) => {
              console.log(e.target.value);
              setFields((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <p className="error-text"></p>
        </div>
        <div className="field-box" style={{ display: "inline" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="field-text"
            value={fields.password}
            name="password"
            id="password"
            onChange={(e) => {
              console.log(e.target.value);
              setFields((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
          <button
            type="button"
            className="icon--button"
            id="eye-icon"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
          <p className="error-text"></p>
        </div>
        <div className="captcha-container">
          <output className="captcha--text">{captcha}</output>
          {/* <canvas width="70" height="15" style={{ border: "1px solid green" }}>
            {" "}
          </canvas> */}
          <button
            type="button"
            className="icon--button"
            onClick={() => setCaptcha(() => createCaptcha())}
          >
            <FontAwesomeIcon icon="fa-solid fa-redo fa-2x" />
          </button>
          <input
            className="captcha-answer--text"
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setCaptchaInput(() => e.target.value);
            }}
            placeholder="Enter captcha text"
            value={!captchaInput ? "" : captchaInput}
          />
          <button
            className="captcha--submit"
            type="submit"
            onClick={() => {
              if (!captchaInput) showToastMessage("enter text to match");
              else if (captcha === captchaInput) {
                console.log("same Input");
                showToastMessage("captcha Matched");
              } else {
                console.log("different Input");
                showToastMessage("captcha not matched");
              }
            }}
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
}
