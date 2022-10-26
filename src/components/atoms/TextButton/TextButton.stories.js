import React from 'react';

import TextButton from './TextButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/TextButton',
  component: TextButton,
};

export const Default = () => <TextButton>read more</TextButton>;
