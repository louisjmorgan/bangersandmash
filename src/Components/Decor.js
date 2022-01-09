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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque dictum posuere turpis nec rutrum. Praesent lacinia
        tortor a lobortis maximus. Integer mauris odio, lacinia nec
        metus id, finibus luctus ligula. Donec nec lectus et purus
        rutrum euismod a in dolor. Aenean nec congue nibh, id iaculis
        mi. Quisque augue nulla, sodales ut egestas at, congue eu
        risus. Sed eu fermentum lacus. Phasellus porttitor augue nec
        nisi finibus vehicula.
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
