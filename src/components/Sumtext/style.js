import styled from 'styled-components';


export const SumtextStyle = styled.div`
  width: 40%;
  font-size: 25px;
  .pop-color {
    color: #ffd500;
  }
  .summary-paragraph {
    line-height: 30px;
    color: #353744;
    font-size: 20px;
    font-weight: 400;
  }
  h1 {
    font-size: 30px;
    font-weight: 400;
  }

  @media (max-width: 790px) {
    width: 90%;
    margin: auto 5%;
    text-align: center;

    h1 {
      font-size: 30px;
    }
    .summary-paragraph {
      text-align: justify;
    }
  }
`;