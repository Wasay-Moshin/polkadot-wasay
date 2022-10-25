import React from "react";

function Validator() {
  return (
    <div className="c-validator">
      <div className="container">
        <div className="mt-5 mb-5">
          <h1>Become a validator</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div>
              <h5>1. Set up your machine</h5>
            </div>
            <div className="mt-3 mb-3">
              In addition to any usual CLI parameters that you run polkadot
              with, you'll need to add an extra two:
            </div>
            <div>
              <ul>
                <li>
                  <span style={{ color: "#e6007a" }}>--validator</span> This
                  tells your node to try to validate when it sees itself as a
                  listed authority on the network;
                </li>
                <li>
                  <span style={{ color: "#e6007a" }}>--key seed </span> This
                  provides your node with a secret key that lets it know whether
                  it's a listed authority on the network, and, if it is, lets it
                  sign statements to authorise the creation of new blocks.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 ">
            <div>
              <h5>2. Apply to validate</h5>
            </div>
            <div className="mt-3 mb-3">
              <p>
                New validators will be chosen every 24 hours on mainnet. You’ll
                need to create separate accounts for Controller, Session, and
                Stash keys on the Polkadot UI{" "}
                <a 
                  style={{ color: "#e6007a" }}
                  href="https://polkadot.js.org/apps/#/accounts/create"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  (https://polkadot.js.org/apps/create)
                </a>
                . These accounts will be used to represent and control the
                validator node you just set up.
              </p>
              <p>
                Next you will need to get some DOT from the faucet or by asking
                on Element. Assuming you have more DOT than the lowest staked
                validator or there is an open validator slot, you can register
                to be staked. A step-by-step guide demonstrating how to set up
                your accounts and bond your DOT is available on the &nbsp;
                <a
                  style={{ color: "#e6007a" }}
                  href="https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#bond-dot"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  wiki.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className=" text-center mt-5 p-5">
          <h2>Want to become a validator?</h2>
          <div className="mt-5">
            <button class="btn1 btn1-animation">Read More</button>
            <p className="mt-5">
              You can see validator stats on
              <a 
                style={{ color: "#e6007a" }}
                href="https://telemetry.polkadot.io/#/0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Telemetry
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validator;
