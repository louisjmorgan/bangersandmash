import styled from 'styled-components';

const StyledGallery = styled.section`
  background-color: var(--color-bg);
  width: 100%;
  position: relative;

  span {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 40%;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    z-index: 9999;
    font-size: 5rem;
    font-family: serif;
    text-shadow: -2px 2px 1px rgba(0, 0, 0, 0.8);
    @media only screen and (min-width: 1200px) {
      font-size: 10rem;
    }
  }
  .gradient-overlay {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0) 20%
      );
      opacity: 0.75;
    }
  }

  div {
    width: 100%;
    overflow: hidden;
    img {
      z-index: -1;
      width: 100%;
      margin: 0 auto;
      height: 40vh;
      min-height: 30rem;
      object-fit: cover;
      object-position: 0 20%;
      color: transparent;

      @media only screen and (min-width: 800px) {
        height: 50vh;
        min-height: 40rem;
      }
      @media only screen and (min-width: 1200px) {
        height: 100vh;
        object-position: center;
      }
    }
  }
`;

export default StyledGallery;
