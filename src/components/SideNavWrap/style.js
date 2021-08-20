import styled from "styled-components";

export const SideNavWrapStyle = styled.div`
  display: none;
  @media (max-width: 790px) {
    overflow: scroll;
    display: flex;
    position: absolute;
    right: 0px;
    height: 100vh;
    top: 0vh;
    flex-wrap: wrap;
    flex-direction: column;
    width: 50%;
    background-color: #222222;
    color: white;
    align-items: center;
    transform: translateX(0);

    .open {
      transform: translateX(-100%);
      transition: transform 0.3s ease-out;
    }
  }
`;
