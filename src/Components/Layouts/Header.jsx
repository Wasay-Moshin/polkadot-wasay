import React from "react";

function Header() {
  return (
    <div>
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
                <a className="nav-link active " href="/">
                  <p className="c1">Technology</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <p className="c1">Community</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <p className="c1">About</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <p className="c1">Blog</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <p className="c1"> Build</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <p className="c1">Contact</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
