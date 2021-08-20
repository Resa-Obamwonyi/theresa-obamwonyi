import styled from 'styled-components';


export const HeadStyle = styled.div`
  position: fixed;
  top: 0px;
  background-color: #ffffff;
  width: 100% !important;
  z-index: 999;
  display: flex;
  padding: 10px 0px;

  .burger {
    display: none;
  }

  @media (max-width: 790px) {
    .burger {
      display: block;
      font-size: 50px;
      padding: 5px 10px 10px;
    }
    max-height: 60px;
  }

  @media (max-width: 480px) {
    .burger {
      display: block;
      font-size: 50px;
      padding: 5px 10px 10px;
    }
  }
`;
