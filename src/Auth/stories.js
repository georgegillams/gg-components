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

import { Section } from '../Typography';
import { AdminOnly, LoggedInOnly, LoggedOutOnly, APIEntity } from './index';

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
  .add('API entity', () => (
    <APIEntity
      entityType="Thing type"
      name="Geoff"
      entity={{
        id: 'test-01',
        timestamp: Date.now(),
        lastUpdatedTimestamp: Date.now(),
        authorId: 'Me',
        unspecifiedKey: 'testValue',
        unspecifiedObjectKey: { test1: '1', test2: '2' },
      }}
    />
  ));
