import React from 'react';
import Sidebar from './Sidebar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
};

export const Notes = () => <Sidebar />;
