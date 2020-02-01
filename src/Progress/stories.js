/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Progress } from './index';

const INTERACTIVE_INCREMENT = 33;

class StatefulProgress extends Component {
  constructor(props) {
    super(props);

    this.state = { progress: 0 };
  }

  render() {
    return (
      <div>
        <Progress progress={this.state.progress} {...this.props} />
        {this.state.progress < 100 && (
          <button
            onClick={() => {
              this.setState({
                progress: this.state.progress + INTERACTIVE_INCREMENT,
              });
            }}
          >
            Increment
          </button>
        )}
        {this.state.progress >= 100 && (
          <button
            onClick={() => {
              this.setState({
                progress: 0,
              });
            }}
          >
            Reset
          </button>
        )}
      </div>
    );
  }
}

storiesOf('Progress', module)
  .add('Default', () => <Progress progress={50} />)
  .add('Error', () => <Progress error progress={50} />)
  .add('Stateful', () => <StatefulProgress />);
