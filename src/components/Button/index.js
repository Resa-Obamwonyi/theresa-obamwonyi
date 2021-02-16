import React from 'react';
import {ButtonStyle} from './style';

const Button=({link, width, backgroundColor, color, children})=> {

    return (
      <ButtonStyle width={width} backgroundColor={backgroundColor} color={color}>
        <a href={link}>{children}</a>
      </ButtonStyle>
    );
}


export default Button;
