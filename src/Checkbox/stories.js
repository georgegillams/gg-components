/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { cssModules } from '../helpers/cssModules';

import { Checkbox } from './index';
import STYLES from './stories.scss';

const getClassName = cssModules(STYLES);

class StatefulCheckbox extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.checked, valid: null, disabled: false };
  }

  render() {
    return (
      <div>
        <Checkbox
          name="Stateful_checkbox"
          valid={this.state.valid}
          checked={this.state.checked}
          disabled={this.state.disabled}
          onChange={e => this.setState({ checked: e.target.checked })}
          {...this.props}
        />
        {!this.state.disabled && (
          <button
            onClick={() => {
              this.setState({
                disabled: true,
              });
            }}
          >
            Disable
          </button>
        )}
        {this.state.disabled && (
          <button
            onClick={() => {
              this.setState({
                disabled: false,
              });
            }}
          >
            Enable
          </button>
        )}
        {this.state.valid !== true && (
          <button
            onClick={() => {
              this.setState({
                valid: true,
              });
            }}
          >
            Valid
          </button>
        )}
        {this.state.valid !== false && (
          <button
            onClick={() => {
              this.setState({
                valid: false,
              });
            }}
          >
            Invalid
          </button>
        )}
        {this.state.valid !== null && (
          <button
            onClick={() => {
              this.setState({
                valid: null,
              });
            }}
          >
            Reset validation
          </button>
        )}
      </div>
    );
  }
}

storiesOf('Checkbox', module)
  .add('Default', () => <Checkbox label="Test" name="Test" />)
  .add('No label', () => <Checkbox name="Test" />)
  .add('Valid', () => <Checkbox label="Test" name="Test" valid={true} />)
  .add('Invalid', () => <Checkbox label="Test" name="Test" valid={false} />)
  .add('Disabled', () => <Checkbox label="Test" name="Test" disabled />)
  .add('No label checked', () => <Checkbox checked name="Test" />)
  .add('Valid checked', () => (
    <Checkbox checked label="Test" name="Test" valid={true} />
  ))
  .add('Invalid checked', () => (
    <Checkbox checked label="Test" name="Test" valid={false} />
  ))
  .add('Disabled checked', () => (
    <Checkbox checked label="Test" name="Test" disabled />
  ))
  .add('Themed', () => (
    <div className={getClassName('stories__themed')}>
      <Checkbox checked label="Test" name="Test" />
    </div>
  ))
  .add('Stateful', () => <StatefulCheckbox label="Test" />);
