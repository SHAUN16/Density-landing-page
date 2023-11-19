import React from "react";
import styled from "styled-components";
import frameImage1 from "../../../static/frameImage1.svg"
import frameImage2 from "../../../static/frameImage2.svg"

const Frame9 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
          <div className="container">
            <div className="frame-image">
              <img src={frameImage1} />
            </div>

            <div className="frame-image">
              <img src={frameImage2} />
            </div>

            <button className="btn">Start Earning Now</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .frame-section{
    padding:5rem 0;
  }

  .frame-center{
    max-width:80%;
    margin:0 auto;
  }

  .container{
    display:flex;
    flex-direction:column;
    gap:3rem;
    align-items:center;
    text-align:center;
  }

  .btn {
    border-radius: 8px;
    padding:0.5rem 1.5rem;
    background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
    box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
    backdrop-filter: blur(5px);
    font-size:1.1rem;
    font-weight:700;
  }

  .btn:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

`;

export default Frame9;
