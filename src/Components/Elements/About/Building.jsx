import React from "react";

function Building() {
  return (
    <div className="a-building">
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-6">
            <div>
            <h1>Who's building<br/> Polkadot?</h1>
            </div>
            <div className="mt-3 p1">
              <p>
                Polkadot is the flagship project by Web3 Foundation, a Swiss
                Foundation founded to facilitate a fully functional and
                user-friendly decentralized web.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <p>
                The Web3 Foundation is partnering with best-in-class entities to
                build Polkadot and foster development of the services and
                applications that will run on it.
              </p>
              <p>
                Researchers from Inria Paris and ETH Zurich, developers from
                Parity Technologies, and capital partners from crypto-funds such
                as Polychain Capital are all working together to develop a
                superlative realization of Web3, with Polkadot at its core.
              </p>
              <p>
                Web3 Foundation is providing grants for development of the
                ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="row text-center mt-5 mb-5">
          <div className="col-md-3 col-6 mb-2">
            <div>
              <img src="Assests/circle1.svg" alt="" width={"80px"} />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div>
              <img src="Assests/circle2.svg" alt="" width={"80px"} />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div>
              <img src="Assests/circle3.svg" alt="" width={"80px"} />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div>
              <img src="Assests/circle4.svg" alt="" width={"80px"} />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Building;
