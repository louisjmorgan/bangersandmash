/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { StyledLandingText } from './Home.styled';

const StyledTicketText = styled(StyledLandingText)`
  ul {
    margin: 1.5em 0;
    line-height: 1.5;
    list-style-type: disc;
    padding-left: 3em;
    font-weight: bold;
  }
`;

const StyledTicketForm = styled.form`
  margin: 0 auto;
  width: 100%;
`;

export { StyledTicketText, StyledTicketForm };
