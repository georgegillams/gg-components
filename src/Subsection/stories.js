import React from 'react';

import { cssModules } from '../helpers/cssModules';

import STYLES from './stories.scss';

import { Subsection } from './index';

const LONG_TEXT =
  'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.';

const getClassName = cssModules(STYLES);

export default { title: 'Subsection', component: Subsection };

export const Default = () => <Subsection name="Test" />;
export const Long = () => <Subsection name={LONG_TEXT} />;
export const WithAnchor = () => <Subsection anchor name="Test" />;
export const NoPadding = () => (
  <Subsection anchor padding={false} name="Test" />
);
export const WithContentAndPadding = () => (
  <Subsection anchor name="Test">
    Some content
  </Subsection>
);
export const WithContent = () => (
  <Subsection padding={false} anchor name="Test">
    Some content
  </Subsection>
);
export const Disabled = () => <Subsection disabled highlight name="Test" />;
export const WithCssVariables = () => (
  <div className={getClassName('stories__themed')}>
    <Subsection anchor highlight name="Test" />
  </div>
);
export const Hover = () => <Subsection anchor hover name="Test" />;
export const NoPaddingNoAnchor = () => (
  <Subsection anchor={false} padding={false} name="Test" />
);
export const Link = () => (
  <Subsection anchor={false} padding={false} name="Test" link />
);
