import React from "react";
import serviceBg from "../../assets/bg-service.png";
import styled from "styled-components";
import Button from "../base/Button";

const Service = () => {
  return (
    <ServiceStyled style={{ backgroundImage: `url(${serviceBg})` }}>
      <div>
        <p>Interested in our Services?</p>
        <Button
          width="272px"
          height="74px"
          rounded="0"
          boxShadow="0px 40px 70px rgba(65, 24, 162, 0.25)"
        />
      </div>
    </ServiceStyled>
  );
};

export default Service;

const ServiceStyled = styled.section`
  height: 460px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  div {
    margin: auto;
    text-align: center;
    p {
      font-weight: 600;
      font-size: 38px;
      line-height: 138.7%;
      color: #2d1d61;
      margin-bottom: 70px;
    }
  }
`;
