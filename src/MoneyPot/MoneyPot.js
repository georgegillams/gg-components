import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Progress from '../Progress';
import { cssModules } from '../helpers/cssModules';

import STYLES from './money-pot.scss';

const getClassName = cssModules(STYLES);

const MoneyPot = props => {
  const {
    name,
    balance,
    filled,
    goalAmount,
    markerPosition,
    shortfall,
    className,
    ...rest
  } = props;

  const markerDisplayPercentage = Math.min(100, markerPosition);
  const percentage = Math.min(100, Math.round((100 * balance) / goalAmount));
  const showPercentageValue = filled && percentage && percentage > 0.01;

  const classNameFinal = [getClassName('money-pot')];
  if (className) {
    classNameFinal.push(className);
  }

  const progress = (
    <Progress
      style={{ position: 'absolute', width: '100%', top: '-.2rem' }}
      small
      max={100}
      progress={filled ? percentage : 0}
      error={shortfall}
    />
  );

  return (
    <span className={classNameFinal.join(' ')} {...rest}>
      <span className={getClassName('money-pot--module-name')}>{name}</span>
      {balance !== null && (
        <span className={getClassName('money-pot--module-name')}>
          {`£${balance}`}
          {goalAmount !== null ? ` of £${goalAmount}` : ''}
        </span>
      )}
      <div className={getClassName('money-pot--module-bar')}>
        {progress}
        {markerPosition !== null && (
          <div
            className={getClassName('money-pot--21-marker')}
            style={{
              marginLeft: `calc(${markerDisplayPercentage}% - .1rem)`,
            }}
          />
        )}
      </div>
      <span
        className={getClassName('money-pot--percentage')}
        style={{ opacity: showPercentageValue ? 1 : 0 }}
      >{`${percentage || '00'}%`}</span>
    </span>
  );
};

MoneyPot.propTypes = {
  name: PropTypes.string.isRequired,
  shortfall: PropTypes.number,
  balance: PropTypes.number,
  goalAmount: PropTypes.number,
  filled: PropTypes.bool,
  className: PropTypes.string,
  markerPosition: PropTypes.number,
};

MoneyPot.defaultProps = {
  filled: true,
  shortfall: null,
  balance: null,
  goalAmount: null,
  className: null,
  markerPosition: null,
};

export default MoneyPot;
