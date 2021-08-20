import styled from 'styled-components';


export const IntroTextStyle = styled.div`
  flex-basis: 90%;
  margin-top: 120px;
  color: #222222;
  background: #E0E0E0;
  border-radius: 8px 0px 0px 0px;
  height: 450px;

  .top-title{
    margin: 80px 0px 0px 120px;
    text-align: left;
  }

  .top-title h1 {
    font-size: 72px;
    font-weight: bold;
    line-height: 98px;
    margin: 0;
  }

  .top-title h2{
    font-size: 32px;
    font-weight: 500;
    margin: 0;

  }
  
  @media (max-width: 790px) {
    flex-basis: 100%;
    margin: 120px 5% 50px;
    text-align: center;
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 480px) {
    flex-basis: 100%;
    margin: 120px 5% 100px;
    text-align: center;
    h1 {
      font-size: 35px;
    }
  }
`;
