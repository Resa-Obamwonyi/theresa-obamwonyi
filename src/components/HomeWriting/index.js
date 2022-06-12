import { AiOutlineArrowRight } from "react-icons/ai";
import { WritingStyle } from "./style";
import ArticlesHome  from "../ArticlesHome";


const Writing = () => {
  return (
    <WritingStyle>
      <div className="wrapper">
        <div className="title-one">
          <h1>Technical Writings</h1>
          <p>
            Here, you can find my collection of technical articles to help
            developers.
          </p>
        </div>

        <div className="title-two">
          <a href="/blog">
              View All
            <span>
              <AiOutlineArrowRight />
            </span>
          </a>
        </div>
      </div>
      <ArticlesHome />
    </WritingStyle>
  );
};

export default Writing;
