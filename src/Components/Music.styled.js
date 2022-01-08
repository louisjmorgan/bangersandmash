/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const StyledMusicText = styled.section`
  margin: 3rem auto;
  width: 80%;
  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 6rem;
    margin: 3rem 0;
    font-family: var(--font-secondary)
  }
  h3 {
    text-align: center;
    font-weight: 700;
    font-size: 2.5rem;
    margin: 3rem 0;
    font-family: var(--font-secondary)
  }

  p {
    width: 80%;
    margin: 0 auto;
    font-size 1.5rem;
    font-family: var(--font-primary)
  }
`;

const StyledSoundCloudPreview = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export { StyledMusicText, StyledSoundCloudPreview };
