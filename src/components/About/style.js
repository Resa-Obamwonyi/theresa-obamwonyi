import styled from "styled-components";

export const AboutStyle = styled.div`
  color: #000000;
  .wrapper {
    display: flex;
  }
  .left-div {
    flex-basis: 20%;
    margin-left: 10%;
    margin-right: 5%;
  }
  .right-div {
    flex-basis: 50%;
  }
  h1 {
    font-size: 36px;
    font-weight: normal;
  }
  p {
    font-size: 24px;
    line-height: 33px;
  }

  .about-toggle {
    font-size: 24px;
    margin-left: 35%;
  }
  .about-toggle p {
    width: 130px;
    border-bottom: 2px solid #222222;
    padding-bottom: 5px;
  }

  .about-toggle span {
    position: relative;
    top: 5px;
    left: 10px;
  }
`;
