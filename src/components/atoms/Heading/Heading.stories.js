import React from 'react';
import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

export const Big = () => <Heading big>Big title</Heading>;
export const Small = () => <Heading>Small title</Heading>;
