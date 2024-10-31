import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const TimeText = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);/
  text-align: center;
  color: white; 
  font-size: 13px;

  @media (min-width: 600px) { /* Tablet */
    font-size: 16px;
  }

  @media (min-width: 1024px) { /* Desktop */
    display: none;
  }
`;

const Time = ({}) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <React.Fragment>
      <TimeText>Don't fade: {currentTime}</TimeText>
    </React.Fragment>
  );
};

export default Time;
