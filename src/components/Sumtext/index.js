import React from 'react';
import {SumtextStyle} from './style';
import Button from '../Button';

const Sumtext=() => {

    return (
        <SumtextStyle>  
            <h1>Committed to Making things Work.<br />

            <span className="pop-color">Lifelong Learner</span></h1>
            
            <p className="summary-paragraph">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Cras sed tempus risus. Vivamus at convallis sem.
            Aliquam et posuere tortor, quis vestibulum dolor. Nunc lacinia malesuada interdum. 
            Sed id auctor elit. Proin tellus risus, hendrerit et dui vitae, scelerisque placerat lectus.
            Morbi cursus malesuada erat non pharetra.</p>

            <Button link="send-a-mail" width="150px">Send an Email</Button>
        </SumtextStyle>
        )
}


export default Sumtext;
