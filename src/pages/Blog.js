import HeadSection from "../components/HeadSection";
import Button from "../components/Button";
// import BlogSection from './components/BlogSection';

function Blog() {
  return (
    <div>
      <HeadSection>
        <h1>
          Medium
          <br />
          <span className="pop-color">"Twitter"</span>
          <br />
          Hashnode.
        </h1>
        <p className="intro-paragraph">
          I am passionate about building sustainable and scalable software
          applications. Efficient, Dedicated, and Creative.
          <br />A highly analytic, emphatic team player.{" "}
        </p>
        <Button
          link="#more"
          width="200px"
          className="btn"
          backgroundColor="#146fac"
          color="#ffffff"
        >
          Follow Me
        </Button>
      </HeadSection>
    </div>
  );
}

export default Blog;
