import React from 'react';
import {StackStyle} from './style'


const Stack=({source, text})=>{
    return(
        <StackStyle>
            <img src={source} alt={text} />
        </StackStyle>
    )
}



export default Stack;