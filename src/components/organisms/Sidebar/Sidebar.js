import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
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
  justify-content: space-between;
  height: 100vh;
  width: 150px;
  padding: 35px 0;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  position: fixed;
  left: 0;
`;

const LogoButton = styled(IconButton)`
  width: 72px;
  height: 42px;
  background-size: 70%;
  margin: 20px 0 10vh;
`;

const StyledLogoutButton = styled(IconButton)`
  margin-top: auto;
  background-size: 55%;
`;

const StyledLinksList = styled.ul`
  list-style: none;
`;

const StyledLinkItem = styled.li`
  margin: 25px 0;
`;

const Sidebar = ({ pageType }) => (
  <StyledSidebarWrapper activeColor={pageType}>
    <LogoButton as={Link} to="/" icon={logoImage} />
    <StyledLinksList>
      <StyledLinkItem>
        <IconButton as={NavLink} to="/" icon={penIcon} activeclass="active" />
      </StyledLinkItem>
      <StyledLinkItem>
        <IconButton as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      </StyledLinkItem>
      <StyledLinkItem>
        <IconButton as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
      </StyledLinkItem>
    </StyledLinksList>
    <StyledLogoutButton as={Link} to="/login" icon={logoutIcon} />
  </StyledSidebarWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Sidebar.defaultProps = {
  pageType: 'note',
};

export default Sidebar;
