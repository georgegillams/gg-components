/* eslint-disable react/prop-types */

import React, { useState } from 'react';

import { cssModules } from '../helpers/cssModules';

import STYLES from './stories.scss';

import { Checkbox } from './index';

const getClassName = cssModules(STYLES);

const StatefulCheckbox = props => {
  const [checked, setChecked] = useState(props.checked);
  const [valid, setValid] = useState(null);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <Checkbox
        name="Stateful_checkbox"
        valid={valid}
        checked={checked}
        disabled={disabled}
        onChange={e => setChecked(e.target.checked)}
        {...props}
      />
      {!disabled && (
        <button
          type="button"
          onClick={() => {
            setDisabled(true);
          }}
        >
          Disable
        </button>
      )}
      {disabled && (
        <button
          type="button"
          onClick={() => {
            setDisabled(false);
          }}
        >
          Enable
        </button>
      )}
      {valid !== true && (
        <button
          type="button"
          onClick={() => {
            setValid(true);
          }}
        >
          Valid
        </button>
      )}
      {valid !== false && (
        <button
          type="button"
          onClick={() => {
            setValid(false);
          }}
        >
          Invalid
        </button>
      )}
      {valid !== null && (
        <button
          type="button"
          onClick={() => {
            setValid(null);
          }}
        >
          Reset validation
        </button>
      )}
    </div>
  );
};

export default { title: 'Checkbox' };

export const Default = () => <Checkbox label="Test" name="Test" />;
export const Valid = () => <Checkbox label="Test" name="Test" valid />;
export const Invalid = () => (
  <Checkbox label="Test" name="Test" valid={false} />
);
export const Disabled = () => <Checkbox label="Test" name="Test" disabled />;

export const CheckedLineHeight = () => (
  <Checkbox style={{ lineHeight: '5rem' }} checked label="Test" name="Test" />
);
CheckedLineHeight.storyName = 'With extreme lineHeight';

export const ValidChecked = () => (
  <Checkbox checked label="Test" name="Test" valid />
);
ValidChecked.storyName = 'Valid checked';

export const InvalidChecked = () => (
  <Checkbox checked label="Test" name="Test" valid={false} />
);
InvalidChecked.storyName = 'Invalid checked';

export const DisabledChecked = () => (
  <Checkbox checked label="Test" name="Test" disabled />
);
DisabledChecked.storyName = 'Disabled checked';

export const WithCssVariables = () => (
  <div className={getClassName('stories__themed')}>
    <Checkbox checked label="Test" name="Test" />
  </div>
);
WithCssVariables.storyName = 'With CSS variables';

export const Stateful = () => <StatefulCheckbox label="Test" />;
