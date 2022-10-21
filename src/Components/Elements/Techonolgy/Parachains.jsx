import React from "react";

function Parachains() {
  return (
    <div className="t-parachains">
      <div className="container ">
        <div className="text-center">
          <h1>
            Parachains: parallel
            <br /> transaction processing
          </h1>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5">
            <div>
              <p>
                Parachains are specialized blockchains that connect to Polkadot.
                They will have characteristics specialized for their use cases
                and the ability to control their own governance.
              </p>
              <p>
                Interactions on parachains are processed in parallel, enabling
                highly scalable systems.
              </p>
              <p>
                Transactions can be spread out across the chains, allowing many
                more transactions to be processed in the same period of time.
              </p>
            </div>
            <div>
              <button class="btn3 btn3-animation">
                Learn more about parachains
              </button>
            </div>
          </div>
          <div className="col-md-3 mt-5 px-5">
            <div className="col">
              <div>
                <p>
                  <strong>Current method:</strong> <br />
                  Single transaction
                </p>
              </div>
              <div>
                <img src="Assests/dg-transactions.svg" alt="" width={"160px"} />
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 px-5">
            <div className="col">
              <div>
                <p>
                  <strong>Polkadot method:</strong> <br />
                  Multi parallelized transactions
                </p>
              </div>
              <div>
                <img
                  src="Assests/dg-transactions-new.svg"
                  alt=""
                  width={"160px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parachains;
