import React from "react";

function Hero() {
  return (
    <div className="c-hero">
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div data-aos="fade-up">
              <h1>
                Join the Polkadot <br /> community
              </h1>
            </div>
            <div className="mt-4">
              <p>
                Polkadot is a 100% open-source project created to enable a
                decentralized web and better society. Anyone can contribute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
