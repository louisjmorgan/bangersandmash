/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactSoundCloud from 'react-soundcloud-embedded';
import Gallery from './Gallery';
import { StyledHomeContainer } from './Home.styled';
import {
  StyledMusicText,
  StyledSoundCloudPreview,
} from './Music.styled';
import OutdoorParty from '../assets/music/colourful_party_vibes.jpg';
import DJUmbrella from '../assets/music/dj_with_audio_gear.jpg';
import SteezeGarridge from '../assets/music/steeze_and_garridge.jpg';
import DiscoBall from '../assets/music/indoor_disco.jpg';
import ChilloutDonk from '../assets/music/performance.jpg';

const MusicText = () => {
  return (
    <StyledMusicText>
      <h3>Stages</h3>
      <p>
        We have 10/10 custom built audiophile quality sound systems
        that’ll make Funktion-One seem like your nan&apos;s vacuum
        cleaner. A chill-out space with 24/7 comfy beats and ambient
        wabs is also on offer for those who need a break from the
        chaos.
      </p>
      <h3>Prepare your ears</h3>
      <p>
        Our music tastes are pretty diverse from the most melodious of
        house and the crunchiest of industrial techno to the hardest,
        silliest bangers you’ve ever heard. Basically fun,
        lip-smacking dance music to party to. Staying up past your
        bedtime is thoroughly encouraged.
      </p>
      <h3>Get involved!</h3>
      <p>
        The music you bring is the music that gets played so load up
        those USBs. We’re never short of talented DJs filling the
        dancefloor and welcome everyone from the seasoned professional
        to those who have never DJ’d before and want to give it a go!
        We encourage everyone who’s got some music they want to share
        to jump on the decks - there will be plenty of people on hand
        to help out if you’re inexperienced. This year as a new
        addition we’ll be opening up a Jam Space, so bring your best
        instruments and voice-boxes. We can do a little concert!
      </p>
      <p>
        Organisation is loose, once we’ve kicked off we put a board
        for you to sign up with your name, type of music you’ll be
        playin, and whether you’d like any technical help. We pull
        together a cohesive, fluid lineup when we’re on site.
      </p>
      <h3>Here&apos;s a taste from previous years...</h3>
    </StyledMusicText>
  );
};

const SoundcloudPreview = () => {
  return (
    <StyledSoundCloudPreview>
      <ReactSoundCloud url="https://soundcloud.com/ju4nl0ve/sets/bangers-and-mashtival?si=a6e69d20e1224c979c9feff468ddca7f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
    </StyledSoundCloudPreview>
  );
};
const Music = () => {
  const images = [
    {
      url: OutdoorParty,
      alt: 'outdoor party',
    },
    {
      url: DiscoBall,
      alt: 'disco ball',
    },
    {
      url: DJUmbrella,
      alt: 'DJ holding umbrella',
    },
    {
      url: ChilloutDonk,
      alt: 'live performance under donk sign',
    },
    {
      url: SteezeGarridge,
      alt: 'two DJs having it',
    },
  ];
  return (
    <StyledHomeContainer>
      <Gallery images={images} title="Music" />
      <MusicText />
      <SoundcloudPreview />
    </StyledHomeContainer>
  );
};

export default Music;
