import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.scss";

const Header = () => {
  const user = useSelector((state) => state.user);
  console.log("User header =>", user);

  return (
    <div className="main-header">
      <div className="sex-container">
        <Link to="/" className="sex-container-text">
          Mujer
        </Link>
        <Link to="/" className="sex-container-text">
          Hombre
        </Link>
      </div>
      <div className="user-shop-container">
        {user ? (
          <div className="user-sesion-container">{user.name}</div>
        ) : (
          <div className="user-sesion-container">No user</div>
        )}
        <Link to="/user/login" className="far fa-user"></Link>
        <Link
          to="/admin/new-product"
          id="shop-icon"
          className="fas fa-shopping-basket"
        ></Link>
      </div>
    </div>
  );
};

export default Header;
