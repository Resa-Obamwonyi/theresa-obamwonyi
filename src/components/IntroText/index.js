import React from 'react';
import {IntroTextStyle} from './style';
import Button from '../Button';



const IntroText=() => {
    
    return (
      <IntroTextStyle>
        <h1>
          Theresa Obamwonyi,
          <br />
          <span className="pop-color">Software Engineer</span>
          <br />
          and Technical Writer.
        </h1>
        <p className="intro-paragraph">
          I am passionate about building sustainable and scalable software
          applications. Efficient, Dedicated, and Creative.
          <br />A highly analytic, emphatic team player.
        </p>
        {/* <Button
          link="https://drive.google.com/file/d/1zPVfT3IH4k9pVhUpAeaY-U4dJMEFMLDa/view?usp=sharing"
          width="150px"
          className="btn"
        >
          Download Resume
        </Button> */}
        <Button
          link="/about"
          width="150px"
          className="btn"
        >
          Learn More
        </Button>
      </IntroTextStyle>
    );
}


export default IntroText;
