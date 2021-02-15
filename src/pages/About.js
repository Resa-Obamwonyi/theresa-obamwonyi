import Skill from "../components/Skill";
import HeadSection from "../components/HeadSection";
import Button from "../components/Button";



function About() {
  return (
    <div>
      <HeadSection>
        <h1>
          Theresa
          <span className="pop-color"> "Resa" </span>
          Obamwonyi
        </h1>
        <p className="intro-paragraph">
          A perfect balance of psycho
          and sweet. A blasting of musical instruments of the strings and bass,
          graceful and erratic, quiet and loud, crazy and analytical.<br /> When I
          think of myself, I think of the coin. Two sides, depending on how you
          flip, you see whichever face comes up.
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
