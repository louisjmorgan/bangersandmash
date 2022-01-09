/* eslint-disable react/prop-types */
import React from 'react';
import Gallery from './Gallery';
import {
  StyledActivitiesText,
  StyledActivityList,
} from './Activities.styled';
import { StyledHomeContainer } from './Home.styled';
import RosyPainting from '../assets/activities/rosy_panting.jpg';
import ArtsCrafts from '../assets/activities/arts_and_crafts.jpg';
import ProductionYurt from '../assets/activities/production_yurt.jpg';
import MorningYoga from '../assets/activities/morning_yoga.jpg';
import SpecsRavers from '../assets/activities/specs_ravers.jpg';

const ActivitiesText = () => {
  return (
    <StyledActivitiesText>
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
      <h3>Expect the following and more...</h3>
    </StyledActivitiesText>
  );
};

const ActivityList = () => {
  return (
    <StyledActivityList>
      <ul>
        <li>Arts and Crafts</li>
        <li>Yoga</li>
        <li>Treasure Hunts</li>
        <li>Hula Hooping</li>
        <li>Educational Workshops</li>
        <li>Music Production</li>
        <li>Board Games</li>
        <li>Outdoor Sports</li>
      </ul>
    </StyledActivityList>
  );
};

const Activities = () => {
  const images = [
    {
      url: ArtsCrafts,
      alt: 'arts and crafts',
    },
    {
      url: SpecsRavers,
      alt: 'specs ravers',
    },
    {
      url: ProductionYurt,
      alt: 'production yurt',
    },
    {
      url: RosyPainting,
      alt: 'painting a picture outside',
    },
    {
      url: MorningYoga,
      alt: 'outdoor yoga class',
    },
  ];
  return (
    <StyledHomeContainer>
      <Gallery images={images} title="Activities" />
      <ActivitiesText />
      <ActivityList />
    </StyledHomeContainer>
  );
};

export default Activities;
