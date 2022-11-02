import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import IconButton from './IconButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.note};
  width: 200px;
  height: 200px;
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export const Bulb = () => <IconButton icon={bulbIcon} />;
export const BulbActive = () => <IconButton active icon={bulbIcon} />;
