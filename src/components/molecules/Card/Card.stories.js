import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.div`
  width: 454px;
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Card',
  component: Card,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export const Notes = () => <Card />;
export const Twitters = () => <Card cardType="twitter" />;
export const Articles = () => <Card cardType="article" />;
