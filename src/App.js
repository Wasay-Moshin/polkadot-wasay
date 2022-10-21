import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import Home from "./Page/Home";
import Base from "./Components/Layouts/Base";
import Techonolgy from "./Page/Techonolgy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route  path="/technology" element={<Techonolgy />}/>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
