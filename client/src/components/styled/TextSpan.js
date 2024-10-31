import styled from 'styled-components';


const TextSpan = styled.span`
  padding: 0;
  margin: 0;
  font-size: 12px;
  ${({$notLink}) => $notLink ? 'color: white;': null}

  @media (min-width: 600px) { /* Tablet */
    font-size: 14px;
  }

  @media (min-width: 1024px) { /* Desktop */
    font-size: 18px;
  }

  ${({$heading}) => {
    if ($heading) {
      return (
        `
          font-size: 19px;

          @media (min-width: 600px) { /* Tablet */
            font-size: 21px;
          }
          @media (min-width: 1024px) { /* Desktop */
            font-size: 25px;
          } 
        `
      );
    }
  }}
`;

export default TextSpan;
