import styled from 'styled-components';


export const IntroPhotoStyle = styled.div`
    padding-top: 50px;
    ${'' /* flex-basis: 60%; */}
    img{
        width:60%;
        height:80%;
        padding-top: 20px;
        ${'' /* clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%); */}

}

@media(max-width: 480px){
    img{
        padding-top: 100px;
    }
    }
`;
