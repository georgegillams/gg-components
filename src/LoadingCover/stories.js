/* @flow strict */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import CardSkeleton from '../Skeletons/CardSkeleton';
import { Section } from '../Section';

import { LoadingCover } from './index';

const StatefulLoadingCover = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div>
      <LoadingCover
        loadingSkeleton={CardSkeleton}
        loading={loading}
        error={error}
      >
        <Section>This content is loading.</Section>
      </LoadingCover>
      <button
        type="button"
        onClick={() => {
          setLoading(!loading);
        }}
        onKeyPress={() => {
          setLoading(!loading);
        }}
      >
        Toggle loading
      </button>
      <button
        type="button"
        onClick={() => {
          setError(!error);
        }}
        onKeyPress={() => {
          setError(!error);
        }}
      >
        Toggle error
      </button>
    </div>
  );
};

storiesOf('Loading cover', module).add('default', () => (
  <StatefulLoadingCover />
));
