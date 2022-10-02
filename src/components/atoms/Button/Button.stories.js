import React from 'react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Primary = () => <Button>Hello</Button>;
export const Secondary = () => <Button secondary>Hello</Button>;
