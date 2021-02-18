import React from "react";
import { BlogSectionStyle } from "./style";
import Button from "../Button";

const BlogSection = ({ response }) => {
    
    return (
      <BlogSectionStyle>
          <div className="card-wrapper">
            <div className="card">
              <div className="image-wrapper">
                <a
                  className="image-link"
                  href={`https://resa-obamwonyi.hashnode.dev/${response.slug}-${response.cuid}`}
                >
                  <img src={response.coverImage} alt={response.slug} />
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
                  link={`https://resa-obamwonyi.hashnode.dev/${response.slug}-${response.cuid}`}
                >
                  Read
                </Button>
              </div>
            </div>
          </div>
      </BlogSectionStyle>
    );
}

export default BlogSection;