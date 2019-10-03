import React from 'react';
import PropTypes from 'prop-types';

import { SubSection } from '../Typography';
import { cssModules } from '../helpers/cssModules';

import STYLES from './info-cell.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const InfoCell = props => {
  const {
    title,
    content,
    aux,
    hasBeenMostlyInView,
    hasBeenFullyInView,
    className,
    ...rest
  } = props;

  const classNames = [getClassName('info-cell__outer')];
  if (className) {
    classNames.push(className);
  }

  const showAux = hasBeenMostlyInView || hasBeenFullyInView;

  const auxClassNames = [getClassName('info-cell__aux')];
  if (showAux) {
    auxClassNames.push(getClassName('info-cell__aux--visible'));
  }

  const auxInnerClassNames = [getClassName('info-cell__aux-inner')];
  if (showAux) {
    auxInnerClassNames.push(getClassName('info-cell__aux-inner--visible'));
  }

  const auxOuterClassNames = [getClassName('info-cell__aux-outer')];
  if (showAux) {
    auxOuterClassNames.push(getClassName('info-cell__aux-outer--visible'));
  }

  return (
    <div className={classNames.join(' ')} {...rest}>
      <div className={getClassName('info-cell__inner')}>
        <div className={getClassName('info-cell__text-container')}>
          <h3 className={getClassName('info-cell__title')}>{title}</h3>
          {content && content}
        </div>
        <div className={auxOuterClassNames.join(' ')}>
          <div className={auxInnerClassNames.join(' ')}>
            <div className={auxClassNames.join(' ')}>{aux && aux}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoCell.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.element,
  aux: PropTypes.element,
};

export default InfoCell;
