import styled from "styled-components";

export const CollageStyle = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0% 50px 5%;

  .div-one {
    ${'' /* flex-basis: 39%; */}
    display: flex;
  }

  .div-two {
    ${'' /* flex-basis: 59%; */}
    display: flex;
  }

  .div-three {
    flex-basis: 25%;
  }

  .div-four {
    flex-basis: 25%;
  }

  .div-five {
    flex-basis: 25%;
  }

  .div-six {
    flex-basis: 25%;
  }

  .img1 {
    margin-left: 20%;
    margin-bottom: 3%;
    width: 50%;
  }

  .img2 {
    width: 65%;
    margin-left: 50%;
  }

  .img3 {
    margin-bottom: 3%;
    width: 50%;
    margin-right: 50%;
  }

  .img4 {
    width: 50%;
  }

  img {
    border-radius: 20px;
    width: 100%;
  }

  @media (max-width: 790px) {
  }
`;
