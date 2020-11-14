import "./SignupForm.scss";
import React, { useState } from "react";

import "./SignupForm.scss";

const SignupForm = () => {
  const [SigninError, setLoginError] = useState("");
  return (
    <div className="Signin-container">
      <form>
        <label className="Signin-label">Signin</label>
        <div className="signin-field-container">
          <input
            inputName="name"
            // hasError={formError.email}
            // value={formData.email}
            // onChange={handleInputChange}
            placeholderError="GENERIC_Name"
            placeholder="Name"
          />
        </div>
        <div className="Signin-field-container">
          <input
            inputName="email"
            // hasError={formError.email}
            // value={formData.email}
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
            // value={formData.password}
            // onChange={handleInputChange}
            placeholderError="GENERIC_PASSWORD"
            placeholder="Password"
          />
        </div>
        <div className="Signin-error">
          {SigninError && <h3>Signin_ERROR</h3>}
        </div>
        <div className="Signin-field-container button-container">
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
