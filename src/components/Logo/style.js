import styled from 'styled-components';


export const LogoStyle = styled.div`
  flex-basis: 60%;
  color: #14151b;
  font-size: 25px;
  font-weight: 600;
  padding: 25px 30px;

  @media (max-width: 790px) {
    flex-basis: 90%;
    padding: 15px 10px;
  }

  @media (max-width: 480px) {
    flex-basis: 80%;
  }
`;
