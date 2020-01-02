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

import { Checkbox } from './index';

class StatefulCheckbox extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.checked, valid: null, enabled: true };
  }

  render() {
    return (
      <div>
        <Checkbox
          name="Stateful_checkbox"
          valid={this.state.valid}
          checked={this.state.checked}
          enabled={this.state.enabled}
          onChange={e => this.setState({ checked: e.target.checked })}
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

storiesOf('Checkbox', module)
  .add('Default', () => <Checkbox label="Test" name="Test" />)
  .add('No label', () => <Checkbox name="Test" />)
  .add('Valid', () => <Checkbox label="Test" name="Test" valid={true} />)
  .add('Invalid', () => <Checkbox label="Test" name="Test" valid={false} />)
  .add('Disabled', () => <Checkbox label="Test" name="Test" enabled={false} />)
  .add('No label checked', () => <Checkbox checked name="Test" />)
  .add('Valid checked', () => (
    <Checkbox checked label="Test" name="Test" valid={true} />
  ))
  .add('Invalid checked', () => (
    <Checkbox checked label="Test" name="Test" valid={false} />
  ))
  .add('Disabled checked', () => (
    <Checkbox checked label="Test" name="Test" enabled={false} />
  ))
  .add('Stateful', () => <StatefulCheckbox label="Test" />);
