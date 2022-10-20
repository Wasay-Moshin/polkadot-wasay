import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1>The multichain vision for Web3 starts here.</h1>
            </div>
            <div>
              <p>
                Polkadot unites and secures a growing ecosystem of specialized
                blockchains called parachains. Apps and services on Polkadot can
                securely communicate across chains, forming the basis for a
                truly interoperable decentralized web.
              </p>
            </div>
            <div className="mt-3">
              <button class="btn1 btn1-animation">Learn Parachains</button>
              &nbsp;&nbsp;&nbsp;
              <button class="btn1 btn1-animation">Learn Cross-Chain</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg1">
              <div  className='outer'>
              <div className='inner'></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
