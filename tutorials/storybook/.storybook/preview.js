import React from 'react';

import { Centered } from '../src/components/centered/Centered';

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// These are global decorators
export const decorators = [
  Story => (
    <Centered>
      <Story />
    </Centered>
  ),
];
