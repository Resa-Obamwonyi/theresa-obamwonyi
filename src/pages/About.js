import Skill from "../components/Skill";
import HeadSection from "../components/HeadSection";
import DoubleDiv from "../components/DoubleDiv";
import Collage from "../components/Collage";


const About = () => {
  return (
    <div>
      <HeadSection>
        <h1>
          Theresa
          <span className="pop-color"> "Resa" </span>
          Obamwonyi
        </h1>
        <p className="intro-paragraph">
        Fullstack Software Engineer, curious about programming and design principles, Algorithm Lover and Team Player.
         
        </p>
      </HeadSection>
      <DoubleDiv id="more"
        contentone="There is a calmness in how I work. I envy her, that is me."

        contenttwo="I am Theresa Obamwonyi, A Software Engineer with 3 years of programming Experience.
        I think programming languages are just tools that serve as a means to an end, so I try not to get fixated on them.
        In the past, I have worked with PHP, and Laravel for server side programming, But currently I work with Python,
        Javascript and React for client-side programming. 
        I am also experienced with HTML and CSS."
        
        contentthree="I am certified in a host of Software engineering polices such as Project Requirement Generation, 
        AGILE and SCRUM methodologies and Project Management. 
        I have verstile experience in Continous integration using GitHub actions and Travis CI. 
        I am also experienced in using Docker and AWS S3.
        
        I am currently learning the uses of Google Cloud services as well as Microsoft Azure. I carve out time to study
        about Data structures, Design Patterns, and writing better Algorithms,
        Food is one of my favourite things."
      />
      <Collage />
      {/* <Skill /> */}
    </div>
  );
}

export default About;
