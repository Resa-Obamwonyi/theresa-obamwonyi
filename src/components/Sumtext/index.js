import React from 'react';
import {SumtextStyle} from './style';
import Button from '../Button';

const Sumtext=() => {

    return (
        <SumtextStyle>  
            <h1>Software Engineer<br /> 
            <span className="pop-color">Writer</span><br />
            Technical Editor.</h1>
            <p className="intro-paragraph">I am passionate about building sustainable and scalable software applications. 
            Efficient, Dedicated, and Creative.<br />
             A highly analytic, emphatic team player. </p>
            <Button link="download-resume" width="200">Download Resume</Button>
        </SumtextStyle>
        )
}


export default Sumtext;
