import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 14px 35px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.grey100};
  font-family: 'Montserrat';

  ::placeholder {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.grey300};
    letter-spacing: 1px;
  }

  ${({ search }) =>
    search &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      padding: 10px 43px;
      background-image: url(${magnifierIcon});
      background-repeat: no-repeat;
      background-position: 14px 50%;
      background-size: 14px;
    `}
`;

export default Input;
