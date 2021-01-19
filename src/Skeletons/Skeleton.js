import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';

import STYLES from './skeleton.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Skeleton = props => {
  const { className, ...rest } = props;

  const classNames = getClassName('skeleton__outer', className);

  const [left, setLeft] = useState(0);
  const divElement = useRef(null);

  const adjustPositionsToAlign = () => {
    if (!divElement || !divElement.current) {
      return;
    }

    setLeft(divElement.current.getBoundingClientRect().x);
  };

  const useEffectOnPageLoad = effectFunc => {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
      const loadEvent = () => {
        console.log(`LOAD_EVENT`);
        setPageLoaded(true);
      };

      window.addEventListener('load', loadEvent);

      // Page was already loaded before JS was run:
      if (document.readyState === 'complete') {
        console.log(`PAGE_ALREADY_LOADED`);
        loadEvent();
        window.removeEventListener('load', loadEvent);
      }

      return () => {
        window.removeEventListener('load', loadEvent);
      };
    }, []);

    useEffect(() => {
      let cleanupFunc = null;

      if (pageLoaded) {
        cleanupFunc = effectFunc();
      } else {
        console.log(`NOT ADJUSTING POS`);
      }

      return () => {
        if (cleanupFunc) {
          cleanupFunc();
        }
      };
    }, [pageLoaded]);
  };

  useEffectOnPageLoad(() => {
    console.log(`ADJUSTING POS`);
    adjustPositionsToAlign();

    const interval = setInterval(() => {
      console.log(`ADJUSTING POS`);
      adjustPositionsToAlign();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  });

  // useEffect(() => {
  //   console.log(`NOT YET ADJUSTING POSITION TO ALIGN`);
  //   if (offsetEnabled) {
  //     console.log(`ADJUSTING POSITION TO ALIGN`);
  //     adjustPositionsToAlign();
  //   }

  //   const interval = setInterval(() => {
  //     if (offsetEnabled) {
  //       console.log(`ADJUSTING POSITION TO ALIGN`);
  //       adjustPositionsToAlign();
  //     }
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [offsetEnabled]);

  return (
    <div className={classNames} ref={divElement} {...rest}>
      <div
        className={getClassName('skeleton__shimmer')}
        style={{ marginLeft: `-${left}px` }}
      />
    </div>
  );
};

Skeleton.propTypes = {
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  className: null,
};

export default Skeleton;
