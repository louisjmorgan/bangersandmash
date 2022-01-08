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
      <h2>Music</h2>
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
      <Gallery images={images} />
      <MusicText />
      <SoundcloudPreview />
    </StyledHomeContainer>
  );
};

export default Music;
