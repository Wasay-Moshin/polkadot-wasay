import React from "react";

function Substrate() {
  return (
    <div className="build-substrate">
      <div className="container">
        <div className="text-center">
          <h1>
            Easily build a Polkadot parachain with <br />
            Substrate
          </h1>
          <div>
            <p>
              Build your application-specific blockchain with the Substrate
              framework now and easily connect it to <br />
              Polkadot after launch.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mt-4">
            <div className="card">
              <div>
                <h4>
                  Native Polkadot
                  <br />
                  compatibility
                </h4>
              </div>
              <div>
                <span>
                  Blockchains built with Substrate are natively compatible with
                  Polkadot, so they can be easily connected to Polkadot as a
                  parachain or parathread.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card">
              <div>
                <h4>Fork-free upgrades</h4>
              </div>
              <div>
                <span>
                  Upgrade your blockchain without a hard fork. Your runtime is a
                  Wasm binary stored on-chain and can be updated using your
                  chain’s governance mechanism.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card">
              <div>
                <h4>
                  Plug-and-play modular <br />
                  framework
                </h4>
              </div>
              <div>
                <span style={{ color: "white" }}>
                  Substrate allows you to simply plug in the functionalities you
                  need, while also giving you the freedom to customize as
                  needed.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mt-4">
            <div className="card">
              <div>
                <h4>Interchain connectivity</h4>
              </div>
              <div>
                <span>
                  By connecting your blockchain to Polkadot, your blockchain
                  will be able to pass arbitrary messages to other chains in the
                  Polkadot network.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card">
              <div>
                <h4>Instant security</h4>
              </div>
              <div>
                <span>
                  Simply by connecting your blockchain to Polkadot, your
                  blockchain will be secured by Polkadot’s pooled security.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card">
              <div>
                <h4>Multiple languages</h4>
              </div>
              <div>
                <span>
                  With Substrate, you can write your blockchain logic in any
                  language that can compile to WebAssembly (Rust, C/C++, C#, Go,
                  etc).
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Substrate;
