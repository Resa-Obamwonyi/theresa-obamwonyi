import React from 'react';
import {IntroPhotoStyle} from './style';


const IntroPhoto=({srcname, altname}) => {

    return (
        <IntroPhotoStyle>  
            <img src={srcname} alt={altname}/>
        </IntroPhotoStyle>
        )
}


export default IntroPhoto;
