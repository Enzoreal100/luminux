import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  max-width: 100vw;
  margin: 1rem 0;
  text-align: center;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Section;

