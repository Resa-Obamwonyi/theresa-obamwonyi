import styled from 'styled-components';


export const IntroPhotoStyle = styled.div`
    padding-top: 50px;
    img{
        display: flex;
        width:60%;
        height:80%;
        float: right;
        padding: 20px 0px 50px 0px;
        clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);

}

@media(max-width: 480px){
    img{
        padding-top: 100px;
    }
}
`;
