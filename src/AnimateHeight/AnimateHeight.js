import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './animate-height.scss';

const getClassName = cssModules(STYLES);

const AnimateHeight = props => {
  const { className, expanded, children, verticalMargin, ...rest } = props;

  const [renderHeight, setRenderHeight] = useState(expanded ? null : 0);
  const childElement = useRef(null);

  const updateHeight = () => {
    if (!childElement || !childElement.current) {
      return;
    }

    const contentHeight =
      childElement.current.getBoundingClientRect().height + verticalMargin;

    if (expanded) {
      setRenderHeight(contentHeight);
      setTimeout(() => setRenderHeight(null), 400);
    }
    if (!expanded && renderHeight !== 0) {
      setRenderHeight(contentHeight);
      setTimeout(() => setRenderHeight(0), 10);
    }
  };

  useEffect(() => {
    updateHeight();
  }, [expanded]);

  const wrapperClassNames = [getClassName('animate-height__wrapper')];
  if (expanded) {
    wrapperClassNames.push(getClassName('animate-height__wrapper--expanded'));
  }

  return (
    <div
      aria-hidden={!expanded}
      className={wrapperClassNames.join(' ')}
      style={{ height: renderHeight }}
      {...rest}
    >
      <div ref={childElement}>{children}</div>
    </div>
  );
};

AnimateHeight.propTypes = {
  verticalMargin: PropTypes.number,
  expanded: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

AnimateHeight.defaultProps = {
  verticalMargin: 0,
  expanded: false,
  className: null,
};

export default AnimateHeight;
