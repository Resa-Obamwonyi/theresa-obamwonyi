import styled from 'styled-components';

export const HeadSectionStyle = styled.div`
  background-color: #14151b;
  font-size: 29px;
  min-height: 450px;
  margin: 80px 0px 50px 0px;
  padding: 30px 50px 50px 30px;
  color: #ffffff;
  text-align: center;

  .pop-color {
    color: #146fac;
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

  ${
    "" /* @media (max-width: 790px) {
    flex-basis: 100%;
    margin: 80px 5% 50px;
    text-align: center;
    h1 {
      font-size: 80px;
    }
    .intro-paragraph {
      font-size: 25px;
    }
  }

  @media (max-width: 480px) {
    flex-basis: 100%;
    margin: 50px 5% 50px;
    text-align: center;
    h1 {
      font-size: 70px;
    }
    .intro-paragraph {
      font-size: 20px;
    }
}; */
  }
`;