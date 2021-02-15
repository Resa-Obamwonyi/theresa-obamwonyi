import styled from "styled-components";

export const DoubleDivStyle = styled.div`
  display: flex;
  .div-one {
    font-size: 50px;
    margin: 50px 5%;
    width: 40%;
    flex-basis: 50%;
  }

  .div-two {
    font-size: 20px;
    margin: 50px 5%;
    width: 40%;
    flex-basis: 50%;
  }

  @media (max-width: 790px) {
    display: block;

    .div-one {
      font-size: 50px;
      margin: 50px 5%;
      width: 90%;
    }

    .div-two {
      font-size: 20px;
      margin: 50px 5%;
      width: 90%;
    }
  }
`;