import styled from 'styled-components';
import NightTime from '../assets/home/nighttime_panorama.jpg';

const StyledHomeContainer = styled.div`
  margin-top: 0rem;
  overflow-x: hidden;
  @media only screen and (min-width: 1200px) {
    margin-top: 0rem;
  }
`;

const StyledLandingText = styled.section`
  margin: 6rem auto;
  width: 80%;
  @media only screen and (min-width: 1000px) {
    width: 60%;
  }

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 4rem;
    margin: 8rem 0;
    font-family: var(--font-secondary);
  }

  h3 {
    text-align: center;
    font-weight: 700;
    font-size: 4rem;
    margin: 8rem auto 6rem;
    font-family: var(--font-secondary);
  }

  p {
    margin: 0 auto 1.5rem;
    font-size: 1.75rem;
    font-family: var(--font-primary);
    line-height: 1.5;
  }
`;

const StyledHomeLinks = styled.section`
  margin: 0 auto;
  width: 100%;
  overflow-x: hidden;
  background-image: url(${NightTime});
  background-size: cover;
  background-position: center;
  padding: 10rem 0;
  .links-container {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5rem;
    max-width: 80%;
  }
`;

const StyledLinkBox = styled.button`
  border: solid 2px white;
  border-radius: 1rem;
  font-size: 2rem;
  padding: 1.5rem;

  margin-right: 1.5rem;
  margin-bottom: 1rem;
  outline: none;
  background-color: rgba(0, 0, 0, 0.5);
  a {
    color: white;
    text-decoration: none;
  }
  :hover {
    transform: scale(1.1);
  }
`;

export {
  StyledHomeContainer,
  StyledLandingText,
  StyledHomeLinks,
  StyledLinkBox,
};
