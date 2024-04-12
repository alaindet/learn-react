import React from 'react';
import { Input } from './Input';

export default {
  // title: 'Input',
  title: 'Form/Control/Input', // This creates a Form "folder"
  component: Input,
};

// This is a story
export const SmallSize = {
  render: () => {
    return (
      <Input size="small" placeholder="Small size" />
    );
  },
};

// You can override the story name after declaring it
// This is needed for names not conforming to variable names (ex.: includes space)
SmallSize.storyName = 'The small input size';

// This is a story
export const MediumSize = {
  render: () => {
    return (
      <Input size="medium" placeholder="Medium size" />
    );
  },
};

// This is a story
export const LargeSize = {
  render: () => {
    return (
      <Input size="large" placeholder="Large size" />
    );
  },
};
