import React from "react";
import styled from "styled-components";
import card from "../../../static/cards.svg"
const Frame5 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
          <div className="frame-title">
            <h6>Start Small. Earn Big.</h6>
            <p>
              Deposity a minimum of 1000 and get a Deposit bonus + dedicated
              relationship manager
            </p>
          </div>

          <div className="image-container">
            <img src={card} alt="card-images"/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .frame-section {
    padding: 5rem 0;
    background-color: white;
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

  .frame-title{
    width:80%;
  }
  .frame-title h6 {
    font-size: 4.5rem;
    font-weight: 700;
    color:black;
  }

  .frame-title p {
    font-size: 1.5rem;
    font-weight: 400px;
    color:black;
  }
`;
export default Frame5;
