import Main from "../components/Main";
import StackWrap from "../components/Stack Wrap";
import About from "../components/About";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <div>
      <Main />
      <About heading="About Me" 
      
      textOne="I am Theresa Obamwonyi, A Software Engineer with 3 years of programming Experience.
      I think programming languages are just tools that serve as a means to an end, so I try not to get fixated on them.
      In the past, I have worked with PHP, and Laravel for server side programming, But currently I work with Python,
      Javascript and React for client-side programming. 
      I am also experienced with HTML and CSS."

      textTwo="I am certified in a host of Software engineering polices such as Project Requirement Generation, 
      AGILE and SCRUM methodologies and Project Management. 
      I have verstile experience in Continous integration using GitHub actions and Travis CI. 
      I am also experienced in using Docker and AWS S3.
      
      I am currently learning the uses of Google Cloud services as well as Microsoft Azure. I carve out time to study
      about Data structures, Design Patterns, and writing better Algorithms,
      Food is one of my favourite things."/>

      <About heading="There is a calmness in how I work. I envy her, that is me." 

      textOne="I am passionate about building sustainable and scalable software applications. 
      Efficient, Dedicated, and Creative. A highly analytic, emphatic team player."

      textTwo="With a dedicated mind, I focus on what is important and push myself to the limit and beyond. 
      I find my music and rhythm in nature, quiet streets and windy nights. I hate the running and screaming and 
      noisy affair of cities. But I live in them still. 
      As an adult, my peace and calmness are found in music, quiet minimalist spaces and books."
      />

      <StackWrap />
    </div>
  );
}

export default Home;
