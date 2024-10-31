import styled from "styled-components";


const Container = styled.div`
  font-family: 'Courier New', Courier, monospace;
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;

  ${
    ({$home, $connect}) => {
      let bgImg;
      if ($home) {
        bgImg = `background-image: url('dist/fadespace.png');`
      } else if ($connect) {
        bgImg = `background-image: url('dist/fadeblimp.png');`
      };
      return (
        ` 
          @media (min-width: 1024px) { /* Desktop */
            ${bgImg}
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            font-size: 20px;
          }
        `
      );
    }
  }


`;


export default Container;
