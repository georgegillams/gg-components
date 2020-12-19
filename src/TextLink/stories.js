import React, { useEffect, useRef } from 'react';

import { cssModules } from '../helpers/cssModules';
import { THEMES } from '../Theming';

import STYLES from './stories.scss';

import { TextLink } from './index';

const getClassName = cssModules(STYLES);

const FocusTextLink = props => {
  const link = useRef(null);

  useEffect(() => {
    if (link.current) {
      link.current.focus();
    }
  }, []);

  return (
    <TextLink ref={link} {...props}>
      Test
    </TextLink>
  );
};

export default { title: 'Text link', component: TextLink };
export const Default = () => (
  <TextLink href="/lol" name="Test">
    Test
  </TextLink>
);
export const Focused = () => (
  <FocusTextLink href="/lol" name="Test">
    Test
  </FocusTextLink>
);
export const Dumb = () => (
  <TextLink hrefDumb href="/lol" name="Test">
    Test
  </TextLink>
);
export const External = () => (
  <div>
    This is an external link to
    <TextLink hrefExternal href="/lol" name="Test">
      Test
    </TextLink>
    content on another site.
  </div>
);
export const ThemedWhite = () => (
  <TextLink theme={THEMES.allWhite} hrefExternal href="/lol" name="Test">
    Test
  </TextLink>
);
export const WithCssVariables = () => (
  <div className={getClassName('stories__themed')}>
    <TextLink hrefExternal href="/lol" name="Test">
      Test
    </TextLink>
  </div>
);
