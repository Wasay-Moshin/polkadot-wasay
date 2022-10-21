import React from "react";

function Connecting() {
  return (
    <div className="t-connecting">
      <div className="container mt-5">
        <div>
            <h1>Connecting the dots</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card py-2 px-2">
              <div>
                <img src="Assests/glossary-relay.svg" alt="" width={"130px"} />
              </div>
              <div className="mt-3">
                <h4>Relay Chain</h4>
              </div>
              <div>
                <p>
                  The heart of Polkadot, responsible for the network’s shared
                  security, consensus and cross-chain interoperability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card py-2 px-2">
              <div>
                <img
                  src="Assests/glossary-parachain.svg"
                  alt=""
                  width={"130px"}
                />
              </div>
              <div className="mt-3">
                <h4>Parachains</h4>
              </div>
              <div>
                <p>
                  Sovereign blockchains that can have their own tokens and
                  optimize their functionality for specific use cases.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card py-2 px-2">
              <div>
                <img
                  src="Assests/glossary-parathread.svg"
                  alt=""
                  width={"130px"}
                />
              </div>
              <div className="mt-3">
                <h4>Parathreads</h4>
              </div>
              <div>
                <p>
                  Similar to parachains but with a pay-as-you-go model. More
                  economical for blockchains that don’t need continuous
                  connectivity to the network.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card py-2 px-2">
              <div>
                <img src="Assests/glossary-bridge.svg" alt="" width={"130px"} />
              </div>
              <div className="mt-3">
                <h4>Bridges</h4>
              </div>
              <div>
                <p>
                  Allow parachains and parathreads to connect and communicate
                  with external networks like Ethereum and Bitcoin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connecting;
