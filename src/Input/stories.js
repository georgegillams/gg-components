/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input, TextArea, Select } from './index';

class StatefulInput extends Component {
  constructor(props) {
    super(props);

    this.InputComponent = props.component || Input;
    this.state = { value: props.value || '', valid: null, enabled: true };
  }

  render() {
    const { value, component, ...rest } = this.props;
    return (
      <div>
        <this.InputComponent
          name="Stateful_input"
          valid={this.state.valid}
          value={this.state.value}
          enabled={this.state.enabled}
          onChange={e => this.setState({ value: e.target.value })}
          {...rest}
        />
        {!this.state.enabled && (
          <button
            onClick={() => {
              this.setState({
                enabled: true,
              });
            }}
          >
            Enable
          </button>
        )}
        {this.state.enabled && (
          <button
            onClick={() => {
              this.setState({
                enabled: false,
              });
            }}
          >
            Disable
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
        <br />
        <p>Current value: {this.state.value}</p>
      </div>
    );
  }
}

const selectOptions = [
  { value: 'apple', name: 'Apple' },
  { value: 'banana', name: 'Banana' },
  { value: 'cranberry', name: 'Cranberry' },
];

storiesOf('Input', module)
  .add('Default', () => <Input value="Test" />)
  .add('Valid', () => <Input value="Test" valid={true} />)
  .add('Invalid', () => <Input value="Test" valid={false} />)
  .add('Disabled', () => <Input value="Test" enabled={false} />)
  .add('Password', () => <Input type="password" value="Test" valid={true} />)
  .add('Stateful', () => <StatefulInput />);

storiesOf('TextArea', module)
  .add('Default', () => <TextArea value="Test" />)
  .add('Valid', () => <TextArea value="Test" valid={true} />)
  .add('Invalid', () => <TextArea value="Test" valid={false} />)
  .add('Disabled', () => <TextArea value="Test" enabled={false} />)
  .add('Stateful', () => <StatefulInput component={TextArea} />);

storiesOf('Select', module)
  .add('Default', () => <Select value="apple" options={selectOptions} />)
  .add('Valid', () => (
    <Select value="apple" valid={true} options={selectOptions} />
  ))
  .add('Invalid', () => (
    <Select value="apple" valid={false} options={selectOptions} />
  ))
  .add('Disabled', () => (
    <Select value="apple" enabled={false} options={selectOptions} />
  ))
  .add('With other', () => (
    <Select value="other value" options={selectOptions} enableOther />
  ))
  .add('Stateful', () => (
    <StatefulInput value="apple" component={Select} options={selectOptions} />
  ))
  .add('Stateful with other', () => (
    <StatefulInput
      value="apple"
      component={Select}
      options={selectOptions}
      enableOther
    />
  ));
