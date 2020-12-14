import { useEffect, useState } from 'react';

const useEntryAnimationClientOnly = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    // If someone wants to render something on the server,
    // they can remove it as soon as this is false
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (!isFirstRender) {
      // Delay so that we can be sure that the browser has
      // rendered the hidden component before we enable animations
      setTimeout(() => {
        setAnimationsEnabled(true);
      }, 200);
    }
  }, [isFirstRender]);

  return [isFirstRender, animationsEnabled];
};

export default { useEntryAnimationClientOnly };
export { useEntryAnimationClientOnly };
