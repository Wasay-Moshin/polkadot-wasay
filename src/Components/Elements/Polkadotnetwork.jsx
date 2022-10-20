import React from "react";

function Polkadotnetwork() {
  return (
    <div className="PN">
      <div className="container text-center mt-5">
        <div>
          <strong>Powering the Polkadot network</strong>
        </div>
        <div>
          <span>
            The DOT token serves three distinct purposes: <br />
            governance over the network, staking and bonding.
          </span>
          <p></p>
        </div>
        <div className="row">
          <div className="col-md-4 mt-5">
            <img src="Assests/token1.svg" alt="" width={"200px"} />
            <div className="mt-3">
              <h3>Governance</h3>
            </div>
            <div className="mt-3">
              <p>
                Polkadot token holders have complete control over the protocol.
                All privileges, which on other platforms are exclusive to
                miners, will be given to the Relay Chain participants (DOT
                holders), including managing exceptional events such as protocol
                upgrades and fixes.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <img src="Assests/token2.svg" alt="" width={"200px"} />
            <div className="mt-3">
              <h3>Staking</h3>
            </div>
            <div className="mt-3">
              <p>
                Game theory incentivizes token holders to behave in honest ways.
                Good actors are rewarded by this mechanism whilst bad actors
                will lose their stake in the network. This ensures the network
                stays secure.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <img src="Assests/token3.svg" alt="" width={"200px"} />
            <div className="mt-3">
              <h3>Bonding</h3>
            </div>
            <div className="mt-3">
              <p>
                New parachains are added by bonding tokens. Outdated or
                non-useful parachains are removed by removing bonded tokens.
                This is a form of proof of stake.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h1>
              Learn more about <br /> the DOT token
            </h1>
          </div>
          <div className="mt-5">
            <button class="btn1 btn1-animation">Discover DOT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Polkadotnetwork;
