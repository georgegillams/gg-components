import { useEffect, useState } from 'react';

const useEffectAfterPageLoad = effectFunc => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const loadEvent = () => {
      setPageLoaded(true);
    };

    window.addEventListener('load', loadEvent);

    // Page was already loaded before listener was added:
    if (document.readyState === 'complete') {
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
    }

    return () => {
      if (cleanupFunc) {
        cleanupFunc();
      }
    };
  }, [pageLoaded]);
};

export default { useEffectAfterPageLoad };
export { useEffectAfterPageLoad };
