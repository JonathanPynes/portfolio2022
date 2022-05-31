import React from "react";
import styled from "styled-components";

const Footer = () => {

  return (
    <FooterContainer>
      <div><p>&copy; 2022 jonpynes.com</p></div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
height: 20vh;
display: flex;
justify-content: center;
align-items: flex-end;
font-size: clamp(0.5rem, 1.5vw + 0.5rem, 1.25rem);
  div{
    font-family: SFpro;
  }
`

export default Footer;