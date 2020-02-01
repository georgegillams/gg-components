/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FormBuilder } from './index';

const formFields = [
  { id: 'field1', name: 'Field 1', validationRegex: null, show: true },
  { id: 'field2', name: 'Field 2', validationRegex: null, show: true },
  { id: 'field3', name: 'Field 3', validationRegex: null, show: true },
  {
    id: 'field4',
    name: 'Field 4',
    validationRegex: null,
    type: 'CHECKBOX',
    show: true,
  },
  {
    id: 'field5',
    name: 'Field 5',
    validationRegex: null,
    long: true,
    show: true,
  },
];

storiesOf('FormBuilder', module)
  .add('Default', () => (
    <FormBuilder formFields={formFields} entity={{}} submitLabel="Submit" />
  ))
  .add('With values', () => (
    <FormBuilder
      formFields={formFields}
      entity={{
        field1: 'test1',
        field2: 'test2',
        field3: 'test3',
        field4: true,
        field5: 'test5',
      }}
      submitLabel="Submit"
    />
  ))
  .add('With presubmit text', () => (
    <FormBuilder
      formFields={formFields}
      entity={{}}
      submitLabel="Submit"
      presubmitText="By clicking submit, you agree to have your soul split in two."
    />
  ));
