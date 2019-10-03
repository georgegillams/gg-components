/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, BurgerButton } from './index';

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
  .add('External href', () => (
    <ButtonStory hrefExternal href="https://duckduckgo.com/" />
  ));

storiesOf('BurgerButton', module)
  .add('Closed', () => <BurgerButton onClick={action('burger clicked')} />)
  .add('Open', () => <BurgerButton onClick={action('burger clicked')} isOpen />)
  .add('Stateful', () => <StatefulBurger />);