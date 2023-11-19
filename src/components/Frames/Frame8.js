import React from "react";
import styled from "styled-components";
import expertsSay from "../../../static/expertsSay.svg"
const Frame8 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
          <div className="frame-title">
            <h6>Don’t take our word for it.</h6>
            <p>
              Hear it from our expert community of traders who have made insane
              amounts in a short amount of time
            </p>
          </div>

          <div className="image-container">
            <img src={expertsSay} alt="card-images"/>
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
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }

  .frame-title {
    width: 80%;
  }
  .frame-title h6 {
    font-size: 4.5rem;
    font-weight: 700;
    color: black;
  }

  .frame-title p {
    font-size: 1.5rem;
    font-weight: 400px;
    color: black;
  }
`;

export default Frame8;
