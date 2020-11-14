import React, { useState } from "react";

import "./LoginForm.scss";

const LoginForm = () => {
  const [loginError, setLoginError] = useState("");

  return (
    <div className="login-container">
      <form>
        <label className="login-label">Login</label>
        <div className="login-field-container">
          <input
            inputName="email"
            // hasError={formError.email}
            // value={formData.email}
            // onChange={handleInputChange}
            placeholderError="GENERIC_EMAIL"
            placeholder="Email"
          />
        </div>
        <div className="login-field-container">
          <input
            inputName="password"
            type="password"
            // hasError={formError.password}
            // value={formData.password}
            // onChange={handleInputChange}
            placeholderError="GENERIC_PASSWORD"
            placeholder="Password"
          />
        </div>
        <div className="login-error">{loginError && <h3>LOGIN_ERROR</h3>}</div>
        <div className="login-field-container button-container">
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
