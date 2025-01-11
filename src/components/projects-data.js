import {
  FaJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaAngular,
  FaVuejs,
  FaSass,
  FaBootstrap,
  FaDocker,
  FaAws,
  FaGit,
  FaGithub,
  FaGitlab,
  FaFigma,
  FaWordpress,
  FaCloud,
  FaSearch,
  FaPaintBrush,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiCsharp,
  SiPhp,
  SiRuby,
  SiGo,
  SiSwift,
  SiTypescript,
  SiKotlin,
  SiTailwindcss,
  SiJquery,
  SiExpress,
  SiDjango,
  SiFlask,
  SiRubyonrails,
  SiSpring,
  SiDotnet,
  SiLaravel,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiFirebase,
  SiRedis,
  SiOracle,
  SiMicrosoftsqlserver,
  SiKubernetes,
  SiMicrosoftazure,
  SiGooglecloud,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiFlutter,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiApachespark,
  SiTableau,
  SiPowerbi,
  SiVisualstudiocode,
  SiIntellijidea,
  SiPostman,
  SiAdobexd,
  SiJira,
  SiTrello,
  SiNotion,
  SiHackthebox,
  SiOwasp,
  SiKalilinux,
  // SiNessus,
  SiWireshark,
  SiScrumalliance,
  SiJest,
  SiSelenium,
} from "react-icons/si";
import expense from "../assets/expense-tracker.png";
import food from "../assets/food-app.png";
import stock from "../assets/stock-analyser.png";
import { GiShield } from "react-icons/gi";
import { AiOutlineCloudSync } from "react-icons/ai";

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

export const skillsDropdown = [
  // Programming Languages
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C#", icon: <SiCsharp /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Ruby", icon: <SiRuby /> },
  { name: "Go", icon: <SiGo /> },
  { name: "Swift", icon: <SiSwift /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "R", icon: "R" }, // No icon available

  // Frontend Development
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "Vue.js", icon: <FaVuejs /> },
  { name: "SASS/SCSS", icon: <FaSass /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "jQuery", icon: <SiJquery /> },

  // Backend Development
  { name: "Node.js", icon: "Node.js" }, // No icon available
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Ruby on Rails", icon: <SiRubyonrails /> },
  { name: "Spring Boot", icon: <SiSpring /> },
  { name: "ASP.NET", icon: <SiDotnet /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "GraphQL", icon: <SiGraphql /> },

  // Databases
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Oracle DB", icon: <SiOracle /> },
  { name: "Microsoft SQL Server", icon: <SiMicrosoftsqlserver /> },

  // DevOps & Cloud
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Azure", icon: <SiMicrosoftazure /> },
  { name: "Google Cloud Platform", icon: <SiGooglecloud /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Terraform", icon: <SiTerraform /> },
  { name: "Ansible", icon: <SiAnsible /> },
  { name: "CI/CD Pipelines", icon: <AiOutlineCloudSync /> },

  // Mobile Development
  { name: "React Native", icon: <FaReact /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Swift (iOS)", icon: <SiSwift /> },
  { name: "Kotlin (Android)", icon: <SiKotlin /> },
  { name: "Xamarin", icon: "Xamarin" }, // No icon available
  { name: "Ionic", icon: "Ionic" }, // No icon available

  // Data Science & Machine Learning
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "PyTorch", icon: <SiPytorch /> },
  { name: "Keras", icon: <SiKeras /> },
  { name: "Matplotlib", icon: "Matplotlib" }, // No icon available
  { name: "Seaborn", icon: "Seaborn" }, // No icon available
  { name: "Apache Spark", icon: <SiApachespark /> },
  { name: "Tableau", icon: <SiTableau /> },
  { name: "Power BI", icon: <SiPowerbi /> },

  // Version Control
  { name: "Git", icon: <FaGit /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "GitLab", icon: <FaGitlab /> },
  { name: "Bitbucket", icon: "Bitbucket" }, // No icon available

  // Tools & Platforms
  { name: "VS Code", icon: <SiVisualstudiocode /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Adobe XD", icon: <SiAdobexd /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Trello", icon: <SiTrello /> },
  { name: "Notion", icon: <SiNotion /> },

  // Cybersecurity
  { name: "Ethical Hacking", icon: <SiHackthebox /> },
  { name: "Penetration Testing", icon: <GiShield /> },
  { name: "OWASP", icon: <SiOwasp /> },
  { name: "Kali Linux", icon: <SiKalilinux /> },
  // { name: "Nessus", icon: <SiNessus /> },
  { name: "Wireshark", icon: <SiWireshark /> },

  // Others
  { name: "REST APIs", icon: <FaCloud /> },
  { name: "GraphQL APIs", icon: <SiGraphql /> },
  { name: "WebSockets", icon: "WebSockets" }, // No icon available
  { name: "Agile Methodology", icon: <SiScrumalliance /> },
  { name: "Unit Testing (Jest)", icon: <SiJest /> },
  { name: "End-to-End Testing (Selenium)", icon: <SiSelenium /> },
  { name: "UI/UX Design", icon: <FaPaintBrush /> },
  { name: "SEO", icon: <FaSearch /> },
  { name: "WordPress", icon: <FaWordpress /> },
];
