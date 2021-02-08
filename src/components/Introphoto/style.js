import styled from 'styled-components';


export const IntroPhotoStyle = styled.div`
    flex-basis: 60%;
    img{
        float:left;
        width:100%;
        height:100%;
        clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);

}

@media(max-width: 480px){
    flex-basis: 0%;
    }
`;
