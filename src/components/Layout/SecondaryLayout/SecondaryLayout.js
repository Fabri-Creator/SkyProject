import { Link } from "react-router-dom";

import "./SecondaryLayout.scss";

const SecondaryLayout = ({ children }) => {
  return (
    <div className="second-layout-container">
      <div className="goBack">
        <Link to="/" className="fas fa-chevron-circle-left"></Link>
      </div>
      <Link to="/admin/login" className="fas fa-toolbox"></Link>
      {children}
    </div>
  );
};
export default SecondaryLayout;
