/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { MoneyPot } from './index';

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
