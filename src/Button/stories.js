import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, BurgerButton, CopyButton } from './index';

class StatefulBurger extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  render() {
    return (
      <BurgerButton
        onClick={() => {
          this.setState({ isOpen: !this.state.isOpen });
        }}
        isOpen={this.state.isOpen}
        {...this.props}
      />
    );
  }
}

const ButtonStory = props => {
  const { className, dark, ...rest } = props;

  return (
    <div
      style={{
        backgroundColor: dark ? '#1e1e1e' : 'transparent',
      }}
    >
      <Button onClick={action('Button clicked')} {...rest}>
        {'Button'}
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
  ));

storiesOf('BurgerButton', module)
  .add('Closed', () => <BurgerButton onClick={action('burger clicked')} />)
  .add('Open', () => <BurgerButton onClick={action('burger clicked')} isOpen />)
  .add('Stateful', () => <StatefulBurger />);

storiesOf('CopyButton', module).add('Default', () => (
  <CopyButton text="This was a JS copy test." />
));
