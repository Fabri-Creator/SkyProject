import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import SecondaryLayout from "../components/Layout/SecondaryLayout/SecondaryLayout";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm/";

import "./pages.scss";

const UserLogin = () => {
  const user = useSelector((state) => state.user);
  let history = useHistory();

  useEffect(() => {
    if (user && user.admin === true) {
      return history.push("/admin/login");
    }
  }, [user]);

  return (
    <SecondaryLayout>
      <LoginForm />
      <SignupForm />
    </SecondaryLayout>
  );
};

export default UserLogin;
