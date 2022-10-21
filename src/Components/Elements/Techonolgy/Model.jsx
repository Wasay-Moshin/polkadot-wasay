import React from "react";

function Model() {
  return (
    <div className="t-model">
      <div className="container text-center">
        <div className="row mt-5">
          <div className="col-md-6 px-5 ">
            <div className="text-start">
              <h1>A better security model</h1>
            </div>
            <div className="text-start">
              <p>
                In both Proof-of-Work and Proof-of-Stake systems, blockchains
                compete with each other over resources to secure their networks,
                and blockchains are easily attacked until they develop a
                significant community to support their network.
              </p>
              <p>
                Polkadot takes a different approach by letting blockchains pool
                their security, which means that the blockchains' security is
                aggregated and applied to all.
              </p>
              <p>
                By connecting to Polkadot, blockchain developers can secure
                their blockchain from day one.
              </p>
            </div>
          </div>
          <div className="col-md-5 mt-5">
            <div>
              <img
                className="img-fluid"
                src="Assests/dg-security-model.svg"
                alt=""
                width={"180px"}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 mt-5">
            <div>
              <img
                className="img-fluid"
                src="Assests/dg-xcm.svg"
                alt=""
                width={"180px"}
              />
            </div>
          </div>
          <div className="col-md-6 px-5 ">
            <div className="text-start">
              <h1>XCM: a secure cross-chain communication standard</h1>
            </div>
            <div className="text-start">
              <p>
                For blockchains to work together and form the basis of Web3,
                they need a common language for communication. Polkadot sets the
                standard with XCM, a cross-consensus communication format and
                programming language that allows blockchains of different
                designs to securely exchange arbitrary data, code, and value. In
                this way, a new wave of rich cross-chain applications and
                services can be built that tap into the features and benefits of
                different chains.
              </p>
              <p>Learn more about XCM</p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 px-5 ">
            <div className="text-start">
              <h1>A green, energy-efficient protocol</h1>
            </div>
            <div className="text-start">
              <p>
                It’s hard to get behind blockchain as the next technological
                revolution when it wastes so much energy. Polkadot is designed
                to power the web’s next big wave of innovation, without the high
                energy consumption of conventional proof-of-work blockchains.
              </p>
              <p>
                Polkadot’s Nominated Proof-of-stake (NPoS) model uses a small
                fraction of the energy consumed by conventional blockchains, and
                has the lowest carbon footprint among proof-of-stake protocols
                analyzed in recent research.
              </p>
            </div>
          </div>
          <div className="col-md-5 mt-5">
            <div>
              <img
                className="img-fluid"
                src="Assests/dg-green-energy.svg"
                alt=""
                width={"180px"}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 mt-5">
            <div>
              <img
                className="img-fluid"
                src="Assests/dg-governance.svg"
                alt=""
                width={"180px"}
              />
            </div>
          </div>
          <div className="col-md-6 px-5 ">
            <div className="text-start">
              <h1>Transparent on-chain governance</h1>
            </div>
            <div className="text-start">
              <p>
                Updates to the protocol happen fork-free via transparent
                on-chain voting, so protocol development never stalls due to the
                lack of a clear process. The relay chain uses a sophisticated
                governance mechanism that is designed to establish a
                transparent, accountable and binding process for resolving
                disputes and upgrading the network.
              </p>
              <p>
                DOT tokens are used to participate in governance decisions,
                including tabling proposals, voting, and bonding.
              </p>
              <p>
                Parachains are free to design their own governance mechanisms,
                allowing for maximum freedom without affecting other parachains.
              </p>
              <p>Learn more about Polkadot’s governance</p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 px-5 ">
            <div className="text-start">
              <h1>On-chain treasury for decentralized project funding</h1>
            </div>
            <div className="text-start">
              <p>
                Polkadot’s governance system also features an on-chain treasury
                that the community can use to fund projects that benefit the
                network. Any DOT holder can submit project funding and bounty
                proposals, and can nominate community members for tips based on
                work completed.
              </p>
              <p>
                With tens of millions of DOT available for spending, the
                treasury represents a powerful resource for fueling Web3
                innovation.
              </p>
              <p>Learn more about the Polkadot treasury</p>
            </div>
          </div>
          <div className="col-md-5 mt-5">
            <div>
              <img
                className="img-fluid"
                src="Assests/dg-treasury.svg"
                alt=""
                width={"180px"}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 mt-5">
            <div>
              <img
                className="img-fluid"
                src="Assests/dg-consensus.svg"
                alt=""
                width={"180px"}
              />
            </div>
          </div>
          <div className="col-md-6 px-5 ">
            <div className="text-start">
              <h1>GRANDPA: a trustworthy consensus algorithm</h1>
            </div>
            <div className="text-start">
              <p>
                Polkadot uses its original GRANDPA (GHOST-based Recursive
                Ancestor Deriving Prefix Agreement) consensus for a more secure
                and resilient network.
              </p>
              <p>
                Under good network conditions, GRANDPA can finalize blocks
                nearly instantly. Under bad network conditions, like a network
                partition, GRANDPA can finalize large quantities of blocks
                (theoretically millions) at once when the partitions resolve.
              </p>
              <p>Learn more about GRANDPA.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
