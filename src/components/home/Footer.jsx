import React from "react";
import styled from "styled-components";

const dataFooter = [
  {
    title: "MENU",
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
          <p className="title">Content...</p>
          <p>Got questions? Reach us at hey@email.com</p>
        </div>
        <div className="right">
          {dataFooter &&
            dataFooter.map(({ title, values }) => (
              <div key={title}>
                <p className="title">{title}</p>
                <div>
                  {values.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </div>
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
  div.containt {
    display: flex;
    padding: 160px 0 160px 155px;
    div.left {
      width: 40%;
      p {
        line-height: 140.2%;
        color: #343448;
        opacity: 0.7;
        width: 210px;
      }
      p.title {
        color: #7951f9;
        font-weight: 600;
        margin-bottom: 40px;
      }
    }
    div.right {
      flex: 1;
      display: flex;
      column-gap: 70px;
      text-transform: capitalize;
      p {
        line-height: 117.69%;
        color: #383b45;
        opacity: 0.9;
        margin-bottom: 30px;
        transition: all 0.3s ease;
        :hover {
          color: #7951f9;
          cursor: pointer;
          text-decoration: underline;
        }
      }
      p.title {
        font-weight: 600;
        font-size: 20px;
        line-height: 117.69%;
        color: #3e3e3e;
        margin-bottom: 40px;
      }
    }
  }
`;
