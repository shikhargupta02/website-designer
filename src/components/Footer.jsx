import React from "react";
import { CgCopyright } from "react-icons/cg";
import "./footer.scss";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      This Portfolio Created By Shikhar Gupta | Copyright{" "}
      <div className="footer-copyright">
        <CgCopyright size={20} /> {currentYear}
      </div>
    </div>
  );
};
export default Footer;
