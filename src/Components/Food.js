/* eslint-disable react/prop-types */
import React from 'react';
import Gallery from './Gallery';
import { StyledFoodText } from './Food.styled';
import { StyledHomeContainer } from './Home.styled';
import ChefParty from '../assets/food/chef_party.jpg';
import PreppingFood from '../assets/food/prepping_food.jpg';
import EatingDinner from '../assets/food/social_umbrella_huddle.jpg';
import VeganDelights from '../assets/food/vegan_delights.jpg';

const FoodText = () => {
  return (
    <StyledFoodText>
      <h3>Hungry?</h3>
      <p>
        Fresh tasty grub is provided as part of the package in a
        communal (veggie) meal each evening that’ll set you up nicely
        for the night&apos;s antics. We will cater to all dietary
        requirements - let us know what your needs are and we’ll sort
        it. We encourage you to bring your own food supplies for the
        rest of the day.
      </p>
      <p>
        If you’d like to cook breakfast or lunch for the troops one
        day please get in touch you will receive all the praise and
        admiration. The site has a wood burning pizza oven if anyone
        is handy with dough. And get ready for the techno pancakes
        dancefloor breakfast madness on Saturday morning!
      </p>
    </StyledFoodText>
  );
};

const Food = () => {
  const images = [
    {
      url: VeganDelights,
      alt: 'vegan delights',
    },
    {
      url: PreppingFood,
      alt: 'prepping food',
    },
    {
      url: ChefParty,
      alt: 'chef party',
    },
    {
      url: EatingDinner,
      alt: 'eating dinner',
    },
  ];
  return (
    <StyledHomeContainer>
      <Gallery images={images} title="Food" />
      <FoodText />
    </StyledHomeContainer>
  );
};

export default Food;
