import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillRedditCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
function Footer() {
  return (
    <div className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <ul className="list-unstyled">
              <strong> General</strong>
              <li>About</li>
              <li>Telemetry</li>
              <li>Roadmap</li>
              <li>FAQ</li>
              <li>Support</li>
              <li>Build</li>
              <li>Grants and Bounties</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <ul className="list-unstyled">
              <strong>Technology</strong>
              <li>Technology</li>
              <li>Staking</li>
              <li>XCM</li>
              <li>Parachains</li>
              <li>Token</li>
              <li>Substrate</li>
              <li>Lightpaper</li>
              <li>Whitepaper</li>
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <ul className="list-unstyled">
              <strong>Community</strong>
              <li>Community</li>
              <li>Academy</li>
              <li>Auctions</li>
              <li>Treasury</li>
              <li>Documentation</li>
              <li>Blog</li>
              <li>Brand Assets</li>
              <li>Element Chat</li>
              <li>Medium</li>
            </ul>
          </div>
          <div className="col-md-3 col-12">
            <div>
              <AiFillTwitterCircle size={"40px"} color={"white"} />
              &nbsp;&nbsp;
              <AiFillRedditCircle size={"40px"} color={"white"} />
              &nbsp;&nbsp;
              <AiFillGithub size={"40px"} color={"white"} />
              &nbsp;&nbsp;
              <AiFillYoutube size={"40px"} color={"white"} />
              &nbsp;&nbsp;
              <SiDiscord size={"40px"} color={"white"} />
            </div>
            <div className="mt-3">
              <p>
                Subscribe to the newsletter to hear about Polkadot updates and
                events.
              </p>
            </div>
            <div>
              <button class="btn btn-animation">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12  f2">
            <img src="Assests/polkadot-light.svg" alt="" width={"150px"} />
            <div>
              <p className="m-4 ">© 2022 Web3 Foundation | Impressum | Disclaimer | Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
