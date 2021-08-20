import styled from 'styled-components';


export const ButtonStyle = styled.button`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#333333"};
  width: ${({ width }) => width};
  height: 50px;
  margin: 15px 20px 10px 0px;
  border-radius: 4px;
  border: none;
  a {
    text-decoration: none;
    color: ${({ color }) => (color ? color : "#ffffff")};
    font-size: 18px;
    font-weight: 500;
  }
`;
