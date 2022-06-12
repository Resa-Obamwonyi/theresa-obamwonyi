import Main from "../components/Main";
import StackWrap from "../components/Stack Wrap";
import About from "../components/About";
import Writing from "../components/HomeWriting";
import Professional from "../components/HomeResume";

const Home = () => {
  return (
    <div>
      <Main /> 
      <About />
      <StackWrap />
      <Writing />
      <Professional />
    </div>
  );
}

export default Home;
