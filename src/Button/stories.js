/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, BurgerButton, CopyButton } from './index';

const StatefulBurger = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BurgerButton
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      isOpen={isOpen}
      {...props}
    />
  );
};

const ButtonStory = props => {
  const { className, dark, ...rest } = props;

  return (
    <div
      style={{
        backgroundColor: dark ? '#1e1e1e' : 'transparent',
      }}
    >
      <Button onClick={action('Button clicked')} {...rest}>
        Button
      </Button>
    </div>
  );
};

storiesOf('Button', module)
  .add('Primary', () => <ButtonStory />)
  .add('Large', () => <ButtonStory large />)
  .add('Secondary', () => <ButtonStory secondary />)
  .add('Bouncy', () => <ButtonStory bouncy />)
  .add('Destructive', () => <ButtonStory destructive />)
  .add('White', () => <ButtonStory dark white />)
  .add('href', () => <ButtonStory href="/test" />)
  .add('External href', () => (
    <ButtonStory hrefExternal href="https://duckduckgo.com/" />
  ))
  .add('Dumb href', () => (
    <ButtonStory hrefDumb href="https://duckduckgo.com/" />
  ));

storiesOf('BurgerButton', module)
  .add('Closed', () => <BurgerButton onClick={action('burger clicked')} />)
  .add('Open', () => <BurgerButton onClick={action('burger clicked')} isOpen />)
  .add('Stateful', () => <StatefulBurger />);

storiesOf('CopyButton', module).add('Default', () => (
  <CopyButton text="This was a JS copy test." />
));
