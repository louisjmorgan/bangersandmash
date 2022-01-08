/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const StyledTicketText = styled.div`
    margin: 3rem auto;
    width: 80%;
    h2 {
        text-align: center;
        font-weight: 700;
        font-size: 6rem;
        margin: 3rem 0;
        font-family: var(--font-secondary)
    }
    h3 {
        text-align: center;
        font-weight: 700;
        font-size: 2.5rem;
        margin: 3rem 0;
        font-family: var(--font-secondary)
    }

    p {
        width: 80%;
        margin: 0 auto;
        font-size 2rem;
        text-align: center;
        font-family: var(--font-primary)
    }
`;

const StyledTicketForm = styled.form`
  margin: 0 auto;
  width: 80%;
`;

export { StyledTicketText, StyledTicketForm };
