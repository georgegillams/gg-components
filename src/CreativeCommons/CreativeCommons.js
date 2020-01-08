import React from 'react';
import { cssModules } from '../helpers/cssModules';

import STYLES from './creative-commons.scss';

import { Paragraph, TextLink, SubSection } from '../Typography';

const getClassName = cssModules(STYLES);

const CreativeCommons = props => {
  const { className, ...rest } = props;

  return (
    <div
      className={getClassName('creative-commons__wrapper', className)}
      {...rest}
    >
      <SubSection
        className={getClassName('creative-commons__inner')}
        anchor={false}
        name="Copyright"
      >
        <Paragraph>
          Most of my photos are licensed under{' '}
          <TextLink
            external
            href="https://creativecommons.org/licenses/by-sa/3.0/"
          >
            Creative Commons BY-SA 3.0{' '}
          </TextLink>
          .<br />
          If you are unsure about your right to use them please{' '}
          <TextLink to="/contact">contact me</TextLink>.
        </Paragraph>
      </SubSection>
    </div>
  );
};

export default CreativeCommons;
