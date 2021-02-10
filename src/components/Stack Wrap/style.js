import styled from 'styled-components';


export const StackWrapStyle = styled.div`
  display: flex;
  width: 80%;
  margin: 50px 10%;

  @media (max-width: 790px) {
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    width: 95%;
    margin: 50px 2.5%;
  }
`;
