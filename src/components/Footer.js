import React from "react";
import styled from "styled-components";
import logo from "../../static/whiteLogo.svg";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <Wrapper>
      <div className="footer-section">
        <div className="container">
          <div className="logo">
            <img src={logo} />
          </div>

          <div className="container-0">
            <div>
              <h6>Blog</h6>
              <h6>Fees</h6>
              <h6>Leaderboard</h6>
              <h6>Careers</h6>
              <h6>Contact Us</h6>
              <h6>Privacy Policy</h6>
            </div>
            <p>
              Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
              diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
              muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
              inde.
            </p>
          </div>

          <div className="social-container">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .footer-section {
    padding: 4rem 15rem;
    background-color: #229851;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .container-0 {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }

  .container-0 div {
    display: flex;
    justify-content: space-evenly;
  }

  .container-0 div > h6 {
    padding: 0.5rem;
    font-size: 1rem;
  }

  .container-0 div > p {
    text-align: center;
  }

  .social-container{
    display:flex;
    gap:1rem;
  }
`;
export default Footer;
