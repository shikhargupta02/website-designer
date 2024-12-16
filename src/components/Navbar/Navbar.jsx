import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { Fragment } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import logo from "../../assets/logo2.png";
import "./navbar.scss";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  // const handleResumeClick = () => {
  //   const link = document.createElement("a");
  //   link.href = `https://climate-adapt.eea.europa.eu/en/about/climate-adapt-10-case-studies-online.pdf/@@download/file`;
  //   link.target = "_blank";
  //   link.download = "MyResume.pdf";
  //   link.click();
  // };
  return (
    <>
      <div className="nav-wrapper">
        <div style={{ paddingLeft: "4%" }}>
          <img src={logo} alt="my logo" style={{ width: "75px" }} />
        </div>

        <ul className="nav-items">
          <Link to="/">
            <li className="nav-item-home">
              <AiOutlineHome height={"25px"} />
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="nav-item-about">
              <IoPersonOutline height={"25px"} />
              About
            </li>
          </Link>
          <Link to="/work">
            <li className="nav-item-work">
              <HiOutlinePresentationChartLine height={"25px"} />
              Work
            </li>
          </Link>
          {/* <li className="nav-item-resume">
            <Link to="/resume">Resume</Link>
          </li> */}
        </ul>

        {/*mobile menu*/}
        <div>
          <ul className={!nav ? "display-nav" : "hamburger-menu"}>
            <li className="menu-items-home">Home</li>
            <li className="menu-items-about">About</li>
            <li className="menu-items-work">Work</li>
            {/* <li className="menu-items-resume">Resume</li> */}
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
