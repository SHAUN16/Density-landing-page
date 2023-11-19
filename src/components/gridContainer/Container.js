import React from "react";
import styled from "styled-components";

const Container = ({ image, title }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="image">
          <img src={image} />
        </div>
        {title !== "" && (
          <div className="title">
            <p>{title}</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    padding:3rem;
    display:flex;
    flex-direction:column;
  }
`;

export default Container;
