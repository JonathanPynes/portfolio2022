import React from "react";
import styled from "styled-components";
import genesisHouse from "../assets/genesisHouse.png"
import todo from "../assets/todo.png"
import shift from "../assets/shift.png"
import zenith from "../assets/zenith.png"

const Projects = () => {

  const projects = [
    { 
      title: "Genesis House",
      link: "https://www.linkedin.com/in/jonpynes",
      src: genesisHouse,
    },
    {
      title: "Shift",
      link: "https://www.shiftwithamber.com/",
      src: shift,
    },
    {
      title: "Todo",
      link: "https://tender-pike-d60a95.netlify.app",
      src: todo,
    },
    {
      title: "Zenith",
      link: "https://stoic-colden-e0a8e7.netlify.app/",
      src: zenith,
    }
  ]

  return(
    <ProjectsContainer>
      <h2>Projects</h2>
      {projects.map(project => (
      <Project href={project.link} target="_blank" rel="noreferrer">
        <img src={project.src} alt="project"/>
        <p>{project.title}</p>
      </Project>
      ))}
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.div`
margin: 100px 6% 0 6%;
display: flex;
align-items: center;
flex-direction: column;

h2{
  margin: 0;
  font-size: clamp(1.5rem, 4vw + 1rem, 2.5rem);
}

@media (min-width: 500px) {
  align-items: flex-start;
  margin: 200px 12% 0 12%;
}
`
const Project = styled.a`
margin-top: 36px;
text-decoration: none;

img{
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
  height: undefined;
  aspect-ratio: 1879 / 558;
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
}

p{
  text-align: center;
  margin: 10px 0 0 0;
  font-size: clamp(0.5rem, 2vw + 0.5rem, 1.5rem);
}

@media (min-width: 500px) {
  margin-top: 72px;
}
`
export default Projects;