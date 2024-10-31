import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
  padding: 3px;
  margin: 0;
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  transition: text-shadow 0.3s;

  
  &:hover {
    color: #FFC502;
    text-shadow: 0 0 4px #FF7002;
  }
`;


export default StyledLink;
