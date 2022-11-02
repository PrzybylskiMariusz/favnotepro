import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import InfoText from 'components/atoms/InfoText/InfoText';
import TextButton from 'components/atoms/TextButton/TextButton';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  min-height: 385px;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      padding: 30px;
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
    `}
`;

const StyledAvatar = styled.img`
  width: 92px;
  height: 92px;
  border: 6px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  top: 10px;
  right: 19px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <Heading>Hello Roman</Heading>
      <InfoText>3 days</InfoText>
      {cardType === 'twitter' && <StyledAvatar src="https://unavatar.io/twitter/hello_roman" />}
      {cardType === 'article' && <StyledLinkButton href="https://youtube.com/helloroman" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <div>
        <Paragraph>
          Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American jazz trumpeter,
          bandleader, and composer.
        </Paragraph>
        <TextButton>read more</TextButton>
      </div>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
