import React, { Component, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { cssModules } from '../helpers/cssModules';

import STYLES from './stories.scss';
import { SegmentedControl } from './index';

const getClassName = cssModules(STYLES);

const SegmentedControlStory = props => {
  const { className, ...rest } = props;

  const [selectedIndex, setSelectedIndex] = useState(null);

  const options = [
    {
      label: 'True',
      key: 'true_opt',
    },
    {
      label: 'False',
      key: 'false_opt',
    },
  ];

  return (
    <SegmentedControl
      selectedIndex={selectedIndex}
      onSelectionChanged={setSelectedIndex}
      options={options}
      {...rest}
    ></SegmentedControl>
  );
};

storiesOf('SegmentedControl', module)
  .add('Default', () => <SegmentedControlStory />)
  .add('Themed', () => (
    <div className={getClassName('stories__themed')}>
      <SegmentedControlStory />
    </div>
  ));
