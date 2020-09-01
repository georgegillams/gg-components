import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './animate-height.scss';

const getClassName = cssModules(STYLES);

const AnimateHeight = props => {
  const { className, expanded, children, ...rest } = props;

  const [renderHeight, setRenderHeight] = useState(expanded ? null : 0);
  const [needsHeightRecalc, setNeedsHeightRecalc] = useState(false);
  const childElement = useRef(null);

  const updateHeight = () => {
    if (childElement && childElement.current) {
      const contentHeight = childElement.current.getBoundingClientRect().height;
      setRenderHeight(expanded ? contentHeight : 0);
      setNeedsHeightRecalc(false);
    }
  };

  useEffect(() => {
    updateHeight();
  }, [expanded, children, needsHeightRecalc]);

  useEffect(() => {
    const sizeChangeEventListener = () => {
      setNeedsHeightRecalc(true);
    };

    window.addEventListener('resize', sizeChangeEventListener);
    window.addEventListener('orientationchange', sizeChangeEventListener);
    window.addEventListener('fullscreenchange', sizeChangeEventListener);

    const cleanUp = () => {
      window.removeEventListener('resize', sizeChangeEventListener);
      window.removeEventListener('orientationchange', sizeChangeEventListener);
      window.removeEventListener('fullscreenchange', sizeChangeEventListener);
    };
    return cleanUp;
  }, []);

  return (
    <div
      aria-hidden={!expanded}
      className={getClassName('animate-height__wrapper')}
      style={{ height: renderHeight }}
      {...rest}
    >
      <div ref={childElement}>{children}</div>
    </div>
  );
};

AnimateHeight.propTypes = {
  expanded: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

AnimateHeight.defaultProps = {
  expanded: false,
  className: null,
};

export default AnimateHeight;
