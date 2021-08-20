import styled from 'styled-components';


export const SideNavStyle = styled.li`
    display: flex;
    padding: 6vh 25px; 
    a {
        text-decoration: none;
        color: #ffffff;
        font-size: 20px;
        font-weight: normal;
    }

    @media(max-width: 360px){
        padding: 6vh 15px;
        a{
            font-size: 16px;
        }
    }
`;
