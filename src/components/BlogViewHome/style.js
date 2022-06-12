import styled from "styled-components";

export const BlogViewHomeStyle = styled.div`
  display: flex;
  flex: 50%;
  
  a{
      text-decoration: none;
  }

  .image-wrapper {
    background-color: #14151b;
    flex-basis: 60%;
    width: 200px;
    height: 140px;
    overflow: hidden;
  }

  img {
    height: 100%;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  img:hover {
    -webkit-transform: scale3d(1.2, 1.2, 1);
    transform: scale3d(1.2, 1.2, 1);
    transition: all 1s linear;
  }

  .text-box-wrapper {
    flex-basis: 40%;
    padding: 20px;
    height: 150px;
  }

  .heading {
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: #000;
  }
  
  .text {
    font-weight: 100;
    font-size: 16px;
    line-height: 2;
    color: #000;
  }

  @media (max-width: 790px) {
    flex: 100%;
  }
  @media (max-width: 480px) {
    flex: 100%;
  }
`;
