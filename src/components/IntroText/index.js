import React from 'react';
import {IntroTextStyle} from './style';
import Button from '../Button';
import Skill from '../Skill';


const IntroText=() => {
    
    return (
      <IntroTextStyle>
        <div className="top-title">
        <h1>Theresa Obamwonyi</h1>
        <h2>Software Engineer and Technical Writer</h2>
        </div>
        <Skill />
        
      </IntroTextStyle>
    );
}


export default IntroText;
