import styled from "styled-components";

export const MedBlogSectionStyle = styled.div`
  flex-basis: 25%;
  margin-bottom: 50px;

  .card-wrapper {
    padding: 2%;
  }

  .card-wrapper .card {
    margin: 0 auto;
  }

  .card {
    position: relative;
    max-width: 300px;
    max-height: 500px;
    background-color: #14151b;
    border-radius: 8px;
    overflow: hidden;
    padding-bottom: 10px;
    box-shadow: 1px 2px 8px rgba(100, 100, 100, 0.1);
  }

  .image-wrapper {
    background-color: #14151b;
    width: auto;
    height: 200px;
    overflow: hidden;
  }

  img {
    object-fit: cover;
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
    padding: 20px;
    height: 300px;
  }

  .heading {
    font-size: 30px;
    font-weight: 500;
    line-height: 1;
    color: #ffffff;
  }

  .heading::after {
    content: "";
    display: block;
    margin-top: 0.5em;
    width: 30px;
    height: 5px;
    background-color: #ffffff;
  }

  .text {
    font-weight: 100;
    font-size: 16px;
    padding-top: 10px;
    line-height: 2;
    color: #ffffff;
  }

  @media (max-width: 790px) {
    flex-basis: 50%;
  }
  @media (max-width: 480px) {
    flex-basis: 100%;
  }
`;