/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const StyledFoodText = styled.section`
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
    font-size: 3rem;
    margin: 3rem 0;
    font-family: var(--font-secondary)
  }

  p {
    width: 80%;
    margin: 0 auto;
    font-size 1.5rem;
    font-family: var(--font-primary);
    margin-bottom: 1.5em;
    line-height: 1.5;
  }
`;

export { StyledFoodText };
