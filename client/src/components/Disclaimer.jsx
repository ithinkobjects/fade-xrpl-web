import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const IconButton = styled(FontAwesomeIcon)`
  padding: 0 0 0 3px;
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  transition: text-shadow 0.3s;
  cursor: pointer;
  &:hover {
    color: #FFC502;
    text-shadow: 0 0 4px #FF7002;
  }

  font-size: 12px;

  @media (min-width: 600px) { /* Tablet */
    font-size: 14px;
  }

  @media (min-width: 1024px) { /* Desktop */
    font-size: 18px;
  }
`;

const Container = styled.div`
  font-family: 'Courier New', Courier, monospace;
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  padding: 1.5rem;
  margin: 0;
  text-align: left;
  text-shadow: 0 0 4px #FF7002;
  color: #FFC502;
  font-size: 12px;

  @media (min-width: 600px) { /* Tablet */
    font-size: 14px;
  }

  @media (min-width: 1024px) { /* Desktop */
    font-size: 18px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const Disclaimer = ({tDisclaimer, handleDisclaimer}) => {
  return (
    <Container>
      <Wrapper>
        <Paragraph>
          {
            tDisclaimer === 'treasury' ?
            `
              This is our community wallet, all contributions will go toward fostering the growth of $FADE through Liquidity Pool contribution, and Exchange listing cost. We ask that you please DO NOT contribute to the community wallet unless you truly can afford it. If you do decide to contribute to the community wallet you can do so by sending either $FADE or $XRP to the address.
            ` :
            `
              The developer of this website is not the creator of the token and holds no affiliation with any commercial business or entity. This website has been developed solely for educational purposes and is intended as a resource for the community, by the community. Any content, information, or material provided on this site should not be construed as financial, legal, or investment advice. The developer does not endorse or promote any commercial product or service associated with the token and is not responsible for any financial losses or risks incurred from its use. Please do your own research and exercise caution when participating in any cryptocurrency projects.
            `
          }
        </Paragraph>
        <IconButton icon={faX} onClick={handleDisclaimer}/>
      </Wrapper>
    </Container>
  );
};

export default Disclaimer;
