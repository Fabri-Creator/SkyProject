import "./Footer.scss";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="links-container">
        <ul className="info-list">
          <li className="info-list-links">About</li>
          <li className="info-list-links">Contact us</li>
          <li className="info-list-links">Jobs</li>
        </ul>
        <ul className="info-list">
          <li className="info-list-links">Industry</li>
          <li className="info-list-links">Community</li>
          <li className="info-list-links">Trends</li>
        </ul>
        <ul className="info-list">
          <li className="info-list-links">Support</li>
          <li className="info-list-links">Free Movile App</li>
          <li className="info-list-links">2020</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
