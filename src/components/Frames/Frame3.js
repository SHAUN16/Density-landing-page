import React from "react";
import styled from "styled-components";
import card1 from "../../../static/card1.svg";
import card2 from "../../../static/card2.svg";
import card3 from "../../../static/card3.svg";

const Frame3 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
          <div className="frame-title">
            <h6>
              Trade More. <span>Pay Less.</span>
            </h6>
            <p>Our low Fees Supercharge Your Profits</p>
          </div>
          <div className="card-container">
            <img src={card1} />
            <img src={card2} />
            <img src={card3} />
          </div>
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

  .card-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

`;

export default Frame3;
