import styled from "styled-components";

export const SideNavWrapStyle = styled.div`
  display: none;

  @media (max-width: 790px) {
    display: flex;
    position: absolute;
    right: 0px;
    height: 100vh;
    top: 0vh;
    flex-wrap: wrap;
    flex-direction: column;
    width: 50%;
    background-color: #569acb;
    color: white;
    align-items: center;
    ${'' /* transition: transform 0.5s ease-in; */}
    ${'' /* transform: translateX(0%); */}
    ${"" /* height: 80vh; */}
  }
`;
