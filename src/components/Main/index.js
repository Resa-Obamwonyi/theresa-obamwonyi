import React from 'react';
import {MainStyle} from './style';
import IntroPhoto from '../Introphoto';
import IntroText from '../IntroText';
import resa from '../../images/intro-photo.jpg'


const Main=() => {

    return (
        <MainStyle>
                <IntroText /> 
                <IntroPhoto srcname={resa} altname="theresa" />
        </MainStyle>
        )
}


export default Main;
