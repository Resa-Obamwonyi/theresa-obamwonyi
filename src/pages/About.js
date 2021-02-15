import Skill from "../components/Skill";
import HeadSection from "../components/HeadSection";
import DoubleDiv from "../components/DoubleDiv";
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
          A perfect balance of psycho and
          <span className="fit-color"> sweet</span>. A blasting of musical
          instruments of the strings and bass,
          <span className="fit-color"> graceful</span> and erratic, quiet and
          loud, crazy and <span className="fit-color">analytical</span>.
          <br /> When I think of myself, I think of the coin. Two sides,
          depending on how you flip, you see whichever face comes up.
        </p>
        <Button
          link="#"
          width="200px"
          className="btn"
          backgroundColor="#146fac"
          color="#ffffff"
        >
          Learn More
        </Button>
      </HeadSection>
      <DoubleDiv id="more"
        contentone="There is a calmness in how I work. I envy her, that is me."
        contenttwo="With a dedicated mind, I focus on what is important and push myself to the limit and beyond. I find my music and rhythm in nature, quiet streets and windy nights. 
        I hate the running and screaming and noisy affair of cities. But I live in them still.
        As an adult, my peace and calmness are found in music, quiet minimalist spaces and books."
        contentthree="I have thick slightly off black hair. 
        I love how my fingers sink into them when I massage my scalp with scented oils and lotions.
        I love how I listen to Billie, Amanda, Maverick, Burna or Sia while I wash soap suds off my eyes, The music blasting off speakers and how I drive my imaginations beyond speed limits."
      />
      <Skill />
    </div>
  );
}

export default About;
