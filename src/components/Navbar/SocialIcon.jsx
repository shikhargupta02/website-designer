import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "./social-icons.scss";

export const SocialIcon = () => {
  return (
    <div>
      <div className="social-icons">
        {/*social icons*/}
        <ul>
          <li className="icon-li">
            <a
              href="https://www.linkedin.com/in/shikhar-gupta-4a8231172/"
              className="linkedIn"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="icon-gi">
            <a href="https://github.com/shikhargupta02" className="github">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="icon-in">
            <a
              href="https://www.instagram.com/accounts/login/?next=/gshikhar38/"
              className="insta"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="icon-mail">
            <a href="mailto: gshikhar38@gmail.com" className="mail">
              Mail <HiMail size={30} />
            </a>
          </li>
          <li className="icon-res">
            <a
              href="https://drive.google.com/file/d/1MeMmeIO3rKnMRSDT3c-SQhTxNK07jDgb/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="resume"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
