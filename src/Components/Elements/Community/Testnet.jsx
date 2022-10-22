import React from "react";

function Testnet() {
  return (
    <div className="c-testnet">
      <div className="container mt-4">
        <div className="text-center mb-5">
          <h1>
            Run a node and interact with the <br /> Polkadot testnet
          </h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div>
              <p>
                If you'd like to play with Polkadot, you'll need to install and
                run the Parity Polkadot client. Get the client at{" "}
                <button className="test-btn">Parity’s Polkadot repo</button>
              </p>
              <p>
                Alexander is the current default public testnet for Polkadot. By
                default, any node running on the Alexander testnet will appear
                on the{" "}
                <button className="test-btn"> telemetry.polkadot.io</button>
              </p>
              <p>
                The testnet allows you to create accounts, propose governance
                referenda, stake testnet DOT to become a validator or nominate
                other accounts as validators with your testnet DOT.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <p>
                Connect your running node to the main <br />
                <button className="test-btn">Polkadot user interface</button> to
                play around.
              </p>
              <p>
                Get testnet DOT to stake by following these instructions on the{" "}
                <button className="test-btn">Polkadot Wiki</button>
              </p>
              <p>
                If you don’t want to run a node, you can still interact with the
                network by using <button className="test-btn"> the explorer</button>
              </p>
              <p>
                Before interacting with the testnet, please read this <button className="test-btn"> legal
                notice</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testnet;
