import React from "react";
import styled from "styled-components";
import personImg from "../../assets/person.png";

const Introduce = () => {
  return (
    <IntroduceStyled>
      <img src={personImg} alt="Person" />
      <div>
        <p className="title">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore
        </p>
        <p className="description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
    </IntroduceStyled>
  );
};

export default Introduce;

const IntroduceStyled = styled.section`
  height: 530px;
  padding: 38px 0 39px 78px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 588px;
    height: 453px;
  }
  div {
    width: 512px;
    p.title {
      font-weight: 700;
      font-size: 36px;
      line-height: 130%;
      color: #2d1d61;
    }
    p.description {
      line-height: 150.7%;
      color: #363049;
      opacity: 0.8;
    }
  }
`;
