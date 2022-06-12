import styled from "styled-components";

export const HomeResumeStyle = styled.div`
margin-top: 100px;
color: #222222;
h1{
    font-size: 36px;
    font-weight: 500;
}
p{
    font-size: 24px;
}
.wrapper{
      display: flex;
}
.title-one{
      flex-basis: 25%;
      margin-left: 10%;

}
.title-two{
    margin-left: 45%;
    a {
    font-size: 24px;
    width: 100px;
    border-bottom: 2px solid #222222;
    padding-bottom: 5px;
    text-decoration: none;
    color: #222222;
    :hover{
        pointer: cursor;
        border-bottom: 2px solid red;
        color:red;
    }
}
    
span {
    position: relative;
    top: 5px;
    left: 10px;
    }
  }
.resume{
    width: 193px;
    height: 196px;
    overflow: hidden;
}
`