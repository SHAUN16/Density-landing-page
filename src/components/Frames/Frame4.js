import React from "react";
import styled from "styled-components";

const Frame4 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
          <div className="frame-title">
            <h6>
              <span> Unlock</span> New Frontiers.
            </h6>
            <p>
              Are you a stock trader looking for new opportunities to make
              money? We got you covered!
            </p>
          </div>

          <div className="container">
            <div className="container-0">
              <div className="items">
                <h6>Same Strategies</h6>
              </div>
              <div className="items">
                <h6>Same Indicators</h6>
              </div>
              <div className="items">
                <h6>Better Leverage</h6>
              </div>
              <div className="items">
                <h6>24x7 Trading</h6>
              </div>
            </div>
          </div>
          <video
            src="https://framerusercontent.com/assets/x7FNsNavKW3WzdAZRc41VOl7Qw.mp4"
            loop=""
            muted=""
            playsinline=""
            className="chart"
          ></video>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .frame-section {
    padding: 5rem 0;
  }

  .frame-center {
    max-width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }

  .frame-title h6 {
    font-size: 4.5rem;
    font-weight: 700;
  }

  .frame-title p {
    font-size: 1.5rem;
    font-weight: 400px;
  }

  .frame-title span {
    color: #ebff25;
  }

  .container {
    margin: 2rem 0;
    max-width: 80%;
    font-size: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 2rem;
  }

  .container-0 {
    display: flex;
    align-items: center;
  }

  .items {
    width: 25%;
    flex: 1 0 0;
    border-right: 1px solid #a9a9a9;
  }

  .items:last-child {
    border: none;
  }

  .chart{
    width:100%;
  }
`;
export default Frame4;
