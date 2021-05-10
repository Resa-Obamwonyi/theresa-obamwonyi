import styled from "styled-components";

export const DoubleDivStyle = styled.div`
  display: flex;
  color: #353744;

  .div-one {
    font-size: 30px;
    margin: 150px 5% 0;
    width: 40%;
    flex-basis: 50%;
  }

  .div-two {
    font-size: 16px;
    margin: 0px 5% 50px;
    width: 40%;
    flex-basis: 50%;
    line-height: 30px;
  }

  @media (max-width: 790px) {
    display: block;

    .div-one {
      font-size: 35px;
      margin: 50px 5%;
      width: 90%;
    }

    .div-two {
      font-size: 18px;
      margin: 50px 5%;
      width: 90%;
      line-height: 35px;
    }
  }
`;