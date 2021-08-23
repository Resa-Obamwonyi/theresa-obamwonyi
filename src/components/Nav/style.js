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
        :hover{
            border-bottom: 1px solid red;
        }
    }

    @media(max-width: 790px){
        display: none;
    }
`;
