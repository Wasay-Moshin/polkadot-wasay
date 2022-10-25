import React from "react";
import { Link } from "react-router-dom";
import {AiFillGithub} from "react-icons/ai"
import {FaDiscord} from "react-icons/fa"
import {AiFillTwitterCircle} from "react-icons/ai"
function Header() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg nav1 border-bottom px-1">
          <div className="container">
            <a className="navbar-brand" href="/">
              <div className="dropdown">
                <span
                  className=" dropdown-toggle"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </span>
                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="/">
                      español
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      中文
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      日本語
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      한국어
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      русский
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Türkçe
                    </a>
                  </li>
                </ul>
              </div>
            </a>
            {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
            <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active " href="/">
                    <p className="c1">Lightpaper</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="/">
                    <p className="c1">Whitepaper</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="/">
                    <p className="c1">Wiki</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="/">
                    <p className="c1"><AiFillGithub  size={"20px"}/></p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="/">
                    <p className="c1"> <FaDiscord size={"20px"}/></p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="/">
                    <p className="c1"><AiFillTwitterCircle size={"20px"}/></p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="/">
                    <p className="c1 support">support</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     
      </div>
     
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="Assests/polkadot.svg" alt="" width={"150px"}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">
                  <span className="dot">.</span>
                  <p className="c1">Technology</p>
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link m-dot active " to="/community">
                  <p className="c1">Community</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " to="/About">
                  <p className="c1">About</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " to="/Blog">
                  <p className="c1">Blog</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " to="/Build">
                  <p className="c1"> Build</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " to="/Contact">
                  <p className="c1">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
