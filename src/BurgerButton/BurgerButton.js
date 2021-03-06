import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './burger-button.scss';

const getClassName = cssModules(STYLES);

const BurgerButton = props => {
  const { onClick, className, lineClassName, isOpen, ...rest } = props;

  const innerClassNames = [getClassName('burger-button__inner')];
  const outerClassNames = [getClassName('burger-button__outer')];
  if (className) {
    outerClassNames.push(className);
  }

  const lineClassNames1 = [
    getClassName('burger-button__line', 'burger-button__line__one'),
  ];
  const lineClassNames2 = [
    getClassName('burger-button__line', 'burger-button__line__two'),
  ];
  const lineClassNames3 = [
    getClassName('burger-button__line', 'burger-button__line__three'),
  ];
  if (isOpen) {
    lineClassNames1.push(getClassName('burger-button__line__one--open'));
    lineClassNames2.push(getClassName('burger-button__line__two--open'));
    lineClassNames3.push(getClassName('burger-button__line__three--open'));
  }
  if (lineClassName) {
    lineClassNames1.push(lineClassName);
    lineClassNames2.push(lineClassName);
    lineClassNames3.push(lineClassName);
  }

  return (
    <button
      type="button"
      aria-label="Menu"
      aria-expanded={!!isOpen}
      onClick={onClick}
      className={outerClassNames.join(' ')}
      {...rest}
    >
      <div className={innerClassNames.join(' ')}>
        <div className={lineClassNames1.join(' ')} />
        <div className={lineClassNames2.join(' ')} />
        <div className={lineClassNames3.join(' ')} />
      </div>
    </button>
  );
};

BurgerButton.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  lineClassName: PropTypes.string,
};

BurgerButton.defaultProps = {
  isOpen: false,
  onClick: null,
  className: null,
  lineClassName: null,
};

export default BurgerButton;
