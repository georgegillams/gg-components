import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Paragraph } from '../Typography';
import { cssModules } from '../helpers/cssModules';

import STYLES from './segmented-control.scss';

const getClassName = cssModules(STYLES);

class SegmentedControlItem extends Component {
  static propTypes = {
    first: PropTypes.boolean,
    last: PropTypes.boolean,
    selected: PropTypes.boolean,
    className: PropTypes.string,
  };

  static defaultProps = {
    first: false,
    last: false,
    selected: false,
    className: null,
  };

  render = () => {
    const { first, last, selected, children, className, ...rest } = this.props;

    const classNames = [getClassName('segmented-control__item', className)];
    const textClassNames = [getClassName('segmented-control__item-text')];

    if (first) {
      classNames.push(getClassName('segmented-control__item--first'));
    }

    if (last) {
      classNames.push(getClassName('segmented-control__item--last'));
    }

    if (selected) {
      classNames.push(getClassName('segmented-control__item--selected'));
      textClassNames.push(
        getClassName('segmented-control__item-text--selected'),
      );
    }

    return (
      <button selected={selected} className={classNames.join(' ')} {...rest}>
        <Paragraph className={textClassNames.join(' ')}>{children}</Paragraph>
      </button>
    );
  };
}

export default SegmentedControlItem;
