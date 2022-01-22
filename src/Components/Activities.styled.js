/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Mindfullness from '../assets/activities/mindfullness.jpg';
import { StyledLandingText } from './Home.styled';

const StyledActivitiesText = styled(StyledLandingText)``;

const StyledActivityList = styled.section`
  margin: 0 auto;
  width: 100%;
  background-image: url(${Mindfullness});
  background-size: cover;
  background-position: 0 80%;
  padding: 10rem 0;
  ul {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5rem;
    max-width: 80%;
    @media only screen and (min-width: 1000px) {
      max-width: 60%;
    }

    li {
      font-family: var(--font-primary);
      border: solid 2px white;
      border-radius: 1rem;
      color: white;
      font-size: 2rem;
      padding: 1.5rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      outline: none;
      background-color: rgba(0, 0, 0, 0.4);
      text-decoration: none;
    }
  }
`;

export { StyledActivitiesText, StyledActivityList };
