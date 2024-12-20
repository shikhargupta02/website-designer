import expense from "../assets/expense-tracker.png";
import food from "../assets/food-app.png";
import stock from "../assets/stock-analyser.png";
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
        "A simple and responsive frontend app built with React and SCSS to help users track and manage daily expenses efficiently. It features expense categorization, dynamic updates, and an intuitive interface for better financial planning.",
      img: expense,
      projectLink: "https://myexpenses.netlify.app",
      gitLink: "https://github.com/shikhargupta02/React-apps-Expense-tracker",
    },
    {
      title: "Market Analyser",
      description:
        "A responsive frontend application built with React and Chart.js to visualize stock performance. It displays dynamic, interactive charts with real-time data, enabling users to analyze trends and make informed decisions effortlessly.",
      img: stock,
      projectLink: "https://my-stocks-analyser.netlify.app",
      gitLink: "https://github.com/shikhargupta02/React-apps-Stock-analyser",
    },
    {
      title: "Insta Food",
      description:
        "A frontend-only application built with React to simulate a food delivery platform. Users can browse food items, add them to the cart, and view their selections with a dynamic and responsive interface. It showcases features like state management and interactive UI design.",
      img: food,
      projectLink: "https://my-react-order.netlify.app",
      gitLink: "https://github.com/shikhargupta02/React-apps-Food-ordering",
    },
  ];
};
export const skillIcons = (iconSize) => {
  return [
    <SiReact size={iconSize} />,
    <SiTypescript size={iconSize} />,
    <SiJavascript size={iconSize} />,
    <SiCss3 size={iconSize} />,
    <SiHtml5 size={iconSize} />,
    <CgCPlusPlus size={iconSize} />,
    <FaPython size={iconSize} />,
    // <SiMysql size={80} />,
  ];
};
