import React from "react";

function Homenetwork() {
  return (
    <div className="homenetwork">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div>
              <img src="Assests/home-icon1.svg" alt="" width={"50px"} />
            </div>
            <div className="mt-3">
              <h4>True interoperability</h4>
            </div>
            <div className="mt-3">
              <p>
                Polkadot enables cross-blockchain transfers of any type of data
                or asset, not just tokens. Connecting to Polkadot gives you the
                ability to interoperate with a wide variety of blockchains in
                the Polkadot network.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img src="Assests/home-icon2.svg" alt="" width={"50px"} />
            </div>
            <div className="mt-3">
              <h4>Economic & transactional scalability</h4>
            </div>
            <div className="mt-3">
              <p>
                Polkadot provides unprecedented economic scalability by enabling
                a common set of validators to secure multiple blockchains.
                Polkadot provides transactional scalability by spreading
                transactions across multiple parallel blockchains.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img src="Assests/home-icon3.svg" alt="" width={"50px"} />
            </div>
            <div className="mt-3">
              <h4>Easy blockchain innovation</h4>
            </div>
            <div className="mt-3">
              <p>
                Create a custom blockchain in minutes using the{" "}
                <a
                  className="underline"
                  type="button"
                  href="https://substrate.io/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Substrate
                </a>
                &nbsp; framework. Connect your chain to Polkadot and get
                interoperability and security from day one. This ease of
                development helps Polkadot's network grow.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div>
              <img src="Assests/home-icon4.svg" alt="" width={"50px"} />
            </div>
            <div className="mt-3">
              <h4>High energy efficiency</h4>
            </div>
            <div className="mt-3">
              <p>
                Polkadot consumes a small fraction of the energy used by
                conventional blockchains thanks to its next-generation nominated
                proof-of-stake (NPoS) model. Using the equivalent of ~6.6 US
                households worth of energy per year, Polkadot has the&nbsp;
                <a
                  className="underline"
                  type="button"
                  href="https://www.bloomberg.com/news/articles/2022-02-02/polkadot-has-smallest-carbon-footprint-crypto-researcher-says"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  lowest carbon footprint
                </a>
                &nbsp;among proof-of-stake protocols analyzed in&nbsp;
                <a
                  className="underline"
                  type="button"
                  href="https://www.bloomberg.com/news/articles/2022-02-02/polkadot-has-smallest-carbon-footprint-crypto-researcher-says"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  recent research.
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img src="Assests/home-icon5.svg" alt="" width={"50px"} />
            </div>
            <div className="mt-3">
              <h4>Security for everyone</h4>
            </div>
            <div className="mt-3">
              <p>
                Polkadot's novel data availability and validity scheme allows
                chains to interact with each other in a meaningful way. Chains
                remain independent in their governance, but united in their
                security.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img src="Assests/home-icon6.svg" alt="" width={"50px"} />
            </div>
            <div className="mt-3">
              <h4>User-driven governance</h4>
            </div>
            <div className="mt-3">
              <p>
                Polkadot has a sophisticated governance system where all
                stakeholders have a voice. Network upgrades are coordinated
                on-chain and enacted autonomously and without forking the
                network, ensuring that Polkadot’s development remains
                future-proof and community-driven.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <div>
            <h1>
              Learn more about Polkadot's <br />
              technology
            </h1>
          </div>
          <div className="mt-5">
            <button class="btn1 btn1-animation">Discover Polkadot</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homenetwork;
