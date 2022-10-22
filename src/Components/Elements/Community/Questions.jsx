import React from "react";

function Questions() {
  return (
    <div className="c-question">
      <div className=" text-center mt-5 p-5">
        <h2>Get your questions <br/>answered</h2>
        <div className="mt-5">
          <button class="btn1 btn1-animation">Join the Polkadot Chat</button>
          <p className="mt-5">
          or learn how to &nbsp;
            <a
              style={{ color: "#e6007a" }}
              href="https://polkadot.network/build/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              build on Polkadot.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Questions;
