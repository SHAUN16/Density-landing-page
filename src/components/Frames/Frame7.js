import React from "react";
import styled from "styled-components";
import { experts, sponsers } from "../../data";
import Container from "../gridContainer/Container";

const Frame7 = () => {
  return (
    <Wrapper>
      <div className="frame-section">
        <div className="frame-center">
            <div className="frame-title">
                <h6>Backed by the Best.</h6>
            </div>

            <div className="container">
                {
                    sponsers.map((sponser)=>{
                        const {id, image} = sponser;
                        return <Container key = {id} image = {image}  title = ""/>
                    })
                }
            </div>

            <div className="container">
            {
                    experts.map((expert)=>{
                        const {id, image, title} = expert;
                        return <Container key = {id} image = {image}  title = {title}/>
                    })
                }
            </div>
        </div>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    .frame-section{
        padding:9rem 0;
    }

    .frame-center{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:5rem;
    }

    .frame-title h6{
        font-size:4.5rem;
        font-weight:
    }

    .container{
        display:flex;
        flex-wrap:wrap;
        gap:5rem;
        align-items:center;
        justify-content:center;
    }
`;

export default Frame7;
