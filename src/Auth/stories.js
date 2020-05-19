/* @flow strict */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { CardSkeleton } from '../Skeletons';
import { Section } from '../Typography';

import {
  APIEntity,
  AdminOnly,
  DebugObject,
  EmailVerifiedOnly,
  LoadingCover,
  LoggedInOnly,
  LoggedOutOnly,
  ObjectAsList,
} from './index';

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
  .add('Admin only - out', () => (
    <AdminOnly
      user={null}
      setLoginRedirect={rd => {
        console.log(`redirect set`, rd);
      }}
    >
      <Section>This is some admin-only content.</Section>
    </AdminOnly>
  ))
  .add('Admin only - in', () => (
    <AdminOnly
      user={{ admin: true }}
      setLoginRedirect={rd => {
        console.log(`redirect set`, rd);
      }}
    >
      <Section>This is some admin-only content.</Section>
    </AdminOnly>
  ))
  .add('Logged in only - out', () => (
    <LoggedInOnly
      user={null}
      setLoginRedirect={rd => {
        console.log(`redirect set`, rd);
      }}
    >
      <Section>This is some logged-in-only content.</Section>
    </LoggedInOnly>
  ))
  .add('Logged in only - in', () => (
    <LoggedInOnly
      user={{ uname: 'Test' }}
      setLoginRedirect={rd => {
        console.log(`redirect set`, rd);
      }}
    >
      <Section>This is some logged-in-only content.</Section>
    </LoggedInOnly>
  ))
  .add('Logged out only - out', () => (
    <LoggedOutOnly user={null}>
      <Section>This is some logged-out-only content.</Section>
    </LoggedOutOnly>
  ))
  .add('Logged out only - in', () => (
    <LoggedOutOnly user={{ uname: 'Test' }}>
      <Section>This is some logged-out-only content.</Section>
    </LoggedOutOnly>
  ))
  .add('Email confirmed only - confirmed', () => (
    <EmailVerifiedOnly user={{ uname: 'Test', emailVerified: true }}>
      <Section>This is some email-confirmed-only content.</Section>
    </EmailVerifiedOnly>
  ))
  .add('Email confirmed only - unconfirmed', () => (
    <EmailVerifiedOnly user={{ uname: 'Test' }}>
      <Section>This is some email-confirmed-only content.</Section>
    </EmailVerifiedOnly>
  ))
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
