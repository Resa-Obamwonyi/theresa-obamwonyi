import React from "react";
import { HomeResumeStyle } from "./style";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomeResume = () => {

    return (
        <HomeResumeStyle>
            <div className="wrapper">
                <div className="title-one">
                    <h1>Professional Experience</h1>
                    <p>
                        Download my resume to learn more about my professional experience
                    </p>
                </div>
                {/* <div className="resume">
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vT0cqQ4cqXt6kae--xm9eLiTEZSL_Pv2oU9EG8bdPAE6z9yJhOOZpy9FpQn0nbJFykXaKDjBRJXHrae/pub?embedded=true"></iframe>
                </div> */}
                <div className="title-two">
                    <a href="/blog">
                        Download PDF
                        <span>
                            <AiOutlineArrowRight />
                        </span>
                    </a>
                </div>
            </div>
        </HomeResumeStyle>
    );
}

export default HomeResume;