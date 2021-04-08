// import React from 'react';
// import '../css/heading.css';
import myimg from '../../../src/background.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin ,faGithub,faWordpress,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'
// import '../css/style.css';

const About = () => {
  return (
   <div className="div">
      <h1 className="heading">About</h1>
      <h1 className="subheading">Welcome to Understanding 450 , where you have a goal  of 450 question sto achieve.</h1>
{/* <a href="https://github.com/amanchauhan112"> */}
      {/* <FontAwesomeIcon icon={faLinkedin} style={{color:"white"}}/> </a>
    */}
<div  className="content" style={{width:"500px",marginTop:"50px"}}>
      <p className="content font text" style={{float:"left"}}>We are regularly updating our site question and answers.      
    

        </p>
      </div>
        <img  src={myimg} style={{width:"300px",height:"350px",float:"right",borderRadius:"20%",marginRight:"60px"}} alt="myPic"/> 
     
    </div>
  );
};

export default About;