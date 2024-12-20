import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Fragment } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import logo from "../../assets/logo2.png";
import "./navbar.scss";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);
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
          {/* <a
            href="https://github.com/shikhargupta02"
            target="_blank"
            rel="noopener noreferrer"
            className="fork-btn"
          >
            <div className="fork-btn-inner">
              <CgGitFork className="icon fork-icon" />
              <AiFillStar className="icon star-icon" />
            </div>
          </a> */}
        </ul>

        {/*mobile menu*/}
        <div>
          <ul
            className={`hamburger-menu ${nav ? "display-hamburger-nav" : ""}  `}
          >
            {nav && (
              <>
                <Link to="/">
                  <li
                    className="menu-items-home"
                    onClick={() => {
                      setTimeout(() => {
                        setNav(false);
                      }, 500);
                    }}
                  >
                    <AiOutlineHome height={"25px"} />
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li
                    className="menu-items-about"
                    onClick={() => {
                      setTimeout(() => {
                        setNav(false);
                      }, 500);
                    }}
                  >
                    <IoPersonOutline height={"25px"} />
                    About
                  </li>
                </Link>
                <Link to="/work">
                  <li
                    className="menu-items-work"
                    onClick={() => {
                      setTimeout(() => {
                        setNav(false);
                      }, 500);
                    }}
                  >
                    <HiOutlinePresentationChartLine height={"25px"} />
                    Work
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
        <div className={`hamburger ${nav ? "open" : ""}`} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};
export default Navbar;
