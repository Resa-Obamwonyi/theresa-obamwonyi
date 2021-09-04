import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: #222222;
  color: #ffffff;
  font-size: 20px;
  margin-top: 100px;
  padding-bottom: 50px;
  span {
    display: block;
    font-size: 18px;
    text-align: center;
  }
  .top-section {
    display: flex;
  }
  .handles {
    flex-basis: 40%;
    width: 60%;
    margin-left: 10%;
    margin-right: 30%;
    h1 {
      font-size: 36px;
      font-weight: 500;
    }
    p {
      font-size: 24px;
      font-weight: 400;
    }
  }
  .socials{
    font-size: 30px;
    display: flex;
    a{
      text-decoration: none;
      color: inherit;
    }
  }
  .social{
    margin: auto 10px;
  }
`;
