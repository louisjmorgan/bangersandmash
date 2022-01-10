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
      <h3>Pricing</h3>
      <p>
        We offer means-based tiered pricing:
        <ul>
          <li>£120 Normal tickets</li>
          <li>£80 Low income/Students tickets </li>
        </ul>
        We hope not to exclude anyone for financial reasons, so if you
        really can&apos;t afford either price get in touch. The price
        includes food each day at the shindig. We don&apos;t ever make
        any profit on this and any leftover money goes into making
        next year even better.
      </p>
      <h3>How to sign up</h3>
      <p>
        Just fill in the google form below. Payment is via paypal and
        the payment link is provided when you’ve completed the form:
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
