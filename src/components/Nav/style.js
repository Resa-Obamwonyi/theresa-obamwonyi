import styled from 'styled-components';


export const NavStyle = styled.li`
    display: flex;
    float: left;
    padding:25px; 
    a {
        text-decoration: none;
        color: #14151B;
        font-size: 25px;
        font-weight: 600;
    }

    @media(max-width: 790px){
        display: none;
    }
`;
