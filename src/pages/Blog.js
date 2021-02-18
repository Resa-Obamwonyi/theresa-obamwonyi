import HeadSection from "../components/HeadSection";
import axios from "axios";
import BlogSection from '../components/BlogSection';



const Blog = () => {
  return (
    <div>
      <HeadSection>
        <h2>
          Medium
          <br />
          <span className="pop-color">"Twitter"</span>
          <br />
          Hashnode.
        </h2>
        <p className="intro-paragraph">
          I write about people, emotions and technology.
        </p>
      </HeadSection>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "90%",
          margin: "auto 5%",
        }}
      >
        <BlogSection />
        <BlogSection />
        <BlogSection />
        <BlogSection />
        <BlogSection />
        <BlogSection />
      </div>
    </div>
  );
}

export default Blog;
