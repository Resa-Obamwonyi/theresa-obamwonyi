import styled from 'styled-components';


export const LogoStyle = styled.div`
    flex-basis: 65%;
    color: #14151B;
    padding-left: 30px;
    font-size: 25px;
    font-weight: 600;

    @media (max-width: 790px) {
        flex-basis: 90%;
     }

    @media(max-width: 480px){
        flex-basis: 80%;
    }
`;
