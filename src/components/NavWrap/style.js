import styled from 'styled-components';


export const NavWrapStyle = styled.div`
  flex-basis: 35%;

  .burger {
    display: none;
  }

  @media (max-width: 790px) {
    flex-basis: 10%;

    .burger {
      display: block;
      font-size: 50px;
      padding: 20px 10px;
    }
    button {
      display: none;
    }
  }

  @media (max-width: 480px) {
    flex-basis: 20%;

    .burger {
      display: block;
      font-size: 50px;
      padding: 20px 10px;
    }
  }
`;
