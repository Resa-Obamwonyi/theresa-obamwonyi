import styled from 'styled-components';


export const SkillSingleStyle = styled.div`
  width: 20%;
  text-align: center;
  color: #222222;
  padding: 10px 0px;

  span {
    text-align: center;
    font-size: 24px;
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
