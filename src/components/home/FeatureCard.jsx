import React from "react";
import styled from "styled-components";

const FeatureCard = ({ value }) => {
  return (
    <FeatureCardStyled>
      <img src={value.icon} alt={value.name} />
      <h4>{value.name}</h4>
      <p>{value.description}</p>
    </FeatureCardStyled>
  );
};

export default FeatureCard;

const FeatureCardStyled = styled.article`
  width: 358px;
  height: 400px;
  background: #ffffff;
  border: 1px solid #f3f4fe;
  box-shadow: 0px 50px 115px rgba(165, 153, 209, 0.3);
  border-radius: 10px;
  padding-top: 66px;
  padding-left: 30px;
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
    border: 2px solid #7951f9;
  }
  img {
    width: 97px;
    height: 90.53px;
  }
  h4 {
    color: #352b53;
    font-weight: 600;
    font-size: 18px;
    line-height: 130%;
    margin-top: 52px;
    margin-bottom: 30px;
  }
  p {
    font-size: 14px;
    line-height: 140.2%;
    color: #363049;
  }
`;
