import React from 'react';
import {StackWrapStyle} from './style';
import Stack from '../Stack';
import php from '../../images/php.png';
import django from '../../images/django.png';
import react from '../../images/react.png';
import python from '../../images/python.png';
import laravel from '../../images/laravel.png';
import js from '../../images/js.png';



const StackWrap=()=>{
    return(
        <StackWrapStyle>
        <Stack source={react} text='react'/>
        <Stack source={php} text='php'/>
        <Stack source={python} text='python'/>
        <Stack source={django} text='django'/>
        <Stack source={laravel} text='laravel'/>
        <Stack source={js} text='javascript'/>
        </StackWrapStyle>
    )
}



export default StackWrap;