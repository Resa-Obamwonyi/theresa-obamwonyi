import React from 'react';
import {SkillSingleStyle} from './style'


const SkillSingle=({source, text})=>{
    return(
        <SkillSingleStyle>
            <img src={source} alt={text} />
            <p></p>
        </SkillSingleStyle>
    )
}



export default SkillSingle;