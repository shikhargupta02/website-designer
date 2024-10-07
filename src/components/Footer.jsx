import React from "react";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="bg-[#000000] px-7 h-8 w-full text-[#ffffff] flex justify-center items-center align-middle">
      Created By Shikhar Gupta | Copyright <CgCopyright size={20} /> 2022
    </div>
  );
};
export default Footer;
