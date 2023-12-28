import React from "react";
import styled from "styled-components";

const About = () => {

const btnClick = () => {
    window.location.href="https://docs.google.com/document/d/1eHDTnohyccAK4LfaAaiWma9k04NVqN5P/export?format=pdf";
}
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>
      I am a results-driven sales leader with a solid track record of working hard to drive revenue growth and operational excellence. I have over 5 years of operational experience; including general and technology sales, team leadership, and project management.
      <br/>
      I am a UX/UI Designer and Frontend Engineer with 3 years of experience in developing user-centered web applications. I am proficient in HTML, CSS, JavaScript, React.js, and have experience in other web technologies. I have designed and conducted user research, usability testing, and wireframing.
      </p>
      <button type="button" onClick={()=> btnClick()}>Download Resume</button>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
margin: 100px 6% 0 6%;

@media (min-width: 500px) {
  align-items: flex-start;
  margin: 200px 12% 0 12%;
}

h2{
  font-family: SFpro;
  font-size: clamp(1.5rem, 4vw + 1rem, 2.5rem);
  margin: 0;
}

p{
  font-family: SFpro;
  font-size: clamp(0.5rem, 2vw + 0.5rem, 1.5rem);
  margin: 16px 0 0 0;
}

button{
  font-family: SFpro;
  cursor: pointer;
  margin: 20px 0 0 0;
  width: 180px;
  height: 38px;
  border-radius: 7px;
  border-width: 1px;
  background-color: black;
  color: #E4E4E4;
  font-size: clamp(0.5rem, 1.5vw + 0.5rem, 1.25rem);
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
 
  @media (min-width: 500px) {
    width: 224px;
    height: 48px;
  }
}
`

export default About;