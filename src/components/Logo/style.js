import styled from 'styled-components';


export const LogoStyle = styled.div`
  flex-basis: 60%;
  color: #14151b;
  font-size: 16px;
  font-weight: 400;
  padding: 25px 30px;

  a{
    color: #222222;
    text-decoration: none;
    font-size: 20px;
    :hover{
      border-bottom: 1px solid red;
  }
  }

  @media (max-width: 790px) {
    flex-basis: 90%;
    padding: 15px 10px;
  }

  @media (max-width: 480px) {
    flex-basis: 80%;
  }
`;
