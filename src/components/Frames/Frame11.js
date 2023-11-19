import React from "react";
import styled from "styled-components";
import founders from "../../../static/founders.svg"

const Frame11 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
          <div className="container">
            <div className="frame-title">
              <h6>
                Meet the <span>Visionaries</span> behind Density.
              </h6>

              <img src={founders}/>
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
    max-width: 80%;
    margin: 0 auto;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .frame-title h6 {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom:5rem;
  }

  .frame-title span {
    color: #ebff25;
  }
`;
export default Frame11;
