import {AboutStyle} from './style';


const About = ({heading, textOne, textTwo}) => {
  return (
    <AboutStyle>
        <div class="left-div"><h1>{heading}</h1></div>

        <div className="right-div">
        <p>{textOne}</p>
        <p>{textTwo}</p>
        </div>
    </AboutStyle>
  );
}

export default About;
