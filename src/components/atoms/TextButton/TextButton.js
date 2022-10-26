import styled from 'styled-components';

const TextButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 2.7rem;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  font-family: 'Montserrat';
`;

export default TextButton;
