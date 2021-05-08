import styled from 'styled-components';


export const ButtonStyle = styled.button`
  font-family: "Helvetica", sans-serif;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#14151b"};
  width: ${({ width }) => width};
  height: 50px;
  margin: 15px 20px 10px 0px;
  border-radius: 5px;
  border: none;
  a {
    text-decoration: none;
    color: ${({ color }) => (color ? color : "#ffffff")};
    font-size: 14px;
    font-weight: 400;
  }
`;
