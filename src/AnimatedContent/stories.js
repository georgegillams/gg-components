import React, { useState } from 'react';

import { AnimatedContent } from './index';

const StatefulAnimatedContent = props => {
  const [inView, setInView] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setInView(!inView);
        }}
      >
        Toggle
      </button>
      <AnimatedContent inView={inView} {...props} />
    </div>
  );
};

export default { title: 'Animated content', component: AnimatedContent };

export const InView = () => (
  <AnimatedContent inView>
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }} />
  </AnimatedContent>
);
export const OutOfView = () => (
  <AnimatedContent inView={false}>
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }} />
  </AnimatedContent>
);
export const Stateful = () => (
  <StatefulAnimatedContent>
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }} />
  </StatefulAnimatedContent>
);
