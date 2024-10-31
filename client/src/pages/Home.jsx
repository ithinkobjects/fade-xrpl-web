import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Container from '../components/styled/Container';
import Time from '../components/Time';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';


const Home = () => {
  const [disclaimer, setDisclaimer] = useState(false);
  const [tDisclaimer, setTDisclaimer] = useState('');

  const handleDisclaimer = (type) => {
    if (disclaimer) {
      setDisclaimer(false);
    } else {
      setDisclaimer(true);
    }

    setTDisclaimer(type);
  };

  return (
    <React.Fragment>
      {
        disclaimer ?
          <Disclaimer handleDisclaimer={handleDisclaimer} tDisclaimer={tDisclaimer}/> : 
          <Container $home={'true'}>
            <Time/>
            <Footer $home={'true'} handleDisclaimer={handleDisclaimer}/>
          </Container>
      }
    </React.Fragment>      
  );
};


export default Home;
