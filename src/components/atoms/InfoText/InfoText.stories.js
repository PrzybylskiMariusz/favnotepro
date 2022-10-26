import React from 'react';

import InfoText from './InfoText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/InfoText',
  component: InfoText,
};

export const Small = () => <InfoText>3 days</InfoText>;
export const Big = () => <InfoText big>12 notes</InfoText>;
