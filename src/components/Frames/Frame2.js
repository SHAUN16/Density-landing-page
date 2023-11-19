import React from "react";
import styled from "styled-components";
import ph1 from "../../../static/ph1.svg"
import ph2 from "../../../static/ph2.svg"
import ph3 from "../../../static/ph3.svg"

const Frame2 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
          <div className="image-container">
            <img src = {ph1} alt="phoneimage"/>
            <img src = {ph2} alt="phoneimage"/>
            <img src = {ph3} alt="phoneimage"/>
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
}

.image-container{
  display:flex;
  flex-direction:column;
  gap:7.5rem;
  align-items:center;
  justify-content:space-evenly;
}

`

export default Frame2;
