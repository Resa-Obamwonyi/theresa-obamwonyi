import React from "react";
import { FormStyle } from "./style";
import Button from "../Button";

const Form = () => {
  return (
    <FormStyle>
        <form>
            <div className="input-section">
                <p>Full name</p>
                <input placeholder="e.g James Bond" />
            </div>
            <div className="input-section">
                <p>Email address</p>
                <input placeholder="e.g jamesbond@gmail.com" type="email"/>
            </div>
            <div className="input-section">
                <p>Message</p>
                <textarea placeholder="Type something here..." type="message"/>
            </div>
            <div className="file">
                <p>Attach File(s)</p>
                <input type="file" name="Choose file(s)" multiple="multiple"/>
            </div>
            <Button children="Send Message" backgroundColor="#ffffff" width="539px" color="#222222"/>
        </form>
    </FormStyle>
  );
};

export default Form;
