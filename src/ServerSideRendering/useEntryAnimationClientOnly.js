import { useEffect, useState } from 'react';

const useEntryAnimationClientOnly = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  // If the item is initially shown, we want it to be animated straight away
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (!isFirstRender) {
      setAnimationsEnabled(true);
    }
  }, [isFirstRender]);

  return [isFirstRender, animationsEnabled];
};

export default { useEntryAnimationClientOnly };
export { useEntryAnimationClientOnly };
