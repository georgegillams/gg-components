import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import LazyLoadImage from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { cssModules } from '../helpers/cssModules';

import STYLES from './card.scss';

const getClassName = cssModules(STYLES);

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { hovering: false };
  }

  render() {
    const {
      linkUrl,
      href,
      onClick,

      padded,
      bannerColor,
      fillImageSrc,
      light,
      ariaLabel,
      className,
      backgroundImageClassName,
      children,
      disabled,
      onHoverChanged,
      ...rest
    } = this.props;

    const classNameFinal = [getClassName('card')];
    const centerClassNames = [getClassName('card__center-container')];

    if (disabled) {
      classNameFinal.push(getClassName('card--disabled'));
    }

    const bannerClassNames = [getClassName('card__banner')];
    if (light) {
      bannerClassNames.push(getClassName('card__banner--light'));
    }
    if (this.state.hovering && !disabled) {
      bannerClassNames.push(getClassName('card__banner--hovered'));
    }
    const outerBannerClassNames = [getClassName('card__outer-container')];
    if (padded) {
      outerBannerClassNames.push(getClassName('card__outer-container--padded'));
    }
    if (className) classNameFinal.push(className);

    const backgroundImageClassNames = [getClassName('card__background')];
    if (light) {
      backgroundImageClassNames.push(getClassName('card__background--light'));
    }
    if (backgroundImageClassName) {
      backgroundImageClassNames.push(backgroundImageClassName);
    }

    let cardComponent = (
      <div className={classNameFinal.join(' ')}>
        <div
          className={backgroundImageClassNames.join(' ')}
          style={{ backgroundImage: `url(${fillImageSrc})` }}
        />
        <div className={outerBannerClassNames.join(' ')}>
          <div className={centerClassNames.join(' ')}>
            <div className={getClassName('card__children')}>{children}</div>
          </div>
        </div>
        <div
          className={bannerClassNames.join(' ')}
          style={bannerColor ? { backgroundColor: bannerColor } : {}}
        />
      </div>
    );

    if (linkUrl) {
      cardComponent = (
        <Link
          style={{ textDecoration: 'none' }}
          role="button"
          aria-label={ariaLabel}
          to={disabled ? null : linkUrl}
        >
          {cardComponent}
        </Link>
      );
    }
    if (href && !disabled) {
      cardComponent = (
        <a
          style={{ textDecoration: 'none' }}
          role="button"
          rel="noopener noreferrer"
          target="_blank"
          href={href}
        >
          {cardComponent}
        </a>
      );
    }

    const setHover = newValue => {
      this.setState({ hovering: newValue });
      if (onHoverChanged) {
        onHoverChanged(newValue);
      }
    };

    const hoverStarted = () => {
      setHover(true);
    };

    const hoverEnded = () => {
      setHover(false);
    };

    return (
      <div
        tabIndex="0"
        role="button"
        onMouseEnter={hoverStarted}
        onFocus={hoverStarted}
        onMouseLeave={hoverEnded}
        onBlur={hoverEnded}
        className={classNameFinal.join(' ')}
        onClick={disabled ? null : onClick}
        onKeyDown={disabled ? null : onClick}
        {...rest}
      >
        {cardComponent}
      </div>
    );
  }
}

Card.propTypes = {
  ariaLabel: PropTypes.string,
  backgroundImageClassName: PropTypes.string,
  bannerColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fillImageSrc: PropTypes.node,
  href: PropTypes.string,
  light: PropTypes.bool,
  linkUrl: PropTypes.string,
  onClick: PropTypes.func,
  onHoverChanged: PropTypes.func,
  padded: PropTypes.bool,
};

Card.defaultProps = {
  ariaLabel: null,
  backgroundImageClassName: null,
  bannerColor: null,
  children: null,
  className: null,
  disabled: false,
  fillImageSrc: null,
  href: null,
  light: false,
  linkUrl: null,
  onClick: null,
  onHoverChanged: null,
  padded: true,
};

export default Card;
