import SecondaryLayout from "../components/Layout/SecondaryLayout/SecondaryLayout";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm/";
import "./pages.scss";

const UserLogin = () => {
  return (
    <SecondaryLayout>
      <LoginForm />
      <SignupForm />
    </SecondaryLayout>
  );
};

export default UserLogin;
