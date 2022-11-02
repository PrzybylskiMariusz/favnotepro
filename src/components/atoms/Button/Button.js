import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.note};
  width: 224px;
  height: 48px;
  border: none;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: 'Montserrat';
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 32px;
      font-size: ${({ theme }) => theme.fontSize.xs};
    `}
`;

export default Button;
// background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'};
