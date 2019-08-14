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

import MoneyPot from './index';

const INTERACTIVE_INCREMENT = 1300;

class StatefulMoneyPot extends Component {
  constructor(props) {
    super(props);

    this.state = { expected: 0, balance: 0 };
  }

  render() {
    return (
      <div>
        <MoneyPot
          name="Test"
          balance={this.state.balance}
          goalAmount={6000}
          markerPosition={this.state.expected}
          shortfall={this.state.balance < this.state.expected}
          {...this.props}
        />
        {this.state.expected < 100 && (
          <button
            onClick={() => {
              this.setState({
                expected: this.state.expected + 30,
              });
            }}
          >
            Increment expected amount
          </button>
        )}
        {this.state.expected >= 100 && (
          <button
            onClick={() => {
              this.setState({
                expected: 0,
              });
            }}
          >
            Reset expected amount
          </button>
        )}
        {this.state.balance < 6500 && (
          <button
            onClick={() => {
              this.setState({
                balance: this.state.balance + INTERACTIVE_INCREMENT,
              });
            }}
          >
            Increment balance
          </button>
        )}
        {this.state.balance >= 6500 && (
          <button
            onClick={() => {
              this.setState({
                balance: 0,
              });
            }}
          >
            Reset balance
          </button>
        )}
      </div>
    );
  }
}

storiesOf('MoneyPot', module)
  .add('Default', () => (
    <MoneyPot name="Test" balance={50} goalAmount={70} markerPosition={20} />
  ))
  .add('Shortfall', () => (
    <MoneyPot
      name="Test"
      shortfall
      balance={50}
      goalAmount={70}
      markerPosition={80}
    />
  ))
  .add('Stateful', () => <StatefulMoneyPot />);
