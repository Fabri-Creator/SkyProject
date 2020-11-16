import SecondaryLayout from "../components/Layout/SecondaryLayout/SecondaryLayout";
import "./pages.scss";

const UserSucces = () => {
  return (
    <SecondaryLayout>
      <div className="user-succes-container">
        <h3>Bienvenido UserName</h3>
        <h4>Descubre todos los productos que tenemos para ti!</h4>
      </div>
    </SecondaryLayout>
  );
};

export default UserSucces;

/* <h3>{`Bienvenido ${name}`}</h3> */
