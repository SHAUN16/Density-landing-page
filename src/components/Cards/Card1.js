import React from "react";
import styled from "styled-components";

const Card1 = ({cardData}) => {
  const {
    image,
    title,
    para,
  } = cardData;

  return (
    <Wrapper>
      <div className="card-section">
        <div className="card-center">
          <img src={image} className="card-image" alt="card-image" />
          <div className="card-title">
            <h6>{title}</h6>
            <p>{para}</p>
          </div>

          <button className="tradebtn">Trade Now</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card-section {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-center {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 2rem;
  }

  .card-title h6 {
    font-size: 2.5rem;
    font-weight: 500;
  }

  .card-title p {
    font-size: 1.5rem;
    font-weight: 400;
    color:#A9A9A9;
  }

  .tradebtn {
    max-width: 56%;
    border-radius: 8px;
    padding:1rem 3rem;
    background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
    box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
    backdrop-filter: blur(5px);
  }

  .tradebtn:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export default Card1;
