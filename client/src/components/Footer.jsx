import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import StyledFooter from './styled/Footer';
import StyledLink from './styled/Link';
import Paragraph from './styled/Paragraph';
import TextSpan from './styled/TextSpan';


const SectionDiv = styled.div`
  padding: 3px;
  margin: 0;
`;

const IconButton = styled(FontAwesomeIcon)`
  padding: 0 0 0 3px;
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  transition: text-shadow 0.3s;
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


const Footer = ({$home, $connect, handleDisclaimer}) => {
  return (
    <StyledFooter>
      
      {
        $connect ? 
          (
            <React.Fragment>
              <StyledLink to={'/'}><TextSpan $heading={'true'}>FADE</TextSpan></StyledLink>
              <SectionDiv>
                <TextSpan $notLink={'true'}>Socials: </TextSpan>
                <StyledLink to={'https://t.co/yiEFzqYSB1'} target='_blank'>
                  <TextSpan>Telelgram</TextSpan>
                </StyledLink>
                <TextSpan $notLink={'true'}>, </TextSpan>
                <StyledLink to={'https://x.com/Fade_XRPL'} target='_blank'>
                  <TextSpan>X</TextSpan>
                </StyledLink>
                <TextSpan $notLink={'true'}>.</TextSpan>
              </SectionDiv>
              <SectionDiv>
                <TextSpan $notLink={'true'}>Treasury address: rD6abAHSvqcdjVh7eppC8HA1LMQA2V8FHf.</TextSpan>
                <IconButton icon={faInfoCircle} onClick={() => {handleDisclaimer('treasury')}}/>
              </SectionDiv>
            </React.Fragment>
          ) :
          (
            <React.Fragment>
              <StyledLink to={'/'}><TextSpan $heading={'true'}>FADE</TextSpan></StyledLink>
              <StyledLink to={'https://firstledger.net/token/r4Peot5JGx6KPRX147oZ2TbRSocLdzBHvy/4641444500000000000000000000000000000000#'} target='_blank'>
                <TextSpan>Purchase the $FADE token on First Ledger.</TextSpan>
              </StyledLink>
              <StyledLink to={'/connect'}><TextSpan>Get connected with the community.</TextSpan></StyledLink>
            </React.Fragment>
          )
      }
      <Paragraph>
        <TextSpan>Read the disclaimer regarding this website.</TextSpan>
        <IconButton icon={faInfoCircle} onClick={() => {handleDisclaimer('website')}}/>
        </Paragraph>
    </StyledFooter>      
  );
};


export default Footer;
