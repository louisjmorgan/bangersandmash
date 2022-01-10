import styled from 'styled-components';
import NightTime from '../assets/home/nighttime_panorama.jpg';

const StyledHomeContainer = styled.div`
  margin-top: 0rem;
  @media only screen and (min-width: 1200px) {
    margin-top: 0rem;
  }
`;

const StyledLandingText = styled.section`
  margin: 3rem auto;
  width: 80%;
  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 4rem;
    margin: 3rem 0;
    font-family: var(--font-secondary)
  }

  h3 {
    text-align: center;
    font-weight: 700;
    font-size: 3rem;
    margin: 3rem 0;
    font-family: var(--font-secondary)
  }

  p {
    width: 80%;
    margin: 0 auto;
    font-size 1.5rem;
    font-family: var(--font-primary);
    line-height: 1.5;
    margin-bottom: 1.5em;
  }
`;

const StyledHomeLinks = styled.section`
  margin: 0 auto;
  width: 100%;
  background-image: url(${NightTime});
  background-size: cover;
  background-position: center;
  .links-container {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5rem;
    width: 80%;
  }
`;

const StyledLinkBox = styled.button`
  border: solid 2px white;
  font-size: 2rem;
  padding: 1.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  outline: none;
  background-color: rgba(0, 0, 0, 0.5);
  a {
    color: white;
  }
`;

export {
  StyledHomeContainer,
  StyledLandingText,
  StyledHomeLinks,
  StyledLinkBox,
};
