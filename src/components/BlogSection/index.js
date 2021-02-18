import React from "react";
import { BlogSectionStyle } from "./style";
import Button from "../Button";

const BlogSection = ({postlink, imageurl, alt, title, synopsis}) => {
    return (
      <BlogSectionStyle>
        <div className="card-wrapper">
          <div className="card">
            <div className="image-wrapper">
              <a className="image-link" href={postlink}>
                <img
                  src={imageurl}
                  alt={alt}
                />
              </a>
            </div>
            <div className="text-box-wrapper">
              <div className="text-box">
                <h1 className="heading">{title}</h1>

                <p className="text">
                 {synopsis}
                </p>
              </div>
              <Button width="150px" link={postlink}>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </BlogSectionStyle>
    );
}

export default BlogSection;