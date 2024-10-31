import styled from "styled-components";


const Footer = styled.footer`
  padding: 1rem;
  margin: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  height: auto;
  width: 100vw;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);

  background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px); 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
`;


export default Footer;
