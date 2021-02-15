import Skill from "../components/Skill";
import HeadSection from "../components/HeadSection";
import Button from "../components/Button";



function About() {
  return (
    <div>
      <HeadSection>
        <h1>
          Software Engineer
          <br />
          <span className="pop-color">"Creative"</span>
          <br />
          Technical Writer.
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
          Learn More
        </Button>
      </HeadSection>
      <Skill />
    </div>
  );
}

export default About;
