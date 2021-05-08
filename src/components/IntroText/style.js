import styled from 'styled-components';


export const IntroTextStyle = styled.div`
  flex-basis: 40%;
  font-size: 29px;
  text-align: center;
  margin: 170px 50px 50px 0px;
  color: #14151b;

  .pop-color {
    color: #569acb;
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
    padding-bottom: 10px;
  }

  .intro-paragraph {
    line-height: 30px;
    color: #353744;
    font-size: 20px;
    font-weight: 400;
    padding-bottom: 20px;
  }
  @media (max-width: 790px) {
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
  }
`;
