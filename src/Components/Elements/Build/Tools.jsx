import React from "react";

function Tools() {
  return (
    <div className="build-tool">
      <div className="container">
        <div className="text-center">
          <h1>Tools that come with Substrate</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card p-2">
              <div>
                <h4>Polkadot Telemetry Service</h4>
              </div>
              <div>
                <p>Network information</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-2">
              <div>
                <h4>Substrate and Polkadot UI</h4>
              </div>
              <div>
                <p>Built with React.js and RxJS</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-2">
              <div>
                <h4>Substrate UI</h4>
              </div>
              <div>
                <p>Built with the Bonds oo7 library</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-md-4">
            <div className="card p-2">
              <div>
                <h4>Polkabot</h4>
              </div>
              <div>
                <p>Network monitoring and reporting</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-2">
              <div>
                <h4>Polkascan</h4>
              </div>
              <div>
                <p>Blockchain data explorer and analytics</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="text-center mt-5">
            <div>
              <h1>
                Start building your custom parachain
                <br /> with Substrate
              </h1>
              <div className="mt-5">
                <button class="btn1">Substrate Developer Hub</button>
              </div>
              <div className="mt-4">
                <p>
                    or &nbsp;
                <a
                style={{ color: "black" }}
                href="https://substrate.io/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                learn more
              </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
