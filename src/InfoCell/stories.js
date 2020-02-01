/* @flow strict */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { InfoCell, INFO_CELL_STYLES } from './index';
import { TextLink, SubSection } from '../Typography';

class StatefulStory extends Component {
  constructor() {
    super();

    this.state = { hasBeenMostlyInView: false };
  }

  render() {
    const { ...rest } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              hasBeenMostlyInView: !this.state.hasBeenMostlyInView,
            });
          }}
        >
          Toggle
        </button>
        <InfoCell
          hasBeenMostlyInView={this.state.hasBeenMostlyInView}
          {...rest}
        />
      </div>
    );
  }
}

storiesOf('Info cell', module)
  .add('Info cell', () => (
    <StatefulStory
      title="Title"
      content={<TextLink href="/test">Content</TextLink>}
      aux={
        <div
          style={{ width: '5rem', height: '5rem', backgroundColor: 'red' }}
        />
      }
    />
  ))
  .add('No aux', () => (
    <InfoCell
      title="Title"
      content={<TextLink href="/test">Content</TextLink>}
    />
  ))
  .add('No aux dark', () => (
    <InfoCell
      title="Title"
      cellStyle={INFO_CELL_STYLES.dark}
      content={<TextLink href="/test">Content</TextLink>}
    />
  ));
