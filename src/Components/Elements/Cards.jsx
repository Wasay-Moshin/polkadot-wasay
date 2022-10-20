import React from "react";

function Cards() {
  return (
    <div className="cd1">
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h1>From the blog</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div>
              <div className="card">
                <img
                  src="Assests/image1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div>
                    <p style={{ color: "#e6007a" }}>Parachain</p>
                  </div>
                  <h5 className="card-title ">
                    First Parachain Successfully Migrates from Kusama to
                    Polkadot
                  </h5>
                  <p className="card-text">
                    KILT Protocol's migration from Kusama to Polkadot is an
                    important technical milestone and the first parachain
                    migration. Polkadot's 'canary network' model allows Web3
                    projects to test their technology in a real-world
                    environment before upgrading to stable production
                    networks....
                  </p>
                  <div className="mt-3 pt-1">
                    <img src="Assests/polkadot.svg" alt="" width={"120px"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <div className="card card1">
                <img
                  src="Assests/image2.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div>
                    <p style={{ color: "#e6007a" }}>Polkadot</p>
                  </div>
                  <h5 className="card-title mt-4 ">Polkadot Roadmap Roundup</h5>
                  <p className="card-text mt-4">
                    A proposed roadmap for upcoming developments on Polkadot.
                    Get the latest status on asynchronous backing, parathreads,
                    XCMv3, governance, common-good parachains and more....
                  </p>
                  <div className="mt-5 pt-3">
                    <img src="Assests/polkadot.svg" alt="" width={"120px"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <div className="card card2">
                <img
                  src="Assests/image3.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div>
                    <p style={{ color: "#e6007a" }}>Polkadot</p>
                  </div>
                  <h5 className="card-title ">
                    Subo, the Polkadot Developer Conference, comes to Lisbon in
                    November
                  </h5>
                  <p className="card-text">
                    The two-day live sub0 conference will run on November
                    28th-29th. Featuring keynote presentations, breakout
                    sessions, workshops & side events. Sign up for ticket
                    updates....
                  </p>
                  <div className="mt-5 pt-3">
                    <img src="Assests/polkadot.svg" alt="" width={"120px"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
