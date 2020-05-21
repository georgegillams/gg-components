/* @flow strict */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { LoadingIndicator } from './index';

const StatefulLoading = props => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setError(error ? null : { errorType: 'auth' });
        }}
      >
        Toggle error
      </button>
      <button
        type="button"
        onClick={() => {
          setLoading(!loading);
        }}
      >
        Toggle loading
      </button>
      <LoadingIndicator loading={loading} error={error} {...props} />
    </div>
  );
};

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
