import React from "react";

function Cards() {
  return (
    <div className="t-card">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card  px-2 py-2">
              <div className="card1">
                <div>
                  <img src="Assests/github.svg" alt="" width={"70px"} />
                </div>
                <div className="px-2">
                  <h4>GitHub</h4>
                  <p>Latest version & history.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  px-2 py-2">
              <div className="card1">
                <div>
                  <img src="Assests/documentation.svg" alt="" width={"70px"} />
                </div>
                <div className="px-2">
                  <h4>Documentation</h4>
                  <p>Read the documentation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  px-2 py-2">
              <div className="card1">
                <div>
                  <img src="Assests/element.svg" alt="" width={"70px"} />
                </div>
                <div className="px-2">
                  <h4>Element Chat</h4>
                  <p>Get yours questions answered</p>
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
