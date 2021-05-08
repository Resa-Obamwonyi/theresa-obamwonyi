import React from 'react';
import {SumtextStyle} from './style';
import Button from '../Button';

const Sumtext=() => {

    return (
      <SumtextStyle>
        <h1>
          Committed to Making things Work,
          <br />
          <span className="pop-color">Lifelong Learner</span>
        </h1>

        <p className="summary-paragraph">
          With a dedicated mind, I focus on what is important and push myself to
          the limit and beyond. I find my music and rhythm in nature, quiet
          streets and windy nights. I hate the running and screaming and noisy
          affair of cities. But I live in them still. As an adult, my peace and
          calmness are found in music, quiet minimalist spaces and books.
        </p>

        <Button link="send-a-mail" width="150px" className="btn">
          Send an Email
        </Button>
      </SumtextStyle>
    );
}


export default Sumtext;
