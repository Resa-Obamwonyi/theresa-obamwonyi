import React from 'react';
import {SkillSingleStyle} from './style'


const SkillSingle=({source, text, children})=>{
    return(
        <SkillSingleStyle>
            {/* <img src={source} alt={text} /> */}
            {children}
        </SkillSingleStyle>
    )
}



export default SkillSingle;