/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Mindfullness from '../assets/activities/mindfullness.jpg';

const StyledActivitiesText = styled.section`
  margin: 3rem auto;
  width: 80%;
  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 6rem;
    margin: 3rem 0;
    font-family: var(--font-secondary);
  }
  h3 {
    text-align: center;
    font-weight: 700;
    font-size: 2.5rem;
    margin: 3rem 0;
    font-family: var(--font-secondary);
  }

  p {
    width: 80%;
    margin: 0 auto;
    font-size: 1.5rem;
    font-family: var(--font-primary);
  }
`;

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
    width: 80%;

    li {
      font-family: var(--font-primary);
      border: solid 2px white;
      color: white;
      font-size: 2rem;
      padding: 1.5rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      outline: none;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export { StyledActivitiesText, StyledActivityList };
