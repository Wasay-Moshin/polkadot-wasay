import React from "react";

function Governance() {
  return (
    <div className="t-governance">
      <div className="container mt-5">
        <div>
          <h1>Governance Roles</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card py-2 px-2">
              <div>
                <img
                  src="Assests/glossary-council.svg"
                  alt=""
                  width={"130px"}
                />
              </div>
              <div className="mt-3">
                <h4>Council Members</h4>
              </div>
              <div>
                <p>
                  Elected to represent passive stakeholders in two primary
                  governance roles: proposing referenda and vetoing dangerous or
                  malicious referenda.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card py-2 px-2">
              <div>
                <img
                  src="Assests/glossary-technical-committee.svg"
                  alt=""
                  width={"130px"}
                />
              </div>
              <div className="mt-3">
                <h4>Technical Committee</h4>
              </div>
              <div>
                <p>
                  Composed of teams actively building Polkadot. Can propose
                  emergency referenda, together with the council, for
                  fast-tracked voting and implementation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Governance;
