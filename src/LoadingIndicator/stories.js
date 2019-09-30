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

/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { LoadingIndicator } from './index';

class StatefulLoading extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, error: false };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ error: !this.state.error });
          }}
        >
          Toggle error
        </button>
        <button
          onClick={() => {
            this.setState({ loading: !this.state.loading });
          }}
        >
          Toggle loading
        </button>
        <LoadingIndicator
          loading={this.state.loading}
          error={this.state.error}
          {...this.props}
        />
      </div>
    );
  }
}

const ButtonStory = ({
  className,
  dark,
  ...rest
}: {
  dark: boolean,
  className: ?string,
}) => (
  <div
    style={{
      backgroundColor: dark ? '#1e1e1e' : 'transparent',
    }}
  >
    <GGButton onClick={action('button clicked')} {...rest}>
      Button
    </GGButton>
  </div>
);

ButtonStory.defaultProps = { className: null, dark: false };

storiesOf('GGButton', module)
  .add('Primary', () => <ButtonStory />)
  .add('Large', () => <ButtonStory large />)
  .add('Secondary', () => <ButtonStory secondary />)
  .add('Bouncy', () => <ButtonStory bouncy />)
  .add('Destructive', () => <ButtonStory destructive />)
  .add('White', () => <ButtonStory dark white />)
  .add('External href', () => (
    <ButtonStory hrefExternal href="https://duckduckgo.com/" />
  ));

storiesOf('LoadingIndicator', module)
  .add('Loading', () => (
    <LoadingIndicator loading>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </LoadingIndicator>
  ))
  .add('Error', () => (
    <LoadingIndicator error>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </LoadingIndicator>
  ))
  .add('Loading error', () => (
    <LoadingIndicator loading error>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </LoadingIndicator>
  ))
  .add('Loaded', () => (
    <LoadingIndicator loading={false} error={false}>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </LoadingIndicator>
  ))
  .add('Stateful', () => (
    <StatefulLoading>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </StatefulLoading>
  ));
