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

class StatefulLoadingCover extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, error: false };
  }

  render() {
    return (
      <div>
        <LoadingCover
          loadingSkeleton={CardSkeleton}
          loading={this.state.loading}
          error={this.state.error}
        >
          <Section>This content is loading.</Section>
        </LoadingCover>
        <button
          onClick={() => {
            this.setState(prevState => ({
              loading: !prevState.loading,
            }));
          }}
        >
          Toggle loading
        </button>
        <button
          onClick={() => {
            this.setState(prevState => ({
              error: !prevState.error,
            }));
          }}
        >
          Toggle error
        </button>
      </div>
    );
  }
}

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
    <LoggedOutOnly
      user={null}
      setLoginRedirect={rd => {
        console.log(`redirect set`, rd);
      }}
    >
      <Section>This is some logged-out-only content.</Section>
    </LoggedOutOnly>
  ))
  .add('Logged out only - in', () => (
    <LoggedOutOnly
      user={{ uname: 'Test' }}
      setLoginRedirect={rd => {
        console.log(`redirect set`, rd);
      }}
    >
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
