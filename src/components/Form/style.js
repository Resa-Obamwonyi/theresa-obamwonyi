import styled from "styled-components";

export const FormStyle = styled.div`
flex-basis: 55%;
width: 519px;

p{
    font-size: 18px;
    padding: 0;
    margin: 0;
}
input{
    background: inherit;
    border: none;
    width: inherit;
    height: 40px;
    padding: auto 10px;
    font-size: 24px;
    color: #ffffff;
}

textarea:focus, input:focus{
    outline: none;
}

.input-section{
    background: #3D3D3D;
    margin: 16px 0px;
    padding: 10px;
    width: 519px;
}

textarea{
    height: 180px;
    width: inherit;
    background: inherit;
    border: none;
    font-size: 24px;
    color: #ffffff;
    resize: none;
}

.file{
    p{
        padding-left: 10px;
    }
    input{
        height: 48px;
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    input::file-selector-button{
        background: #333333;
        border: none;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 4px;
        font-family: 'Darker Grotesque', sans-serif;
        margin-right: 15px;
    }
}
`;
