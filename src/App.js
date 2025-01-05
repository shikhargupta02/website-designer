import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Work from "./components/Work.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import "./app.scss";
import { SocialIcon } from "./components/Navbar/SocialIcon.jsx";
import { useEffect } from "react";
import ProjectForm from "./components/form/ProjectForm.jsx";
import { useSelector } from "react-redux";
import { selectShowPortfolio } from "./redux/formSlice.js";

function App() {
  const location = useLocation();
  const showPortfolio = useSelector(selectShowPortfolio);
  console.log(showPortfolio);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!showPortfolio ? (
        <ProjectForm />
      ) : (
        <div className="page">
          <Navbar />
          <SocialIcon />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
