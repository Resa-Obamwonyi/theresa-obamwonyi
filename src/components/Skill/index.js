import React from 'react';
import {SkillStyle} from './style'
import SkillSingle from '../SkillSingle';
import hoodie from '../../images/hoodie.png';
import burger from '../../images/burger.png';
import quill from '../../images/quill-pen 1.png';
import headphone from '../../images/headphones 1.png';


const Skill=()=>{
    return (
      <SkillStyle>
        <SkillSingle>
          <img src={hoodie} alt="hoodie"/>
          <span>Hoodie Hoarder</span>
        </SkillSingle>

        <SkillSingle>
          <img src={burger} alt="burger"/>
          <span>Foodie</span>
          </SkillSingle>
 
        <SkillSingle>
        <img src={quill} alt="quill"/>
          <span>Scribbler</span>
        </SkillSingle>

        <SkillSingle>
        <img src={headphone} alt="headphone"/>
          <span>Music Junkie</span>
        </SkillSingle>

      </SkillStyle>
    );
}



export default Skill;