import React from 'react';

import { cssModules } from '../helpers/cssModules';

import STYLES from './stories.scss';

import { Section } from './index';

const LONG_TEXT =
  'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.';

const getClassName = cssModules(STYLES);

export default { title: 'Section', component: Section };

export const Default = () => <Section name="Test" />;
export const Long = () => <Section name={LONG_TEXT} />;
export const WithAnchor = () => <Section anchor name="Test" />;
export const NoPadding = () => <Section anchor padding={false} name="Test" />;
export const WithContentAndPadding = () => (
  <Section anchor name="Test">
    Some content
  </Section>
);
export const WithContent = () => (
  <Section padding={false} anchor name="Test">
    Some content
  </Section>
);
export const Disabled = () => <Section disabled highlight name="Test" />;
export const WithCssVariables = () => (
  <div className={getClassName('stories__themed')}>
    <Section anchor highlight name="Test" />
  </div>
);
export const Hover = () => <Section anchor hover name="Test" />;
export const NoPaddingNoAnchor = () => (
  <Section anchor={false} padding={false} name="Test" />
);
export const Link = () => (
  <Section anchor={false} padding={false} name="Test" link />
);
