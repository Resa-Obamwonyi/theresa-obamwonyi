import styled from 'styled-components';

export const HeadSectionStyle = styled.div`
  background-color: #14151b;
  font-size: 29px;
  min-height: 450px;
  margin: 80px 0px 50px 0px;
  padding: 70px 50px 0px 50px;
  color: #ffffff;
  text-align: center;

  .pop-color {
    color: #146fac;
  }

  .fit-color {
    color: #ffd500;
  }

  h1 {
    font-size: 60px;
  }

  .intro-paragraph {
    line-height: 30px;
    color: #ffffff;
    font-size: 22px;
    font-weight: 400;
  }

 @media (max-width: 790px) {
    margin: 50px 0px 50px 0px;
    padding: 70px 50px 30px 30px;
    .intro-paragraph {
      font-size: 20px;
      padding: 10px 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 50px 50px 30px 50px;
};
  }
`;