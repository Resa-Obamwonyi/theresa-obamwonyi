import styled from 'styled-components';


export const StackWrapStyle = styled.div`
  display: flex;
  margin-top: 100px;
  .one{
    flex-basis: 28%;
    margin-left: 10%;
    }
  .two{
        flex-basis: 52%;
        display:flex;
    }
    h1{
        font-size: 36px;
        font-weight:500;
    }

  @media (max-width: 790px) {
    // flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    // flex-wrap: wrap;
    // width: 95%;
    // margin: 50px 2.5%;
  }
`;
