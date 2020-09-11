import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './animate-height.scss';

const getClassName = cssModules(STYLES);

const AnimateHeight = props => {
  const {
    className,
    expanded,
    children,
    verticalMargin,
    bleedEdges,
    ...rest
  } = props;

  const [renderHeight, setRenderHeight] = useState(expanded ? null : 0);

  const [showChildren, setShowChildren] = useState(!!expanded);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [needsCollapsing, setNeedsCollapsing] = useState(false);
  const [needsExpanding, setNeedsExpanding] = useState(false);
  const [collapsingInProgress, setCollapsingInProgress] = useState(false);
  const [expanding, setExpanding] = useState(false);
  const childElement = useRef(null);

  const getContentHeight = () => {
    if (!childElement || !childElement.current) {
      return 50;
    }

    return childElement.current.getBoundingClientRect().height + verticalMargin;
  };

  useEffect(() => {
    if (expanded) {
      setNeedsExpanding(true);
      setNeedsCollapsing(false);
    } else {
      setNeedsCollapsing(true);
      setNeedsExpanding(false);
    }
  }, [expanded]);

  useEffect(() => {
    if (animationInProgress) {
      return;
    }
    if (needsExpanding) {
      setAnimationInProgress(true);
      setShowChildren(true);
      setExpanding(true);
      setNeedsExpanding(false);
    }
  }, [needsExpanding, animationInProgress]);

  useEffect(() => {
    if (animationInProgress) {
      return;
    }
    if (needsCollapsing) {
      setAnimationInProgress(true);
      setCollapsingInProgress(true);
      setRenderHeight(getContentHeight());
      setNeedsCollapsing(false);
    }
  }, [needsCollapsing, animationInProgress]);

  useEffect(() => {
    if (collapsingInProgress) {
      setTimeout(() => setRenderHeight(0), 10);
      setTimeout(() => {
        setShowChildren(false);
        setCollapsingInProgress(false);
        setAnimationInProgress(false);
      }, 400);
    }
  }, [collapsingInProgress]);

  useEffect(() => {
    if (expanding) {
      setRenderHeight(getContentHeight());
      setTimeout(() => {
        setRenderHeight(null);
        setExpanding(false);
        setAnimationInProgress(false);
      }, 400);
    }
  }, [expanding]);

  const wrapperClassNames = [getClassName('animate-height__wrapper')];
  if (bleedEdges && expanded) {
    wrapperClassNames.push(getClassName('animate-height__wrapper--expanded'));
  }

  return (
    <div
      aria-hidden={!expanded}
      className={wrapperClassNames.join(' ')}
      style={{ height: renderHeight }}
      {...rest}
    >
      <div ref={childElement}>{showChildren && children}</div>
    </div>
  );
};

AnimateHeight.propTypes = {
  verticalMargin: PropTypes.number,
  expanded: PropTypes.bool,
  bleedEdges: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

AnimateHeight.defaultProps = {
  verticalMargin: 0,
  bleedEdges: false,
  expanded: false,
  className: null,
};

export default AnimateHeight;
