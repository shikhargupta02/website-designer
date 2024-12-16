import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Work from "./components/Work.jsx";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
import { SocialIcon } from "./components/Navbar/SocialIcon.jsx";

function App() {
  return (
    <div className="page">
      <Navbar />
      <SocialIcon />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
