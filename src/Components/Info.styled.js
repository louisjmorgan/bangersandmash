/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { StyledLandingText } from './Home.styled';

const StyledInfoText = styled(StyledLandingText)`
  p {
    b {
      font-weight: bold;
    }
  }
  .contact-us {
    text-align: center;
  }
`;

export { StyledInfoText };
