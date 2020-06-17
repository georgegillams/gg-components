/* @flow strict */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { CardSkeleton } from '../Skeletons';
import { Section } from '../Typography';

import { APIEntity, DebugObject, LoadingCover, ObjectAsList } from './index';

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

storiesOf('Auth', module)
  .add('API entity', () => (
    <APIEntity
      entityType="Thing type"
      name="Geoff"
      entity={{
        id: 'test-01',
        timestamp: new Date(2019, 5, 4, 5, 6, 7),
        lastUpdatedTimestamp: new Date(2019, 5, 5, 5, 6, 7),
        authorId: 'Me',
        unspecifiedKey: 'testValue',
        unspecifiedObjectKey: { test1: '1', test2: '2' },
      }}
    />
  ))
  .add('Object as list', () => (
    <ObjectAsList
      name="Geoff"
      value={{
        id: 'test-01',
        timestamp: new Date(2019, 10, 11, 5, 6, 7),
        lastUpdatedTimestamp: new Date(2019, 10, 11, 5, 6, 7),
        authorId: 'Me',
        unspecifiedKey: 'testValue',
        unspecifiedObjectKey: { test1: '1', test2: '2' },
      }}
    />
  ))
  .add('Debug object', () => (
    <div>
      <Section>
        Note this will only show if localStorage.showSessionDebugViews is true
      </Section>
      <DebugObject
        debugTitle="Geoff"
        debugObject={{
          id: 'test-01',
          timestamp: new Date(2019, 10, 11, 5, 6, 7),
          lastUpdatedTimestamp: new Date(2019, 10, 11, 5, 6, 7),
          authorId: 'Me',
          unspecifiedKey: 'testValue',
          unspecifiedObjectKey: { test1: '1', test2: '2' },
        }}
      />
    </div>
  ))
  .add('Loading cover', () => <StatefulLoadingCover />);
