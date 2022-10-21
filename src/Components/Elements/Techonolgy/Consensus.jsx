import React from "react";

function Consensus() {
  return (
    <div className="t-consensus">
      <div className="container mt-5">
        <div>
          <h1>Consensus Roles</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card py-2 px-2">
              <div>
                <img
                  src="Assests/glossary-nominator.svg"
                  alt=""
                  width={"130px"}
                />
              </div>
              <div className="mt-3">
                <h4>Nominators</h4>
              </div>
              <div>
                <p>
                  Secure the Relay Chain by selecting trustworthy validators and
                  staking dots.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card py-2 px-2">
              <div>
                <img
                  src="Assests/glossary-validator.svg"
                  alt=""
                  width={"130px"}
                />
              </div>
              <div className="mt-3">
                <h4>Validators</h4>
              </div>
              <div>
                <p>
                  Secure the relay chain by staking dots, validating proofs from
                  collators and participating in consensus with other
                  validators.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card py-2 px-2">
              <div>
                <img
                  src="Assests/glossary-collator.svg"
                  alt=""
                  width={"130px"}
                />
              </div>
              <div className="mt-3">
                <h4>Collators</h4>
              </div>
              <div>
                <p>
                  Maintain shards by collecting shard transactions from users
                  and producing proofs for validator.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Consensus;
