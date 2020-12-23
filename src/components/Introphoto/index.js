import React from 'react';
import {IntroPhotoStyle} from './style';
import resa from '../intro-photo.jpg'


const IntroPhoto=() => {

    return (
        <IntroPhotoStyle>  
            <img src={resa} alt="theresa"/>
        </IntroPhotoStyle>
        )
}


export default IntroPhoto;
