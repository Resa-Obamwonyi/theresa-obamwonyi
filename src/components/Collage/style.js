import styled from "styled-components";

export const CollageStyle = styled.div`
  .div-one {
    display: flex;
    width: 80%;
    margin: auto 10%;
    justify-content: space-between;
  }

  .div-three {
    flex-basis: 23%;
  }

  .div-four {
    flex-basis: 23%;
  }

  .div-five {
    flex-basis: 23%;
  }

  .div-six {
    flex-basis: 23%;
  }

  ${
    "" /* .img1 {
    margin-left: 20%;
    margin-bottom: 3%;
    width: 50%;
  } */
  }

  ${"" /* .img2 {
    width: 65%;
    margin-left: 50%;
  } */}

  ${
    "" /* .img3 {
    margin-bottom: 3%;
    width: 50%;
    margin-right: 50%;
  } */
  }

  ${"" /* .img4 {
    width: 50%;
  } */}

  img {
    border-radius: 20px;
    width: 100%;
  }

  @media (max-width: 790px) {
  }
`;
