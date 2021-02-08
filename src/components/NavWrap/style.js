import styled from 'styled-components';


export const NavWrapStyle = styled.div`
    display: flex;
    float: right;

    .burger{
        font-size: 50px;
        display: none;
    }

    @media(max-width: 790px){
        float: none;
        .burger{
            display: block;
            padding: 20px 150px 15px;
        }
        button{
            display: none;
        }
    }
`;
