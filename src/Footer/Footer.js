import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from '../helpers/cssModules';

import TechSpecs from './TechSpecs';
import STYLES from './footer.scss';

import { Logo } from '../Logo';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const Footer = props => {
  const { aws, className, ...rest } = props;
  const outerClassNameFinal = [getClassName('footer__container')];
  if (className) {
    outerClassNameFinal.push(className);
  }

  return (
    <footer id="footer" className={outerClassNameFinal.join(' ')} {...rest}>
      <Logo
        small
        alwaysCentered
        className={getClassName('footer__logo')}
        padding={false}
      />
      <TechSpecs aws={aws} className={getClassName('footer__tech')} light />
    </footer>
  );
};

Footer.propTypes = {
  aws: PropTypes.bool,
  className: PropTypes.string,
};

Footer.defaultProps = {
  aws: false,
  className: null,
};

export default Footer;
