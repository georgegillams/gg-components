/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './index';

const ButtonStory = props => {
  const { className, dark, focus, ...rest } = props;
  const button = useRef(null);

  useEffect(() => {
    if (focus && button.current) {
      button.current.focus();
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: dark ? '#1e1e1e' : 'transparent',
      }}
    >
      <Button ref={button} onClick={action('Button clicked')} {...rest}>
        Button
      </Button>
    </div>
  );
};

export default { title: 'Button', component: Button };

export const Primary = () => <ButtonStory />;
export const Focused = () => <ButtonStory focus />;

export const Large = () => <ButtonStory large />;
export const Secondary = () => <ButtonStory secondary />;
export const Bouncy = () => <ButtonStory bouncy />;
export const Destructive = () => <ButtonStory destructive />;
export const Disabled = () => <ButtonStory disabled />;
export const White = () => <ButtonStory dark white />;
export const Href = () => <ButtonStory href="/test" />;
export const SideBySide = () => (
  <div>
    <Button>Button</Button>
    <Button href="/test">Button</Button>
  </div>
);
export const ExternalHref = () => (
  <ButtonStory hrefExternal href="https://duckduckgo.com/" />
);
export const DumbHref = () => (
  <ButtonStory hrefDumb href="https://duckduckgo.com/" />
);
