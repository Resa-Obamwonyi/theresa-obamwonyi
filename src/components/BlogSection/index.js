import React from "react";
import { BlogSectionStyle } from "./style";
import Button from "../Button";

const BlogSection = ({postlink, imageurl, alt, title, synopsis}) => {
    return (
      <BlogSectionStyle>
        <div class="card-wrapper">
          <div class="card">
            <div class="image-wrapper">
              <a class="image-link" href={postlink}>
                <img
                  src={imageurl}
                  alt={alt}
                />
              </a>
            </div>
            <div class="text-box-wrapper">
              <div class="text-box">
                <h1 class="heading">{title}</h1>

                <p class="text">
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