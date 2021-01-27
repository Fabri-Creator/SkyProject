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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, error } = await userSignup(email, password, name);
    if (success) {
      history.push("/");
    } else {
      console.log("Singuo ERROR =>", error);
    }
  };

  return (
    <div className="Signin-container">
      <form>
        <label className="Signin-label">Sign up</label>
        <div className="signin-field-container">
          <input
            name="name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            placeholder="Name"
          />
        </div>
        <div className="Signin-field-container">
          <input
            name="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            placeholder="Email"
          />
        </div>
        <div className="Signin-field-container">
          <input
            name="password"
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            placeholder="Password"
          />
        </div>
        <div className="Signin-field-container button-container">
          <button className="button-submit" onClick={handleSubmit}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
