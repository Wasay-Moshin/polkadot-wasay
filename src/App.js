import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import Home from "./Page/Home";
import Base from "./Components/Layouts/Base";
import Techonolgy from "./Page/Techonolgy";
import Community from "./Page/Community";
import About from "./Page/About";
import Blog from "./Page/Blog";
import Build from "./Page/Build";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({duration:1500})
function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route  path="/technology" element={<Techonolgy />}/>
            <Route  path="/community" element={<Community />}/>
            <Route  path="/About" element={<About />}/>
            <Route  path="/Blog" element={<Blog />}/>
            <Route  path="/Build" element={<Build />}/>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
