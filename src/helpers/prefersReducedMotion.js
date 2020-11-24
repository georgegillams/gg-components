const prefersReducedMotion = () => {
  if (!window || !window.matchMedia) {
    return false;
  }

  const query = '(prefers-reduced-motion: reduce)';
  const hasOSReducedMotion = window.matchMedia(query).matches;

  return hasOSReducedMotion;
};

export { prefersReducedMotion };
export default {
  prefersReducedMotion,
};
