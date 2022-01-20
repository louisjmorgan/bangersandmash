import styled from 'styled-components';

const StyledNavContainer = styled.nav`
  background-color: none;
  top: 0;
  width: 100vw;
  position: absolute;
  top: 0%;
  overflow-x: hidden;

  z-index: 99999;
  @media only screen and (min-width: 1200px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

/* Holds navlinks and social media buttons */
const StyledNavBar = styled.div`
  margin-top: 0rem;
  position: fixed;
  width: 100%;
  max-height: 100vh;

  left: -100%;
  z-index: 99999;
  overflow-x: hidden;
  transition: 0.2s ease-out;

  &.active {
    left: 0;
  }

  @media only screen and (min-width: 1200px) {
    position: fixed;
    left: 0;
    height: auto;
  }

  .navbar {
    background-color: white;
    margin-top: 0;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    height: auto;
    width: 100%;
    align-items: start;
    overflow-y: auto;
    overflow-x: hidden;
    @media only screen and (min-width: 1200px) {
      background: none;
      flex-direction: row;
      align-items: center;
      color: var(--color-bg);
    }
  }

  .logo {
    display: none;
    justify-self: center;

    flex-basis: fit-content;
    @media only screen and (min-width: 1200px) {
      display: block;
    }

    img {
      max-height: 4rem;
      width: auto;
      margin-bottom: -0.25rem;
    }
  }
`;

const StyledNavLinks = styled.ul`
  padding: 10rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40rem;
  height: 60%;
  width: auto;
  align-items: start;

  @media only screen and (min-width: 1200px) {
    padding: 4rem 2rem 1rem;
    display: block;
    min-height: 0;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    width: 100%;
    order: 0;
  }

  li {
    padding: 0 1.5rem;
    display: inline-block;
  }

  li :not(.selected):after {
    margin-top: 0.75rem;
    content: '';
    display: block;
    height: 0.25rem;
    width: 0px;
    transition: all 0.4s ease-out 0.1s;
  }

  li :not(.selected):hover:after,
  .selected:after {
    position: relative;
    display: block;
    margin-top: 0.75rem;
    width: 100%;
    height: 0.25rem;
    content: '';
    background-color: var(--color-text);
    cursor: pointer;
    @media only screen and (min-width: 1200px) {
      background-color: var(--color-bg);
    }
  }

  a {
    color: var(--color-text);
    font-family: var(--font-primary);
    text-decoration: none;
    font-size: 1.75rem;
    font-weight: 400;
    text-transform: lowercase;
    @media only screen and (min-width: 1200px) {
      color: inherit;
      font-size: 1.5rem;
    }
  }
`;

const StyledSocialButtons = styled.ul`
  margin-right: 3rem;
  display: flex;
  justify-content: left;
  flex-grow: none;
  width: auto;
  padding: 3rem;
  @media only screen and (min-width: 1200px) {
    margin-right: 1.5rem;
    width: 50%;
    justify-content: right;
    flex-grow: 1;
    padding: 2rem 2rem 1rem;
  }

  img {
    padding: 0 2rem;
    width: 2rem;
    height: auto;
    display: inline-block;
    @media only screen and (min-width: 1200px) {
      padding: 0 2rem;
      width: 1.5rem;
      height: auto;
    }
  }
`;

/* Holds additional UI elements introduced on mobile devices */
const StyledMobileNav = styled.div`
  display: flex;
  position: fixed;
  padding: 1rem 0;
  background-color: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  overflow: hidden;
  z-index: 99999;

  @media only screen and (min-width: 1200px) {
    display: none;
  }

  @media only screen and (min-width: 800px) {
    height: 7rem;
  }

  .hamburger {
  }

  .mobile-logo {
    display: inline-block;
    justify-self: center;
    padding: 0 2rem;

    img {
      max-height: 6rem;
      width: auto;
    }
  }
`;

const StyledHamburger = styled.button`
  display: block;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 1.25rem;
  z-index: 99999;
  padding: 3em;

  .bar {
    display: block;
    width: 2em;
    height: 0.25em;
    margin: 0.5em auto;
    transition: all 0.2s ease-in-out;
    background-color: var(--color-bg);
  }

  &.active .bar {
    background-color: var(--color-text);
  }

  &.active .bar:nth-child(2) {
    opacity: 0;
  }
  &.active .bar:nth-child(1) {
    transform: translateY(0.75em) rotate(45deg);
  }
  &.active .bar:nth-child(3) {
    transform: translateY(-0.75em) rotate(-45deg);
  }
`;

export {
  StyledNavContainer,
  StyledNavBar,
  StyledSocialButtons,
  StyledMobileNav,
  StyledHamburger,
  StyledNavLinks,
};
