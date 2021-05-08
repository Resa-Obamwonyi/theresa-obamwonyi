import styled from 'styled-components';


export const SkillSingleStyle = styled.div`
  margin: 100px 2.5%;
  width: 20%;
  font-size: 100px;
  text-align: center;
  color: #14151b;

  span {
    text-align: center;
    font-size: 20px;
    display: block;
    font-weight: 400;
  }
  @media (max-width: 790px) {
    flex-basis: 50%;
    margin: 50px 0%;
  }

  @media(max-width: 480px){
    flex-basis: 50%;
    margin: 50px 0%;
  }
`;
