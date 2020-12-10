import React, { useState, useEffect } from "react";
import "./LoginForm.scss";
import { userLogin } from "../../logic/user";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const LoginForm = () => {
  let history = useHistory();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (user && user.admin === undefined) {
      return history.push("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, error } = await userLogin(email, password);
    if (success) {
      setLoginError("");
    } else {
      setLoginError(error);
    }
  };

  return (
    <div className="login-container">
      <form>
        <label className="login-label">Login</label>
        <div className="login-field-container">
          <input
            name="email"
            // hasError={formError.email}
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            // placeholderError="GENERIC_EMAIL"
            placeholder="Email"
          />
        </div>
        <div className="login-field-container">
          <input
            name="password"
            type="password"
            // hasError={formError.password}
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            // placeholderError="GENERIC_PASSWORD"
            placeholder="Password"
          />
        </div>
        <div className="login-error">
          {loginError !== "" && <h3>LOGIN_ERROR</h3>}
        </div>
        <div className="login-field-container button-container">
          <button className="button-submit" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
