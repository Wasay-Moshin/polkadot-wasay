import React from "react";

function Section1() {
  return (
    <div className="t-section1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="mt-5">
              <img className="img-fluid" src="Assests/dg-network.svg" alt="" width={"100%"} />
            </div>
          </div>
          <div className="col-md-4">
            <h1>Any type of data across any type of blockchain</h1>
            <div>
              <strong>
                Polkadot is a network protocol that allows arbitrary data—not
                just tokens—to be transferred across blockchains.
              </strong>
            </div>
            <br/>
            <div>
              <p>
                This means Polkadot is a true multi-chain application
                environment where things like cross-chain registries and
                cross-chain computation are possible.
              </p>
            </div>
            <div>
              <p>
                Polkadot can transfer this data across public, open,
                permissionless blockchains as well as private, permissioned
                blockchains.
              </p>
            </div>
            <div>
              <p>
                This makes it possible to build applications that get
                permissioned data from a private blockchain and use it on a
                public blockchain. For instance, a school's private,
                permissioned academic records chain could send a proof to a
                degree-verification smart contract on a public chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
