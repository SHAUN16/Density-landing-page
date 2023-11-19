import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../data";
import logo from "../../static/logo.svg";
import styled from "styled-components";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const onToggle = () => {
    setShowLinks(!showLinks);
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button className="nav-toggle" onClick={onToggle}>
              <FaBars />
            </button>
          </div>
          {showLinks && (
            <div className="links-container">
              <ul className="links">
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <div className="links-container lg">
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>

            <button className="tradebtn">Trade Now</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .container {
    border-bottom: 1px solid rgba(255, 255, 255, 0);
    background: rgba(42, 93, 50, 0.2);
    backdrop-filter: blur(20px);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: white;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }

  .nav-toggle:hover {
    transform: rotate(90deg);
  }

  .logo {
    height: 30px;
  }

  .links a {
    color: #fcfcfc;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.12rem;
    display: block;
    padding: 0.5rem 1rem;
  }

  .links a:hover {
    padding-left: 1.5rem;
  }

  .lg {
    display: none;
  }

  @media screen and (min-width: 800px) {
    .nav-toggle {
      display: none;
    }

    .nav-header {
      padding: 0;
    }

    .nav-center {
      max-width: 80%;
      margin: 0 auto;
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .links-container {
      height: auto !important;
    }

    .lg {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
    }

    .links {
      display: flex;
      gap: 0.5rem;
    }

    .links a{
      padding:0;
    }

    .links a:hover{
      padding:0;
      background:transparent;
    }

    .tradebtn {
      border-radius: 8px;
      background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
      box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
      backdrop-filter: blur(5px);
    }

    .tradebtn:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;

export default Navbar;
