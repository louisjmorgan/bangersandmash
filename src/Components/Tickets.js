import React from 'react';
import { StyledTicketText, StyledTicketForm } from './Tickets.styled';
import { StyledHomeContainer } from './Home.styled';

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
  return (
    <main>
      <StyledHomeContainer>
        <TicketText />
        <TicketForm />
      </StyledHomeContainer>
    </main>
  );
};

export default Tickets;
