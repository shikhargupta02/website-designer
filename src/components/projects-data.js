import image from "../assets/sample-project.png";
import { FaPython } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  //   SiMysql,
  SiTypescript,
} from "react-icons/si";
export const getProjectData = () => {
  return [
    {
      title: "Expense Tracker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reiciendis sunt corrupti sapiente magni repudiandae fugaveniam aliquam pariatur cupiditate velit nobis laborum saepe vero atque eaque delectus, recusandae at?",
      img: image,
      projectLink: "https://myexpenses.netlify.app",
      gitLink: "https://github.com/shikhargupta02/React-apps-Expense-tracker",
    },
    {
      title: "Market Analyser",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reiciendis sunt corrupti sapiente magni repudiandae fugaveniam aliquam pariatur cupiditate velit nobis laborum saepe vero atque eaque delectus, recusandae at?",
      img: image,
      projectLink: "https://my-stocks-analyser.netlify.app",
      gitLink: "https://github.com/shikhargupta02/React-apps-Stock-analyser",
    },
    {
      title: "Insta Food",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reiciendis sunt corrupti sapiente magni repudiandae fugaveniam aliquam pariatur cupiditate velit nobis laborum saepe vero atque eaque delectus, recusandae at?",
      img: image,
      projectLink: "https://my-react-order.netlify.app",
      gitLink: "https://github.com/shikhargupta02/React-apps-Food-ordering",
    },
    {
      title: "Expense Tracker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reiciendis sunt corrupti sapiente magni repudiandae fugaveniam aliquam pariatur cupiditate velit nobis laborum saepe vero atque eaque delectus, recusandae at?",
      img: image,
      projectLink: "https://myexpenses.netlify.app",
      gitLink: "https://github.com/shikhargupta02/React-apps-Expense-tracker",
    },
    {
      title: "Expense Tracker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reiciendis sunt corrupti sapiente magni repudiandae fugaveniam aliquam pariatur cupiditate velit nobis laborum saepe vero atque eaque delectus, recusandae at?",
      img: image,
      projectLink: "https://myexpenses.netlify.app",
      gitLink: "https://github.com/shikhargupta02/React-apps-Expense-tracker",
    },
  ];
};
export const skillIcons = () => {
  return [
    <SiReact size={80} />,
    <SiTypescript size={80} />,
    <SiJavascript size={80} />,
    <SiCss3 size={80} />,
    <SiHtml5 size={80} />,
    <CgCPlusPlus size={80} />,
    <FaPython size={80} />,
    // <SiMysql size={80} />,
  ];
};
