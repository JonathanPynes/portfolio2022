import React from "react";
import styled from "styled-components";
import Background from '../assets/background.jpg'
import LinkedIn from '../assets/linkedIn.svg'
import Github from '../assets/github.svg'

const Top = () => {

  const socialMedia = [
    {
      link: "https://www.linkedin.com/in/jonpynes",
      src: LinkedIn,
      alt: "LinkedIn"
    },
    {
      link: "https://github.com/JonathanPynes",
      src: Github,
      alt: "Github"
    },
  ]

  return(
    <BackgroundContainer>
      <div>
        <h1>Jon Pynes</h1>
        <p>Frontend Engineer</p>
        <Icons>
        { socialMedia.map((soc) => {
                return (
              <a href={soc.link} target="_blank" rel="noreferrer">
                  <img src={soc.src} alt={soc.alt} />
                </a>
              )})}
        </Icons>
      </div>
    </BackgroundContainer>
  )
}

const BackgroundContainer =  styled.div`
height: 100vh;
background: url(${Background}) rgba(0, 0, 0, 0.8);
background-position: center;
background-attachment: fixed;
background-blend-mode: multiply;
display: flex;
justify-content: center;
align-items: center;

  div{
    margin: 0 0 5rem 0;
    color: #E4E4E4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1{
    margin: 0;
    font-size: clamp(2rem, 4vw + 1rem, 3rem);;
    letter-spacing: 0.5%;
  }
  p{
    margin: 14px 0 0  0;
    letter-spacing: 0.5%;
    font-size: clamp(0.5rem, 1.5vw + 0.5rem, 1.25rem);
  }
`

const Icons = styled.div`
display: flex;
flex-direction: row !important;
  a{
    padding: 16px 8px;
  }
`

export default Top;