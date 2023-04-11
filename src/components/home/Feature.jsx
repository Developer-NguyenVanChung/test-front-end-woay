import React from "react";
import bgFeature from "../../assets/bg-feature.png";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import codeImg from "../../assets/code.png";
import achiveImg from "../../assets/achive.png";
import viewImg from "../../assets/view.png";


const features = [
  {
    id: 1,
    icon: codeImg,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 2,
    icon: achiveImg,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 3,
    icon: viewImg,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const Feature = () => {
  return (
    <FeatureStyled style={{ backgroundImage: `url(${bgFeature})` }}>
      <div>
        {features &&
          features.map((feature) => (
            <FeatureCard key={feature.id} value={feature} />
          ))}
      </div>
    </FeatureStyled>
  );
};

export default Feature;

const FeatureStyled = styled.section`
  height: 692px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  div {
    margin: 0 auto;
    padding-top: 180px;
    padding-left: 126px;
    padding-bottom: 126px;
    display: flex;
    justify-content: flex-start;
    column-gap: 30px;
  }
`;
