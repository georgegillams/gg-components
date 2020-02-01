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
