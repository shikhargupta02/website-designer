import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "./social-icons.scss";
import { useSelector } from "react-redux";
import { selectForm } from "../../redux/formSlice";

export const SocialIcon = () => {
  const form = useSelector(selectForm);

  return (
    <div>
      <div className="social-icons">
        {/*social icons*/}
        <ul>
          <li className="icon-li">
            <a href={form.linkedinLink} className="linkedIn">
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          {form.githubLink && (
            <li className="icon-gi">
              <a
                href={`https://github.com/${form.githubLink}`}
                className="github"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
          )}
          <li className="icon-in">
            <a
              href={`https://www.instagram.com/accounts/login/?next=/${form.instaLink}/`}
              className="insta"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="icon-mail">
            <a href={`mailto: ${form.mailId}`} className="mail">
              Mail <HiMail size={30} />
            </a>
          </li>
          <li className="icon-res">
            <a
              href={form.resumeLink}
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
