import React from 'react';
import { Button } from './Button';

/**
 * This is a CSF (Component Story File)
 */

// The default export of a CSF file provides metadata about the stories grouped here
export default {
  // title: 'Button', // This is unique to all storybook stories
  title: 'Form/Control/Button', // This creates a Form "folder"
  component: Button,

  // This is passed as default to all stories' args
  // Each specific story's args just overrides this
  args: {
    children: 'Default content',
  },
};

// Storybook v6+
const Template = args => {
  return (
    <Button {...args} />
  );
};

// Every named export is a story no matter what, which is a possible state of a component
// export const PrimaryV5 = () => <Button variant="primary">Primary</Button>;
// export const SecondaryV5 = () => <Button variant="secondary">Secondary</Button>;
// export const SuccesV5 = () => <Button variant="success">Success</Button>;
// export const DangerV5 = () => <Button variant="danger">Danger</Button>;

// New story format (Storybook v6+) via Template
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  // children: 'Primary', // <-- This uses the "children" key from default args
};

// New story format (Storybook v6+) via Template
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

// New story format (Storybook v6+) via Template
export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success',
};

// New story format (Storybook v6+) via Template
export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger',
};
