import React from "react";
import { MedBlogSectionStyle } from "./style";
import Button from "../Button";

const MedBlogSection = ({ response }) => {
    
    return (
      <MedBlogSectionStyle>
        <div className="card-wrapper">
          <div className="card">
            <div className="image-wrapper">
              <a className="image-link" href={response.link}>
                <img src={response.thumbnail} alt={response.title} />
              </a>
            </div>
            <div className="text-box-wrapper">
              <div className="text-box">
                <h1 className="heading">{response.title}</h1>
              </div>
              <Button
                width="120px"
                backgroundColor="#ffffff"
                color="#14151b"
                link={response.link}
              >
                Read
              </Button>
            </div>
          </div>
        </div>
      </MedBlogSectionStyle>
    );
}

export default MedBlogSection;