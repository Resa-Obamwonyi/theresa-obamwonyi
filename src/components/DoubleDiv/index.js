import React from "react";
import { DoubleDivStyle } from "./style";

const DoubleDiv = ({ contentone, contenttwo, contentthree}) => {
    return (
        <DoubleDivStyle>
        <div className="div-one">{contentone}</div>
            <div className="div-two">{contenttwo}
                <br />
                <br />
                {contentthree}
            </div>
      </DoubleDivStyle>
    );
}

export default DoubleDiv;
