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
      url: ChefParty,
      alt: 'chef party',
    },
    {
      url: PreppingFood,
      alt: 'prepping food',
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
