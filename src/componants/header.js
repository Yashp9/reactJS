import { LOGO } from "../utils/constant";

const Header = () => {
  return (
    <div className="head-section">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO}
        />
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;