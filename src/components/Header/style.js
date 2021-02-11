import styled from 'styled-components';


export const HeadStyle = styled.div`
  position: fixed;
  background-color: #ffffff;
  width: 100% !important;
  z-index: 999;
  display: flex;

  .burger {
    display: none;
  }

  @media (max-width: 790px) {
    .burger {
      display: block;
      font-size: 50px;
      padding: 20px 10px;
    }
  }

  @media (max-width: 480px) {
    .burger {
      display: block;
      font-size: 50px;
      padding: 20px 10px;
    }
  }
`;
