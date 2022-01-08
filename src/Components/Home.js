/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import Gallery from './Gallery';
import {
  StyledHomeContainer,
  StyledLandingText,
  StyledHomeLinks,
  StyledLinkBox,
} from './Home.styled';
import BubbleMagic from '../assets/home/bubble_magic.jpg';
import BangersSign from '../assets/home/crowdsourced_sign.jpg';
import SmokeBomb from '../assets/home/smoke_bomb.jpg';
import RobotsHumans from '../assets/home/robots_vs_humans.jpg';
import CosyFire from '../assets/home/cosy_fire_pit.jpg';

const LandingText = () => {
  return (
    <StyledLandingText>
      <h2>Welcome to Bangers and Mash Festival 2022!</h2>
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
      <h2>Explore our...</h2>
    </StyledLandingText>
  );
};

const HomeLinks = () => {
  return (
    <StyledHomeLinks>
      <div className="links-container">
        <StyledLinkBox>
          <NavLink to="/music">Music</NavLink>
        </StyledLinkBox>
        <StyledLinkBox>
          <NavLink to="/activities">Activities</NavLink>
        </StyledLinkBox>
        <StyledLinkBox>
          <NavLink to="/decor-installations">
            Decor & Installations
          </NavLink>
        </StyledLinkBox>
        <StyledLinkBox>
          <NavLink to="/food">Food</NavLink>
        </StyledLinkBox>
        <StyledLinkBox>
          <NavLink to="/info">Other info</NavLink>
        </StyledLinkBox>
      </div>
    </StyledHomeLinks>
  );
};

const Home = () => {
  const images = [
    {
      url: BubbleMagic,
      alt: 'bubble magic',
    },
    {
      url: BangersSign,
      alt: 'bangers and mashtival sign',
    },
    {
      url: SmokeBomb,
      alt: 'smoke bomb outdoor party',
    },
    {
      url: RobotsHumans,
      alt: 'robots vs humans',
    },
    {
      url: CosyFire,
      alt: 'cosy fire',
    },
  ];
  return (
    <main>
      <StyledHomeContainer>
        <Gallery images={images} />
        <LandingText />
        <HomeLinks />
      </StyledHomeContainer>
    </main>
  );
};

export default Home;
