import { LOGO } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [buttonString, setbuttonString] = useState("LOGIN");
  const ChangeString =()=>{
    buttonString=="LOGIN"?setbuttonString("LOGOUT"):setbuttonString("LOGIN");
  }
  return (
    <div className="head-section">
      <div className="logo-container">
        <img className="logo" src={LOGO} />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
          <button className="eventBtn" style={{ marginLeft: "40px" }} onClick={ChangeString}>
            {buttonString}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
