import React from 'react';
import {SkillStyle} from './style'
import SkillSingle from '../SkillSingle';
import { FaFeather } from "react-icons/fa";
import { GiHoodie, GiMusicalNotes } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";

const Skill=()=>{
    return (
      <SkillStyle>
        <SkillSingle>
          <GiHoodie />
          <span>Hoodie Hoarder</span>
        </SkillSingle>

        <SkillSingle>
          <IoFastFoodSharp />
          <span>Foodie</span>
          </SkillSingle>
 
        <SkillSingle>
          <FaFeather />
          <span>Scribbler</span>
        </SkillSingle>

        <SkillSingle>
          <GiMusicalNotes />
          <span>Music Junkie</span>
        </SkillSingle>

      </SkillStyle>
    );
}



export default Skill;