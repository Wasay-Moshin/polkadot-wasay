import React from "react";

function Ecosystem() {
  return (
    <div className="build-ecosystem">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1>Get a grant to build the Polkadot ecosystem</h1>
            </div>
            <div>
              <p>
                Web3 Foundation provides grants to steward research and
                development of Polkadot and the Web3 tech stack. The program
                funds work on runtime modules and parachains, development tools,
                UI, protocol integrations, maintenance, and more.
              </p>
            </div>
            <div className="mt-4">
              <button class="btn1 slide-right">Learn More</button>
            </div>
          </div>
          <div className="col-md-6">
            <div>
                <ul>
                    <li>Development and deployment tooling (e.g. IDEs, parachain development kits)</li>
                    <li>Polkadot Runtime Modules (e.g. interoperability, governance)</li>
                    <li>Second layer protocols (e.g. dedicated parachains, state channels)</li>
                    <li>Monitoring (e.g. explorers)</li>
                    <li>Protocol integrations (e.g. bridges to other blockchains, distributed file storage)</li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
