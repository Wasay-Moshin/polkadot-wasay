import React from "react";

function Cards() {
  return (
    <div className="c-card">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card c1 p-1  ">
              <div className="card1 ">
                <div>
                  <img src="Assests/twitter.svg" alt="" width={"60px"} />
                </div>
                <div className="px-2">
                  <h4>Twitter</h4>
                  <p>Follow @Polkadot.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card c1 p-1">
              <div className="card1">
                <div>
                  <img src="Assests/newsletter.svg" alt="" width={"60px"} />
                </div>
                <div className="px-2">
                  <h4>Mailing list</h4>
                  <p>Don’t miss updates.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card c1 p-1">
              <div className="card1">
                <div>
                  <img src="Assests/reddit.svg" alt="" width={"60px"} />
                </div>
                <div className="px-2">
                  <h4>Reddit</h4>
                  <p>Discuss Polkadot news.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4">
            <div className="card  p-1">
              <div className="card1">
                <div>
                  <img src="Assests/discord.svg" alt="" width={"60px"} />
                </div>
                <div className="px-2">
                  <h4>Discord</h4>
                  <p>Discuss with the community.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  p-1">
              <div className="card1">
                <div>
                  <img src="Assests/github.svg" alt="" width={"60px"} />
                </div>
                <div className="px-2">
                  <h4>Github</h4>
                  <p>Contribute to the codebase.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  p-1">
              <div className="card1">
                <div>
                  <img src="Assests/element.svg" alt="" width={"60px"} />
                </div>
                <div className="px-2">
                  <h4>Element Chat</h4>
                  <p>Get support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="card  p-1">
              <div className="card1">
                <div>
                  <img src="Assests/documentation.svg" alt="" width={"60px"} />
                </div>
                <div className="px-2">
                  <h4>Documentation</h4>
                  <p>Read the documentation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  p-1">
              <div className="card1">
                <div>
                  <img src="Assests/youtube.svg" alt="" width={"60px"} />
                </div>
                <div className="px-2">
                  <h4>Youtube</h4>
                  <p>Watch conference videos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
