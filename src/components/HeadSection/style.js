import styled from 'styled-components';

export const HeadSectionStyle = styled.div`
  background-color: #14151b;
  
  font-size: 29px;
  height: 200px;
  margin: 80px 0px 50px 0px;
  padding: 50px 50px 50px 50px;
  color: #ffffff;
  text-align: center;

  .pop-color {
    color: #146fac;
  }

  .fit-color {
    color: #ffd500;
  }

  h1 {
    font-size: 50px;
    font-weight: 400;
  }

  .intro-paragraph {
    line-height: 30px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
  }

 @media (max-width: 790px) {
    margin: 50px 0px 50px 0px;
    padding: 90px 50px 50px 30px;
    h1 {
    font-size: 40px;
    }
    .intro-paragraph {
      font-size: 20px;
      padding: 10px 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 80px 50px 50px 50px;
    h1 {
    font-size: 20px;
    }
      .intro-paragraph {
      font-size: 16px;
      padding: 10px 20px;
    }
};
  }
`;