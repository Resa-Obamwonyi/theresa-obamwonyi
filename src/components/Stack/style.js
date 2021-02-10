import styled from 'styled-components';


export const StackStyle = styled.div`
  margin: 100px 0.8%;
  width: 15%;
  
  img {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 790px) {
    width: 50%;
    margin: 30px 0%;
  }
  img {
    margin: auto 30%;
  }

  @media (max-width: 480px) {
    img {
      margin: auto 10%;
    }
  }
`;
