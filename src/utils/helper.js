import axios from "axios";

export const initialProjectData = {
  projectName: "",
  githubLink: "",
  projectLink: "",
  projectDescription: "",
  image: null,
};

export const initialFormRefData = {
  home: {
    name: "",
    description: "",
    shortIntro: "",
  },
  about: {
    aboutYourself: "",
    hobbies: [""],
    skills: [],
  },
  projects: [initialProjectData],
  githubLink: "",
  instaLink: "",
  linkedinLink: "",
  mailId: "",
  resumeLink: "",
};
export const handleFormUpdate = (key, value, formRef) => {
  if (key.includes("home")) {
    if (key.includes("name")) {
      formRef.current.home.name = value;
    } else if (key.includes("description")) {
      formRef.current.home.description = value;
    } else if (key.includes("shortIntro")) {
      formRef.current.home.shortIntro = value;
    }
  } else if (key.includes("about")) {
    if (key.includes("aboutYourself")) {
      formRef.current.about.aboutYourself = value;
    } else if (key.includes("hobbies")) {
      formRef.current.about.hobbies[0] = value;
    }
  } else {
    formRef.current[key] = value;
  }
};
export const getGeneratedResponses = async (formRef) => {
  const about = formRef.current.about;
  const home = formRef.current.home;
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`;
  const hobbyBody = {
    contents: [
      {
        parts: [
          {
            text: `give me 3 of hobbies from this text that are sepearated by '-' ${about.hobbies} if text not understandable give random `,
          },
        ],
      },
    ],
  };
  const shortIntroBody = {
    contents: [
      {
        parts: [
          {
            text: `write a short intro with this text and use /n to seperate pragraphs  -${home.shortIntro} if text not understandable give random intro in paragraphs  `,
          },
        ],
      },
    ],
  };
  const aboutYouBody = {
    contents: [
      {
        parts: [
          {
            text: `re phrase this into a brief paragraph  -${about.aboutYourself} if text not understandable give random intro in paragraph`,
          },
        ],
      },
    ],
  };
  const homeDescription = {
    contents: [
      {
        parts: [
          {
            text: `re phrase this into a brief paragraph  -${home.description} if text not understandable give random paragraph`,
          },
        ],
      },
    ],
  };
  const [hobby, shortIntro, aboutYou, description] = await Promise.all([
    axios.post(apiUrl, hobbyBody),
    axios.post(apiUrl, shortIntroBody),
    axios.post(apiUrl, aboutYouBody),
    axios.post(apiUrl, homeDescription),
  ]);

  const hobbyList = hobby.data.candidates[0].content.parts[0].text.split("-");
  formRef.current.home.shortIntro =
    shortIntro.data.candidates[0].content.parts[0].text;
  formRef.current.about.hobbies = hobbyList;
  formRef.current.about.aboutYourself =
    aboutYou.data.candidates[0].content.parts[0].text;
  formRef.current.home.description =
    description.data.candidates[0].content.parts[0].text;
};
