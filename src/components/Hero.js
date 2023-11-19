import React from "react";
import styled from "styled-components";
import phone1 from "../../static/phone1.png";
import phone2 from "../../static/phone2.png";
import phone3 from "../../static/phone3.png";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-section">
        <div className="hero-center">
          <h2 className="hero-title">
            It’s time to trade, the
            <span className="gradient-text"> future.</span>
          </h2>
          <p className="hero-para">
            Trade BTC, ETH Futures with 125x leverage and earn rewards.
          </p>
        </div>

        <div className="image-container">
          <div class="top-image">
            <img src={phone2} alt="Top Image" />
          </div>
          <div className="lower-images">
            <img src={phone1} alt="Image 1" />
            <img src={phone3} alt="Image 3" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hero-section {
    padding: 5rem 0;
  }

  .hero-center {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .hero-title {
    font-size: 6rem;
    max-width: 60%;
    display: inline;
    word-wrap: normal;
    text-align: center;
    font-weight: 700;
  }

  .gradient-text {
    background-image: -webkit-linear-gradient(
      97deg,
      #d4f938 23.09%,
      #32d875 108.69%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-para {
    font-size: 1.5rem;
  }

  .image-container {
    max-width: 80%;
    margin: 0 auto;
    padding: 5rem 0;
    position: relative;
  }

  .lower-images {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container img {
    max-width: 80%;
    height: auto;
    display: block;
  }

  .top-image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Hero;
