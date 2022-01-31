/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { StyledLandingText } from './Home.styled';

const StyledMusicText = styled(StyledLandingText)``;

const StyledSoundCloudPreview = styled.div`
  margin: 0 auto;
`;

const StyledArtistCard = styled(StyledLandingText)`
  h4 {
    margin: 8rem auto 3rem;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    font-family: var(--font-secondary);
  }

  p {
    font-size: 1.5rem;

    margin-bottom: 3rem;
  }
`;

export { StyledMusicText, StyledSoundCloudPreview, StyledArtistCard };
