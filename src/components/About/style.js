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
    font-weight: 500;
  }
  p {
    font-size: 24px;
    line-height: 33px;
  }

  .about-toggle {
    font-size: 24px;
    margin-left: 35%;
    :hover{
        pointer: cursor;
    }
  }
  .about-toggle p {
    width: 120px;
    border-bottom: 2px solid #222222;
    padding-bottom: 5px;
    :hover{
        pointer: cursor;
        border-bottom: 2px solid red;
        color:red;
    }
  }

  .about-toggle span {
    position: relative;
    top: 5px;
    left: 10px;
  }
`;
