import React from 'react';
import { StyledTicketText, StyledTicketForm } from './Tickets.styled';
import { StyledHomeContainer } from './Home.styled';
import Gallery from './Gallery';
import CampingFields from '../assets/info/camping_fields.jpg';
import IntoWoods from '../assets/info/into_the_woods.jpg';
import SunriseFire from '../assets/info/sunrise_fire.jpg';
import CastleVigil from '../assets/info/castle_vigil.jpg';
import CampingWoods from '../assets/info/woodland_camping.jpg';

const TicketForm = () => {
  return (
    <StyledTicketForm>
      <iframe
        title="Bangers and Mash Signup Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSehV7Fu4ASXkPgJAyTmTMbWdQbke11DGpzaULxWcHAFboYpHw/viewform?embedded=true"
        width="100%"
        height="520"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </StyledTicketForm>
  );
};

const TicketText = () => {
  return (
    <StyledTicketText>
      <h2>Tickets</h2>
      <p>
        Please sign up to join us this summer by completing the form
        below. We look forward to seeing you!
      </p>
    </StyledTicketText>
  );
};

const Tickets = () => {
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
    <main>
      <StyledHomeContainer>
        <Gallery images={images} title="Tickets" />
        <TicketText />
        <TicketForm />
      </StyledHomeContainer>
    </main>
  );
};

export default Tickets;
