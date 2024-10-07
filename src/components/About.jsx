import React from "react";
import Card from "./Card/Card";
import { skillIcons } from "./projects-data";
import "./about.scss";
const About = () => {
  const mySkills = skillIcons();
  return (
    <div className=" text-[#d1dcff] pl-24 pb-10 w-full h-full bg-[#0a192f]">
      <div className="pt-24 flex flex-row">
        <div>
          <div className="pl-80 text-4xl sm:text-5xl font-semibold">
            Know Who <span className="text-[#54dde4] font-bold"> I'm </span>
            <br />
          </div>
          <div className="pl-28 text-xl font-medium pt-8">
            Hi Everyone, I am{" "}
            <span className="text-[#54dde4]">Shikhar Gupta</span> from
            <span className="text-[#54dde4]"> Jammu & Kashmir, India.</span>
          </div>
          <div className="pl-28 text-xl font-medium">
            I am an undergraduate pursuing B.tech in Electrical Engineering at
            PEC.
          </div>
          <div className="pl-28 pt-14 text-xl font-medium">
            {" "}
            Apart from coding, some other activities that I love to do!
            <div className="pl-12 pt-8">
              <ul className="list-disc">
                <li>Playing Games</li>
                <li>Travelling</li>
                <li>Enjoying Songs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 items-center">
        <div className="mx-auto text-4xl font-semibold text-center">
          My <span className="text-[#54dde4] ">Skills</span>
        </div>
        <div className="skills-icons-wrapper">
          {mySkills.map((item) => {
            return <Card icon={item} />;
          })}
        </div>
        {/* <div className="flex mt-16 pl-12 w-11/12 justify-between">
          <div className="relative px-8 hover:scale-115 duration-300">
            <div className="absolute h-36 w-52 bg-[#54dde4] rounded-lg blur-sm"></div>
            <div className="h-36 w-52 relative rounded-lg inset-0 bg-[#0a192f] border border-[#54dde4]">
              {" "}
              <div className="mt-8 ml-14">
                <FaPython size={80} />
              </div>
            </div>
          </div>
          <div className="relative px-8 hover:scale-115 duration-300">
            <div className="absolute h-36 w-52 bg-[#54dde4] rounded-lg blur-sm"></div>
            <div className="h-36 w-52 relative rounded-lg inset-0 bg-[#0a192f] border border-[#54dde4]">
              {" "}
              <div className="mt-8 ml-14">
                <SiReact size={80} />
              </div>
            </div>
          </div>
          <div className="relative px-8 hover:scale-115 duration-300">
            <div className="absolute h-36 w-52 bg-[#54dde4] rounded-lg blur-sm"></div>
            <div className="h-36 w-52 relative rounded-lg inset-0 bg-[#0a192f] border border-[#54dde4]">
              {" "}
              <div className="mt-8 ml-14">
                <SiMysql size={80} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex mt-12 pt-8 ml-52 w-2/3 justify-between">
          <div className="relative px-8 hover:scale-115 duration-300">
            <div className="absolute h-36 w-52 bg-[#54dde4] rounded-lg blur-sm"></div>
            <div className="h-36 w-52 relative rounded-lg inset-0 bg-[#0a192f] border border-[#54dde4]">
              {" "}
              <div className="mt-8 ml-14">
                <SiHtml5 size={80} />
              </div>
            </div>
          </div>
          <div className="relative px-8 hover:scale-115 duration-300">
            <div className="absolute h-36 w-52 bg-[#54dde4] rounded-lg blur-sm"></div>
            <div className="h-36 w-52 relative rounded-lg inset-0 bg-[#0a192f] border border-[#54dde4]">
              {" "}
              <div className="mt-8 ml-14">
                <SiJavascript size={80} />
              </div>
            </div>
          </div>
          <div className="relative px-8 hover:scale-115 duration-300">
            <div className="absolute h-36 w-52 bg-[#54dde4] rounded-lg blur-sm"></div>
            <div className="h-36 w-52 relative rounded-lg inset-0 bg-[#0a192f] border border-[#54dde4]">
              {" "}
              <div className="mt-8 ml-14">
                <SiCss3 size={80} />
              </div>
            </div>
          </div>
          <div className="relative px-8 hover:scale-115 duration-300">
            <div className="absolute h-36 w-52 bg-[#54dde4] rounded-lg blur-sm"></div>
            <div className="h-36 w-52 relative rounded-lg inset-0 bg-[#0a192f] border border-[#54dde4]">
              {" "}
              <div className="mt-8 ml-14">
                <SiTypescript size={80} />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default About;
