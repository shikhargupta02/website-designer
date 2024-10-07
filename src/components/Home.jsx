import Animation from "./Animation";
import { ImGithub } from "react-icons/im";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import "./home.scss";

const Home = () => {
  return (
    <div name="home" className="home-page-wrapper">
      <div className="pt-64 max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-[#54dde4]">
        <div className=" text-3xl">
          Hi there!<span className="animate-waving-hand ">👋🏻</span>
        </div>
        <h1 className="text-[#d1dcff] text-4xl sm:text-7xl font-bold">
          Shikhar Gupta
        </h1>
        <p className="max-w-[700px] text-[#d1dcff] py-4 sm:text-[25px] z-[2]">
          I'm a <span className="text-[#54dde4]">Frontend developer</span> and a
          Fullstack developer enthusiast. I like to learn new technologies and
          build amazing stuff with it.{" "}
        </p>
        <div className="z-[1] w-2/5 absolute right-32 top-16">
          <Animation />
        </div>
      </div>
      <div className="pt-56 pb-24 max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-[#54dde4]">
        <h1 className=" px-5 text-[#d1dcff] text-4xl sm:text-5xl font-semibold">
          Let me <span className="font-bold text-[#54dde4]">Introduce</span>{" "}
          myself
        </h1>
        <br />
        <p className="px-5 text-[#d1dcff] text-2xl">
          I fell in love with programming and i have at least learnt something.
          I think... <br /> <br />I am fluent in classics like
          <span className="text-[#54dde4]"> C++, Javascript.</span>
          <br />
          <br />
          My field of interest's are building new
          <span className="text-[#54dde4]">
            {" "}
            Web Technologies and Products{" "}
          </span>
          and I intend to become a
          {/* <span className="text-[#54dde4]"> Deep Learning</span> and */}
          <span className="text-[#54dde4]"> Fullstack Developer.</span>
          <br />
          <br />
          Whenever possible, I also apply my passion for developing products
          with <span className="text-[#54dde4]"> Typescript</span> and modern
          library and frameworks like
          <span className="text-[#54dde4]"> React.js</span> and
          <span className="text-[#54dde4]"> Next.js</span>
        </p>
      </div>
      <div className="lg:hidden text-[#ffffff] text-2xl pt-12 pb-24 w-full px-4 flex flex-col h-full">
        <div className="text-4xl mx-auto font-bold ">FIND ME ON </div>
        <div className="pt-4 mx-auto">
          Feel free to <span className="text-[#54dde4]">connect</span> with me
        </div>
        <div className="flex flex-row mx-auto mt-8">
          <a href="https://github.com/shikhargupta02">
            <div className="h-14 w-15 bg-[#ffffff] rounded-full mx-8 ">
              <div className="px-3 py-3">
                <ImGithub color="#192545" size={30} />
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/shikhar-gupta-4a8231172/">
            <div className="h-14 w-15 bg-[#ffffff] rounded-full mx-8 ">
              <div className="px-3 py-3">
                <AiFillLinkedin color="#192545" size={30} />
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/accounts/login/?next=/gshikhar38/">
            <div className="h-14 w-15 bg-[#ffffff] rounded-full mx-8 ">
              <div className="px-3 py-3">
                <AiFillInstagram color="#192545" size={30} />
              </div>
            </div>
          </a>
          <a href="mailto: gshikhar38@gmail.com">
            <div className="h-14 w-15 bg-[#ffffff] rounded-full mx-8 ">
              <div className="px-3 py-3">
                <MdEmail color="#192545" size={30} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
