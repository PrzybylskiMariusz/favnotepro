import styled, { css } from 'styled-components';

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 2.1rem;

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
      line-height: 1.8rem;
      color: ${({ theme }) => theme.color.grey300};
    `}
`;

export default InfoText;
