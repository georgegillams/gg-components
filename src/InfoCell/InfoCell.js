import React from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import { useEntryAnimationClientOnly } from '../ServerSideRendering';

import STYLES from './info-cell.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

export const INFO_CELL_STYLES = {
  light: 'light',
  dark: 'dark',
};

const InfoCell = props => {
  const {
    title,
    content,
    aux,
    hasBeenMostlyInView,
    hasBeenFullyInView,
    cellStyle,
    className,
    ...rest
  } = props;

  // remove props provided by `withScroll` which we don't need to prevent warnings
  delete rest.fullyInView;
  delete rest.hasBeenInView;
  delete rest.hasBeenJustInView;
  delete rest.hasBeenOutOfView;
  delete rest.inView;
  delete rest.justInView;
  delete rest.mostlyInView;
  delete rest.outOfView;
  delete rest.scrollPosition;

  const [isFirstRender, animationsEnabled] = useEntryAnimationClientOnly();

  const showAux =
    isFirstRender ||
    ((hasBeenMostlyInView || hasBeenFullyInView) && animationsEnabled);

  const classNames = [getClassName('info-cell__outer')];
  if (cellStyle === INFO_CELL_STYLES.dark) {
    classNames.push(getClassName('info-cell__outer--dark'));
  }
  if (className) {
    classNames.push(className);
  }

  const auxClassNames = [getClassName('info-cell__aux')];
  const auxInnerClassNames = [getClassName('info-cell__aux-inner')];
  const auxOuterClassNames = [getClassName('info-cell__aux-outer')];

  if (!showAux) {
    auxInnerClassNames.push(getClassName('info-cell__aux-inner--hidden'));
  }

  if (animationsEnabled) {
    auxInnerClassNames.push(getClassName('info-cell__aux-inner--animated'));
  }

  const titleClassNames = [getClassName('info-cell__title')];
  if (content) {
    titleClassNames.push(getClassName('info-cell__title--with-content'));
  }

  return (
    <div className={classNames.join(' ')} {...rest}>
      <div className={getClassName('info-cell__inner')}>
        <div className={getClassName('info-cell__text-container')}>
          <h3 className={titleClassNames.join(' ')}>{title}</h3>
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
  cellStyle: PropTypes.oneOf(INFO_CELL_STYLES),
  content: PropTypes.element,
  aux: PropTypes.element,
  className: PropTypes.string,
  hasBeenFullyInView: PropTypes.bool,
  hasBeenMostlyInView: PropTypes.bool,
};

InfoCell.defaultProps = {
  cellStyle: INFO_CELL_STYLES.light,
  hasBeenFullyInView: false,
  hasBeenMostlyInView: false,
  className: null,
  content: null,
  aux: null,
};

export default InfoCell;
