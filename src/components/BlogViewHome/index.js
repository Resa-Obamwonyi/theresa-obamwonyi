import React from "react";
import { BlogViewHomeStyle } from "./style";
import Button from "../Button";

const BlogViewHome = ({ response }) => {
    
    return (
      <BlogViewHomeStyle>
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
                <a
                  className="image-link"
                  href={`https://resa-obamwonyi.hashnode.dev/${response.slug}-${response.cuid}`}
                >
                  <h1 className="heading">{response.title}</h1>
                </a>
                </div>
              </div>
            </div>
          </div>
      </BlogViewHomeStyle>
    );
}

export default BlogViewHome;