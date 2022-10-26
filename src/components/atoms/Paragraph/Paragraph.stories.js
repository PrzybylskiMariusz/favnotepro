import React from 'react';

import Paragraph from './Paragraph';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
};

export const Default = () => (
  <Paragraph>
    Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American jazz trumpeter,
    bandleader, and composer.
  </Paragraph>
);
