import React from 'react';
import {IntroTextStyle} from './style';
import Button from '../Button';



const IntroText=() => {
    
    return (
      <IntroTextStyle>
          <h1>
            Software Engineer
            <br />
            <span className="pop-color">"Creative"</span>
            <br />
            Technical Writer.
          </h1>
        <p className="intro-paragraph">
          I am passionate about building sustainable and scalable software
          applications. Efficient, Dedicated, and Creative.
          <br />A highly analytic, emphatic team player.
        </p>
        <Button
          link="https://drive.google.com/file/d/1zPVfT3IH4k9pVhUpAeaY-U4dJMEFMLDa/view?usp=sharing"
          width="200px"
          className="btn"
        >
          Download Resume
        </Button>
      </IntroTextStyle>
    );
}


export default IntroText;
