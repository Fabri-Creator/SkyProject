import "./SignupForm.scss";
import { useHistory } from "react-router-dom";
import { userSignup } from "../../logic/user";
import React, { useState } from "react";

import "./SignupForm.scss";

const SignupForm = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [nameError, setNameError] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [signupError, setSignupError] = useState("");
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   name: "",
  // });
  // const [formError, setFormError] = useState({ email: false, password: false });
  // const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setNameError(false);
    // setEmailError(false);
    // setPasswordError(false);
    // setSignupError("");

    // let error = false;
    // if (!name) {
    //   error = true;
    //   setNameError(true);
    // }

    // if (!email) {
    //   error = true;
    //   setEmailError(true);
    // }

    // if (!password) {
    //   error = true;
    //   setPasswordError(true);
    // }

    const { success, error } = await userSignup(email, password, name);
    if (success) {
      history.push("/user/login/succes");
    } else {
      // setSignupError(error);
    }
  };

  // const handleInputChange = (event) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   const newFormData = { ...formData };s
  //   debugger;
  //   newFormData[name] = value;
  //   setFormData(newFormData);
  // };

  return (
    <div className="Signin-container">
      <form>
        <label className="Signin-label">Signin</label>
        <div className="signin-field-container">
          <input
            inputName="name"
            // hasError={formError.email}
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            // onChange={handleInputChange}
            placeholderError="GENERIC_Name"
            placeholder="Name"
          />
        </div>
        <div className="Signin-field-container">
          <input
            inputName="email"
            // hasError={formError.email}
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            // onChange={handleInputChange}
            placeholderError="GENERIC_EMAIL"
            placeholder="Email"
          />
        </div>
        <div className="Signin-field-container">
          <input
            inputName="password"
            type="password"
            // hasError={formError.password}
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            placeholderError="GENERIC_PASSWORD"
            placeholder="Password"
          />
        </div>
        {/* <div className="Signin-error">
          {signupError && <h3>Signun_ERROR</h3>}
        </div> */}
        <div className="Signin-field-container button-container">
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
