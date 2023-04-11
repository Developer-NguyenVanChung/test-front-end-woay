import React from "react";
import styled from "styled-components";

const dataFooter = [
  {
    title: "menu",
    values: ["home", "about", "Contact us", "FAQ"],
  },
  {
    title: "social",
    values: ["Twitter", "Instagram", "Facebook"],
  },
  {
    title: "Legal",
    values: ["Terms of Use", "Privace Policy", "Legal Notice"],
  },
];

const Footer = () => {
  return (
    <FooterStyled>
      <div className="containt">
        <div className="left">
          <p>Content...</p>
          <p>Got questions? Reach us at hey@email.com</p>
        </div>
        <div className="right">
          {dataFooter &&
            dataFooter.map(({ title, values }) => (
              <div key={title}>
                {values.map((value, index) => (
                  <p key={index}>{value}</p>
                ))}
              </div>
            ))}
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  height: 509px;
  background-color: white;
  display: flex;
  div.containt {
    margin: auto;
    display: flex;
    div.left {
      width: 40%;
    }
    div.right {
      flex: 1;
    }
  }
`;
