import React from "react";

function Card() {
  return (
    <div className="a-card">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-4 pb-5 ">
              <div>
                <h5>Robert Habermeier</h5>
              </div>
              <div>
                <p>Founder</p>
              </div>
              <div>
                <p>
                  Robert Habermeier is a Thiel Fellow and co-founder of
                  Polkadot. He has a research and development background in
                  blockchains, distributed systems, and cryptography. A longtime
                  member of the Rust community, he has focused on leveraging the
                  language’s features to build highly parallel and performant
                  solutions...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 pb-5">
              <div>
                <h5>Dr. Gavin Wood</h5>
              </div>
              <div>
                <p>Founder</p>
              </div>
              <div>
                <p>
                  Gavin began originating blockchain technology as co-founder
                  and CTO of Ethereum. He invented fundamental components of the
                  blockchain industry, including Solidity, Proof-of-Authority
                  consensus, and Whisper. At Parity, Gavin currently leads
                  innovation on Substrate and Polkadot... 
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 pb-5">
              <div>
                <h5>Peter Czaban</h5>
              </div>
              <div>
                <p>Founder</p>
              </div>
              <div>
                <p>
                  Peter is the Technology Director of the Web3 Foundation, where
                  he works on supporting the development of the next generation
                  of distributed technologies. He obtained his Masters of
                  Engineering degree at the University of Oxford, reading
                  Engineering Science where he focused on Bayesian Machine
                  Learning...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
