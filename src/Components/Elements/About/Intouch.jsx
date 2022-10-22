import React from "react";

function Intouch() {
  return (
    <div className="a-intouch">
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <h1>Get in touch</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card  px-2 py-2">
              <div className="card1">
                <div>
                  <img
                    src="Assests/logo-circle-chat.svg"
                    alt=""
                    width={"70px"}
                  />
                </div>
                <div className="px-2">
                  <h4>For general chat</h4>
                  <span>Join the Watercooler or Discord</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  px-2 py-2">
              <div className="card1">
                <div>
                  <img
                    src="Assests/logo-circle-newsletter.svg"
                    alt=""
                    width={"70px"}
                  />
                </div>
                <div className="px-2">
                  <h4>For press inquiries</h4>
                  <span>Please fill out this form</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  px-2 py-2">
              <div className="card1">
                <div>
                  <img
                    src="Assests/logo-circle-email.svg"
                    alt=""
                    width={"70px"}
                  />
                </div>
                <div className="px-2">
                  <h4>For all other inquiries</h4>
                  <span>support.polkadot.network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5 text-center">
            <div>
              <h2>
                Stay informed of updates <br />
                and events
              </h2>

              <p>Subscribe to the newsletter or read the blog</p>
            </div>
          </div>
          
          <div className="col-md-6 mt-5 text-center">
            <div>
              <h2>
                Join the teams building <br /> Polkadot
              </h2>

              <p>See jobs at Web3 Foundation or at Parity Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intouch;
