import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SegmentedControlItem from './SegmentedControlItem.js';
import STYLES from './segmented-control.scss';

import { cssModules } from '../helpers/cssModules';

const getClassName = cssModules(STYLES);

class SegmentedControl extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    onSelectionChanged: PropTypes.func.isRequired,
    enableDeselection: PropTypes.bool,
    selectedIndex: PropTypes.number,
    className: PropTypes.string,
  };

  static defaultProps = {
    selectedIndex: null,
    enableDeselection: false,
    className: null,
  };

  render = () => {
    const {
      options,
      selectedIndex,
      onSelectionChanged,
      enableDeselection,
      className,
      ...rest
    } = this.props;

    const classNames = [getClassName('segmented-control__outer', className)];

    return (
      <div role="radiogroup" className={classNames.join(' ')} {...rest}>
        {options.map((o, i) => (
          <SegmentedControlItem
            first={i === 0}
            last={i === options.length - 1}
            key={o.key}
            onClick={e => {
              if (enableDeselection && selectedIndex === i) {
                onSelectionChanged(undefined, null);
              } else {
                onSelectionChanged(i, o.key);
              }
            }}
            selected={selectedIndex === i}
          >
            {o.label}
          </SegmentedControlItem>
        ))}
      </div>
    );
  };
}

export default SegmentedControl;
