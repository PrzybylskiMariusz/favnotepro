import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xxl : theme.fontSize.xl)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export default Heading;
