import React, { useState } from "react";
import { userLogin } from "../../logic/user";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../../redux/actions/userActions";
import "./LoginForm.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, error } = await userLogin(email, password);
    dispatch(setUserProfile(email));
    if (success) {
      console.log(user);
      // history.push("/user/login/succes")
      //  si user.admin = true go new proyect
      //  si user.admin = false go welcome;
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
            inputName="email"
            // hasError={formError.email}
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            placeholderError="GENERIC_EMAIL"
            placeholder="Email"
          />
        </div>
        <div className="login-field-container">
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
        <div className="login-error">
          {loginError !== "" && <h3>LOGIN_ERROR</h3>}
        </div>
        <div className="login-field-container button-container">
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
