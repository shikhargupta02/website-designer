import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/logo2.png";
import "./navbar.scss";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.href = `https://climate-adapt.eea.europa.eu/en/about/climate-adapt-10-case-studies-online.pdf/@@download/file`;
    link.target = "_blank";
    link.download = "MyResume.pdf";
    link.click();
  };
  return (
    <>
      <div className="nav-wrapper">
        <div>
          <img src={logo} alt="my logo" style={{ width: "75px" }} />
        </div>

        <ul className="nav-items">
          <li className="nav-item-home">
            {" "}
            <Link to="/">Home</Link>
          </li>
          {/* <li className="nav-item-about">About</li> */}
          <li className="nav-item-about">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item-work">
            {" "}
            <Link to="/work">Work</Link>
          </li>
          <li className="nav-item-resume" onClick={handleResumeClick}>
            Resume
          </li>
        </ul>

        {/*mobile menu*/}
        <div>
          <ul className={!nav ? "display-nav" : "hamburger-menu"}>
            <li className="menu-items-home">Home</li>
            <li className="menu-items-about">About</li>
            <li className="menu-items-work">Work</li>
            <li className="menu-items-resume">Resume</li>
          </ul>
        </div>

        {/*hamburger*/}
        <div onClick={handleClick} className="hamburger-icon">
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>
      </div>
    </>
  );
};
export default Navbar;
