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

import { Input, TextArea } from './index';

class StatefulInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value || '', valid: null, enabled: true };
  }

  render() {
    const Component = this.props.component || Input;
    return (
      <div>
        <Component
          name="Stateful_input"
          valid={this.state.valid}
          value={this.state.value}
          enabled={this.state.enabled}
          onChange={e => this.setState({ value: e.target.value })}
          {...this.props}
        />
        {!this.state.enabled && (
          <button
            onClick={() => {
              this.setState({
                enabled: true,
              });
            }}
          >
            Enable
          </button>
        )}
        {this.state.enabled && (
          <button
            onClick={() => {
              this.setState({
                enabled: false,
              });
            }}
          >
            Disable
          </button>
        )}
        {this.state.valid !== true && (
          <button
            onClick={() => {
              this.setState({
                valid: true,
              });
            }}
          >
            Valid
          </button>
        )}
        {this.state.valid !== false && (
          <button
            onClick={() => {
              this.setState({
                valid: false,
              });
            }}
          >
            Invalid
          </button>
        )}
        {this.state.valid !== null && (
          <button
            onClick={() => {
              this.setState({
                valid: null,
              });
            }}
          >
            Reset validation
          </button>
        )}
      </div>
    );
  }
}

storiesOf('Input', module)
  .add('Default', () => <Input value="Test" />)
  .add('Valid', () => <Input value="Test" valid={true} />)
  .add('Invalid', () => <Input value="Test" valid={false} />)
  .add('Disabled', () => <Input value="Test" enabled={false} />)
  .add('Password', () => <Input type="password" value="Test" valid={true} />)
  .add('Stateful', () => <StatefulInput />);

storiesOf('TextArea', module)
  .add('Default', () => <TextArea value="Test" />)
  .add('Valid', () => <TextArea value="Test" valid={true} />)
  .add('Invalid', () => <TextArea value="Test" valid={false} />)
  .add('Disabled', () => <TextArea value="Test" enabled={false} />)
  .add('Stateful', () => <StatefulInput component={TextArea} />);
