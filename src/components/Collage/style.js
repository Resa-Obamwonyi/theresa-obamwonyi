import styled from "styled-components";

export const CollageStyle = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0% 50px 5%;

  .div-one {
    flex-basis: 39%;
    display: flex;
    flex-direction: column;
    margin-right: 1%;
  }

  .div-two {
    flex-basis: 59%;
    display: flex;
    flex-direction: column;
    margin-left: 1%;
  }

  .div-three {
    flex-basis: 60%;
  }

  .div-four {
    flex-basis: 40%;
  }

  .div-five {
    flex-basis: 40%;
  }

  .div-six {
    flex-basis: 60%;
  }

  .img1 {
    margin-left: 20%;
    margin-bottom: 3%;
    width: 80%;
  }

  .img2 {
    width: 65%;
    margin-left: 35%;
  }

  .img3 {
    margin-bottom: 3%;
    width: 50%;
    margin-right: 30%;
  }

  .img4 {
    width: 70%;
  }

  img {
    border-radius: 20px;
    width: 100%;
  }

  @media (max-width: 790px) {
  }
`;
