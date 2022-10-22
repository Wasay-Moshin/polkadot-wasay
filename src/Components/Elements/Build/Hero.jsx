import React from "react";

function Hero() {
  return (
    <div className="build-hero">
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div data-aos="fade-up">
              <h1>Build on Polkadot</h1>
            </div>
            <div className="mt-4">
              <p>
                Polkadot is 100% open-source. Anyone can contribute to the
                codebase, run a node, or build services on Polkadot. You can
                even get a grant.
              </p>
            </div>
            <div className="mt-4">
              <button class="btn1 btn1-animation">Start building</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
