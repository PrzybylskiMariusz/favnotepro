import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import InfoText from 'components/atoms/InfoText/InfoText';

const StyledWrapper = styled.div`
  padding: 60px 160px 30px 70px;
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 70px;
  margin: 50px 0px;
`;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledWrapper>
      <Input search placeholder="Search" />
      <Heading big as="h1">
        {pageType}s
      </Heading>
      <InfoText big>12 {pageType}s</InfoText>
      <StyledGridWrapper>{children}</StyledGridWrapper>
    </StyledWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};

export default UserPageTemplate;
