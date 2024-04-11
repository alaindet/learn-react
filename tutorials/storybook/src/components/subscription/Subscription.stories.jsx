import React from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';

export default {
  title: 'Form/Subscription',
};

// This is a story aggregating other stories
export const PrimarySubscription = {
  render: () => {
    return (
      <React.Fragment>
        <Input size="large" placeholder="Large size" />
        <Button variant="primary">Primary</Button>
      </React.Fragment>
    );
  },
};
