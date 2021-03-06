import React from "react";
import styled from "styled-components";

const About = () => {

const btnClick = () => {
    window.location.href="https://docs.google.com/document/d/1CLb9xG7KFtWdQYAG6wAsCbLa4zGD9wIwCpikg7kWYgE/export?format=pdf";
}
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>I enjoy creative endeavors such as painting, drones, and experience design.
      <br></br>
      <br></br>
         AI, AR, Blockchain, are the most interesting tech frontiers and I am excited to be a part of them.
      </p>
      <button type="button" onClick={()=> btnClick()}>Download CV</button>
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