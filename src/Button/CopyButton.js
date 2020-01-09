import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Copy } from '../Icons';
import { cssModules } from '../helpers/cssModules';

import STYLES from './copy-button.scss';

const getClassName = cssModules(STYLES);

class CopyButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => {
    const { text, className, ...rest } = this.props;

    const classNames = [getClassName('copy-button__outer', className)];

    return (
      <button
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
        className={classNames.join(' ')}
        {...rest}
      >
        <Copy className={getClassName('copy-button__icon')} />
      </button>
    );
  };
}

export default CopyButton;
