import React from "react";
import { HeadSectionStyle } from "./style";

const HeadSection = ({ children }) => {
    return (
      <HeadSectionStyle>
        {children}
      </HeadSectionStyle>
    );
}

export default HeadSection;