import React from "react";

function Teambuilding() {
  return (
    <div className="t-team">
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <h1>What are teams building on<br/> Polkadot? Just a few examples:</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card1 px-2 py-2">
              <div>
                <p>
                  <b>Smart contract chains </b>with WebAssembly smart contracts
                  (Astar, Moonbeam)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 px-2 py-2">
              <div>
                <p>
                  <b> Data curation networks</b> that connect all file storage
                  chains into curated data sets
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card px-2 py-2">
              <div>
                <p>
                  <b>Oracle chains</b> that make off-chain data available to all
                  contracts on the Polkadot network (ChainLink)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card card2 px-2 py-2">
              <div>
                <p>
                  <b> Identity chains</b> that link accounts to a persistent
                  identity and enable access to other parachains through fewer
                  accounts (Kilt)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card px-2 py-2">
              <div>
                <p>
                  <b>Financial chains </b> that allow you to hold all your
                  assets in one portfolio, including via bridges to Bitcoin,
                  Ethereum, Bitcoin Cash, Litecoin and ZCash
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card2 px-2 py-2">
              <div>
                <p>
                  <b>Internet of Things</b> chains that set IoT standards for
                  machine-to-machine communication (Robonomics)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card  px-2 py-2">
              <div>
                <p>
                  <b>Zero Knowledge</b> privacy chains, or bridges to existing
                  ZK-snarks chains
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  px-2 py-2">
              <div>
                <p>
                  <b>File storage </b>chains that incentivize storing data
                  on-chain
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card px-2 py-2">
              <div>
                <p>
                  <b> Bridge to Ethereum</b>, allowing Ethereum smart contracts
                  to interact with the Polkadot network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teambuilding;
