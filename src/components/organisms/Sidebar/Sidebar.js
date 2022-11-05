import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import penIcon from 'assets/icons/pen.svg';
import logoutIcon from 'assets/icons/logout.svg';
import logoImage from 'assets/logo/logo.svg';
import IconButton from 'components/atoms/IconButton/IconButton';

const StyledSidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 154px;
  padding: 35px 0;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
`;

const LogoButton = styled(IconButton)`
  width: 72px;
  height: 42px;
  background-size: 70%;
  margin: 20px 0;
`;

const StyledLogoutButton = styled(IconButton)`
  background-size: 55%;
`;

const StyledLinksList = styled.ul`
  list-style: none;
`;

const StyledLinkItem = styled.li`
  margin: 25px 0;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;

  ${({ bottom }) =>
    bottom &&
    css`
      justify-content: flex-end;
      height: 50%;
    `}
`;

const Sidebar = () => (
  <StyledSidebarWrapper>
    <StyledInnerWrapper>
      <LogoButton as={Link} to="/" icon={logoImage} />
      <StyledLinksList>
        <StyledLinkItem>
          <IconButton as={Link} to="/" icon={penIcon} />
        </StyledLinkItem>
        <StyledLinkItem>
          <IconButton as={Link} to="twitters" icon={twitterIcon} />
        </StyledLinkItem>
        <StyledLinkItem>
          <IconButton as={Link} to="articles" icon={bulbIcon} />
        </StyledLinkItem>
      </StyledLinksList>
    </StyledInnerWrapper>
    <StyledInnerWrapper bottom>
      <StyledLogoutButton as={Link} to="/" icon={logoutIcon} />
    </StyledInnerWrapper>
  </StyledSidebarWrapper>
);

export default Sidebar;
