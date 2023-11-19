import React from "react";
import styled from "styled-components";
import frame12 from "../../../static/frame12.svg"
const Frame12 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
          <div className="container">
            <div className="frame-title">
              <h6>Get started now.</h6>
            </div>
            <img src={frame12} />
          </div>
          <button className="btn">Start Trading!</button>
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
    max-width: 80%;
    margin: 0 auto;
    text-align:center;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position:relative;
  }

  .frame-title h6 {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 5rem;
    background-image: -webkit-linear-gradient(177deg, #FFF 2.77%, rgba(255, 255, 255, 0.00) 139.85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }


  .btn{
    background: linear-gradient(269deg, #D4F938 38.89%, rgba(50, 216, 117, 0.96) 103.19%);
    width:50%;
    height:134.978px;
    margin:0 auto;
    font-size:2.5rem;
    font-weight:700;
  }
`;
export default Frame12;
