import React from "react";
import styled from "styled-components";

const Frame1 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
          <div className="frame-item">
            <h6>00%</h6>
            <p>Conversion Fee</p>
          </div>
          <div className="frame-item">
            <h6>500 Mn+</h6>
            <p>Lifetime Volume Traded</p>
          </div>
          <div className="frame-item">
            <h6>250+</h6>
            <p>Total Tradable Pairs</p>
          </div>
          <div className="frame-item">
            <h6>15,000+</h6>
            <p>Traders</p>
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
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid rgba(50, 216, 117, 0.96);
    background: rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 10px 0px rgba(235, 255, 37, 0.2);
    backdrop-filter: blur(26.25px);
  }

  .frame-item {
    width: 25%;
    text-align: center;
    padding: 8% 0;
  }

  .frame-item h6 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ebff25;
  }
`;

export default Frame1;
