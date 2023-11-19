import React from "react";
import styled from "styled-components";
import phone1 from "../../../static/phone1.png"
import phone2 from "../../../static/phone2.png"
import phone3 from "../../../static/phone3.png"
import Card1 from "../Cards/Card1";
import { cardData } from "../../data";

const Frame6 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
          <div className="frame-title">
            <h6>
              Derivates made simple in <span>3 Easy</span> Steps
            </h6>
          </div>
          <div className="container">
            <div className="container-0">
              <img src={phone1} />
              <Card1 cardData = {cardData[0]}/>
            </div>
            <div className="container-0">
              <img src={phone2} />
              <Card1 cardData = {cardData[1]}/>
            </div>
            <div className="container-0">
              <img src={phone3} />
              <Card1 cardData = {cardData[2]}/>
            </div>
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
    max-width: 65%;
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
  }

  .frame-title span {
    color: #ebff25;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 3rem;
  }
  .container-0 {
    display: flex;
    justify-content: space-between;
    gap:5rem;
  }
  
  .container-0 img{
    width:60%;
    height:auto;
  }

`;
export default Frame6;
