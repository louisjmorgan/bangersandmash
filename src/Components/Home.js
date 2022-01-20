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
      <h3>15-22 June 2022</h3>
      <p>
        After a very successful 2021 event, we are returning to
        Candleston for Bangers & Mashtival 2022 this June!
      </p>
      <h3>What is Bangers & Mashtival? </h3>
      <p>
        A DIY micro-festival dedicated to celebrating all of your
        quirks, peculiarities and out-of-the-box qualities - and
        provide the support for YOU to dream big, spin stories, make
        things happen, and party with a sound group of individuals.
      </p>
      <p>
        We provide the space, materials, and gizmos needed for art and
        music, as well as plenty of activities, games, crafts & toys
        for you to get silly with. The Bangers “DIY Ethos” has always
        been about participation, and we encourage you to get
        involved, get dancing, get crafty, play music, create
        something bizarre, and frolic freely!
      </p>
      <h3>Explore our...</h3>
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
        <Gallery images={images} title="Bangers & Mashtival" />
        <LandingText />
        <HomeLinks />
      </StyledHomeContainer>
    </main>
  );
};

export default Home;
