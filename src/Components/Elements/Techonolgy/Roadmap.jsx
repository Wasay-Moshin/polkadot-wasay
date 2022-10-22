import React from "react";

function Roadmap() {
  return (
    <div className="t-roadmap">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 mt-4">
            <div className="mt-5">
              <h1>Roadmap</h1>
            </div>
            <div className="mt-4">
              <p>
                The launch of Polkadot v1 began in May 2020 with the Relay Chain
                genesis block and finished in December 2021 with the launch of
                parachains. Several post-launch developments and optimizations
                are expected for 2022 and beyond.
              </p>
            </div>
            <div className="mt-4">
              <button class="btn4 btn4-animation">
                See Launch Roadmap
              </button>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
