import React from "react";
import Button from "../base/Button";
import styled from "styled-components";
import bgHero from "../../assets/bg-hero.png";

const Hero = () => {
  return (
    <HeroStyled style={{ backgroundImage: `url(${bgHero})` }}>
      <IntroduceStyled>
        <h4>Another landing page for startups</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button />
      </IntroduceStyled>
    </HeroStyled>
  );
};

export default Hero;

const HeroStyled = styled.section`
  height: 774px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

const IntroduceStyled = styled.div`
  padding-left: 140px;
  padding-top: 179px;
  max-width: 513px;
  h4 {
    font-weight: 800;
    font-size: 50px;
    line-height: 120%;
    color: #2d1d61;
  }
  p {
    font-size: 18px;
    line-height: 140.2%;
    color: #363049;
    opacity: 0.8;
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;
