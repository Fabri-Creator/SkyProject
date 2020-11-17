import { Link, useHistory } from "react-router-dom";
import { userLogout } from "../../../logic/user";
import { useSelector } from "react-redux";

import "./SecondaryLayout.scss";

const SecondaryLayout = ({ children }) => {
  let history = useHistory();
  const user = useSelector((state) => state.user);
  console.log("SecondLayout =>", user);

  const handlerLogout = () => {
    userLogout();
  };

  return (
    <div className="second-layout-container">
      <div className="header-section">
        <div className="header-section-left">
          <div
            onClick={() => history.goBack()}
            className="fas fa-chevron-circle-left"
          ></div>
        </div>
        <div className="header-section-right">
          {user ? (
            <>
              <div className="header-section-right-user">{user.name}</div>
              <span
                onClick={handlerLogout}
                className="header-section-right-user-logout"
              >
                Logout
              </span>
              {user.admin ? (
                <Link to="/admin/login" className="fas fa-toolbox"></Link>
              ) : (
                ""
              )}
            </>
          ) : (
            <div className="header-section-right-user">No user</div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
export default SecondaryLayout;
