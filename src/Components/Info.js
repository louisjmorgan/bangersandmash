/* eslint-disable react/prop-types */
import React from 'react';
import Gallery from './Gallery';
import { StyledInfoText } from './Info.styled';
import { StyledHomeContainer } from './Home.styled';
import CampingFields from '../assets/info/camping_fields.jpg';
import IntoWoods from '../assets/info/into_the_woods.jpg';
import SunriseFire from '../assets/info/sunrise_fire.jpg';
import CastleVigil from '../assets/info/castle_vigil.jpg';
import CampingWoods from '../assets/info/woodland_camping.jpg';

const FoodText = () => {
  return (
    <StyledInfoText>
      <h2>Other Info</h2>
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
    </StyledInfoText>
  );
};

const Food = () => {
  const images = [
    {
      url: CampingFields,
      alt: 'camping fields',
    },
    {
      url: IntoWoods,
      alt: 'wedding in woods',
    },
    {
      url: SunriseFire,
      alt: 'sunrise fire',
    },
    {
      url: CastleVigil,
      alt: 'candlelight vigil at castle',
    },
    {
      url: CampingWoods,
      alt: 'woodland camping',
    },
  ];
  return (
    <StyledHomeContainer>
      <Gallery images={images} />
      <FoodText />
    </StyledHomeContainer>
  );
};

export default Food;
