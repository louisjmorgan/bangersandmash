/* eslint-disable react/prop-types */
import React from 'react';
import Gallery from './Gallery';
import { StyledDecorText } from './Decor.styled';
import { StyledHomeContainer } from './Home.styled';
import DancefloorColour from '../assets/decor/dancefloor_colourburst.jpg';
import ErectingWonders from '../assets/decor/erecting_wonders.jpg';
import IndoorDecor from '../assets/decor/indoor_decor.jpg';
import DancingFountain from '../assets/decor/dancing_fountain_3.jpg';
import NightGlade from '../assets/decor/nighttime_glade_1.jpg';

const DecorText = () => {
  return (
    <StyledDecorText>
      <p>
        We are excited to bring you our growing line-up of
        installation art, and are proud of our vast and eclectic
        supply of decoration. Alongside dance floor decor, a selection
        of lights, smoke machines, bubble machines and lasers will be
        on hand for impromptu multi-sensory fun, wherever the party
        takes us! If you’ve got some cool stuff or would like to make
        something new, bring it down! We can help if you’d like some
        funding or support to make your dream a reality.
      </p>
    </StyledDecorText>
  );
};

const Decor = () => {
  const images = [
    {
      url: DancefloorColour,
      alt: 'colourful dancefloor',
    },
    {
      url: ErectingWonders,
      alt: 'building a light dome',
    },
    {
      url: IndoorDecor,
      alt: 'indoor party decorations',
    },
    {
      url: DancingFountain,
      alt: 'dancing fountain',
    },
    {
      url: NightGlade,
      alt: 'outdoor installations at night',
    },
  ];
  return (
    <StyledHomeContainer>
      <Gallery images={images} title="Decor & Installations" />
      <DecorText />
    </StyledHomeContainer>
  );
};

export default Decor;
