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
      <h3>Location</h3>
      <p>
        Over 100 acres of serene woodland, in an Historic Landscape,
        on the edge of the 840 acre Merthyr Mawr National Nature
        Reserve, a rolling expanse of sand dunes, grassland and
        woodland, all fronted by 1.5km of sandy beach.
      </p>
      <p>
        Beyond the outstanding landscape there is also the privacy and
        seclusion Candleston offers. There’s so much to explore and
        absolutely no neighbours to disturb.
      </p>
      <h3>Getting There</h3>
      <p>
        We are organising a party bus to take people from London
        leaving on Friday. Please let us know when you fill out the
        form if you’d like to take us up on this. If you’re making
        your own way there either driving, cycling or walking just
        stick candleston campsite into google and it should take you
        there.
      </p>
      <p>
        If you’re taking public transport you can get a train to
        Bridgend and either get a taxi for the short (10min) journey
        to site or let us know in advance and we can sort you out a
        lift.
      </p>
      <h3>What to bring?</h3>
      <p>
        <b>Tent and camping stuff</b>
        <span>
          &nbsp;- while there are some yurts and cabins on site, these
          will be reserved for cooking/activities. Everyone is
          expected to bring a tent/van/other portable dwelling they
          can sleep in.
        </span>
      </p>
      <p>
        <b>Cutlery and plates</b>
        <span>
          &nbsp;- we will not be providing these for the communal meal
          so bring your own to avoid waiting for other people to
          finish!
        </span>
      </p>
      <p>
        <b>Seating</b>
        <span>
          &nbsp;- A camping chair if you have it and hammocks for our
          new hammock zone.
        </span>
      </p>
      <p>
        <b>Food</b>
        <span>
          &nbsp;- For lunch and breakfast. We will provide a tasty
          vegan dinner!
        </span>
      </p>
      <p>
        <b>Drinks</b>
        <span>&nbsp;- For yourself and to share!</span>
      </p>
      <p>
        <b>Wavy garms</b>
        <span>&nbsp;- Obviously.</span>
      </p>
      <p>
        <b>Wacky gizmos</b>
        <span>&nbsp;- lights, decor, instruments, you name it.</span>
      </p>
      <p>
        <b>Music stuff</b>
        <span>
          &nbsp;- relevant cables, headphones, usbs, records, wax
          cylinders, fossilized megalodon mating calls.
        </span>
      </p>
      <p>
        <b>Cash</b>
        <span>
          &nbsp;- People might be selling things and won&apos;t accept
          card.
        </span>
      </p>
      <h3>Wellbeing</h3>
      <p>
        Wellbeing is a very important part of Bangers, and we will
        have someone on-hand at all times to make sure everyone is
        partying safely, enjoying themselves and feeling good. Please
        let us know immediately if something is wrong and we will sort
        it out.
      </p>
      <p>
        We will be bringing at least one hot tub and maybe even a
        portable sauna for you to recover from a hard stomping
        session.
      </p>
      <h3>Timings</h3>
      <p>
        The first couple of days is setup which is accompanied by some
        warm up partying and the last day is packdown with some good
        vibe packdown tunes. If you want to come and help set up then
        that’s great! If you just wanna do the partying then you can
        get the best of it by being there Friday-Monday. Packdown is
        usually quite fun too with lots of friendly faces still
        majorly buzzing from the fun we’ve had.
      </p>
    </StyledInfoText>
  );
};

const Info = () => {
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
      <Gallery images={images} title="More info" />
      <FoodText />
    </StyledHomeContainer>
  );
};

export default Info;
