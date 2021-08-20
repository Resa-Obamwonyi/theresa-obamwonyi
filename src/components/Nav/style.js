import styled from 'styled-components';


export const NavStyle = styled.li`
    display: flex;
    float: left;
    padding:25px; 
    a {
        text-decoration: none;
        color: #222222;
        font-size: 20px;
        font-weight: normal;
    }

    @media(max-width: 790px){
        display: none;
    }
`;
