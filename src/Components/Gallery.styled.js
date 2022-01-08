import styled from 'styled-components';

const StyledGallery = styled.section`
  background-color: white;
  width: 100%;
  position: relative;

  div {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      margin: 0 auto;
      height: 40vh;
      object-fit: cover;
      object-position: 0 20%;

      @media only screen and (min-width: 1200px) {
        height: 60vh;
        object-position: center;
      }
    }
  }
`;

export default StyledGallery;
