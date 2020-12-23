import styled from 'styled-components';


export const ButtonStyle = styled.button`
    background-color: #14151B;
    width: ${({width})=>width};
    height: 50px;
    margin: 10px 20px 10px 0px;
    padding: 15px;
    border-radius: 5px;
    border: none;
    a {
        text-decoration: none;
        color: #FFFFFF;
        font-size: 17px;
        font-weight: 600;
    }

`;
