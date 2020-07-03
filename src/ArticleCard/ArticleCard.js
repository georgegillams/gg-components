import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { cssModules } from '../helpers/cssModules';
import { Section } from '../Section';
import { Subsection } from '../Subsection';
import HelperFunctions from '../helpers/HelperFunctions';
import { Card } from '../Card';

import STYLES from './article-card.scss';

const getClassName = cssModules(STYLES);

export const ARTICLE_CARD_LAYOUTS = {
  auto: 'auto',
  narrow: 'narrow',
  narrowCompact: 'narrowCompact',
};

const MONTH_MAPPINGS = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const ArticleCard = React.forwardRef((props, ref) => {
  const [hovering, setHovering] = useState(false);

  const {
    day,
    month,
    imageBorder,
    imageSrc,
    title,
    imageClassName,
    layout,
    highlighted,
    children,

    light,
    className,
    disabled,
    backgroundImageClassName,

    ...rest
  } = props;

  const classNameFinal = [getClassName('article-card')];
  const centerClassNames = [getClassName('article-card__center-container')];
  const contentContainerClassNames = [
    getClassName('article-card__inner-container'),
  ];
  const dateContainerClassNames = [getClassName('article-card__date')];

  if (highlighted) {
    contentContainerClassNames.push(
      getClassName('article-card__inner-container--highlighted'),
    );
  }

  if (disabled) {
    contentContainerClassNames.push(
      getClassName('article-card__inner-container--disabled'),
    );
  }

  const bannerClassNames = [getClassName('article-card__banner')];
  if (light) {
    bannerClassNames.push(getClassName('article-card__banner--light'));
  }
  if (hovering && !disabled) {
    bannerClassNames.push(getClassName('article-card__banner--hovered'));
  }
  const outerBannerClassNames = [getClassName('article-card__outer-container')];
  if (layout === ARTICLE_CARD_LAYOUTS.narrowCompact) {
    classNameFinal.push(getClassName('article-card--narrow-compact'));
    outerBannerClassNames.push(
      getClassName('article-card__outer-container--narrow-compact'),
    );
    centerClassNames.push(
      getClassName('article-card__center-container--narrow-compact'),
    );
    dateContainerClassNames.push(
      getClassName('article-card__date--narrow-compact'),
    );
  } else if (layout === ARTICLE_CARD_LAYOUTS.auto) {
    outerBannerClassNames.push(
      getClassName('article-card__outer-container--auto'),
    );
  }
  if (className) classNameFinal.push(className);

  const imageContainerClassNames = [
    getClassName('article-card__image-container'),
  ];

  const imageClassNames = [getClassName('article-card__image')];
  if (imageClassName) {
    imageClassNames.push(imageClassName);
  }

  const backgroundImageClassNames = [getClassName('article-card__background')];
  if (light) {
    backgroundImageClassNames.push(
      getClassName('article-card__background--light'),
    );
  }
  if (backgroundImageClassName) {
    backgroundImageClassNames.push(backgroundImageClassName);
  }

  const cardContent = (
    <div className={outerBannerClassNames.join(' ')}>
      <div className={dateContainerClassNames.join(' ')}>
        <Subsection
          hover={hovering && !disabled}
          anchor={false}
          noPadding
          link
          light={light}
          name={
            HelperFunctions.includes(Object.keys(MONTH_MAPPINGS), `${month}`)
              ? MONTH_MAPPINGS[`${month}`]
              : month
          }
        />
        <Subsection
          hover={hovering && !disabled}
          anchor={false}
          noPadding
          link
          light={light}
          name={day}
        />
      </div>
      <div className={centerClassNames.join(' ')}>
        <Section
          noPadding
          hover={hovering && !disabled}
          light={light}
          name={title}
          link={!disabled}
          className={getClassName('article-card__title')}
        />
        <div className={getClassName('article-card__children')}>{children}</div>
      </div>
      {imageSrc && (
        <div
          className={imageContainerClassNames.join(' ')}
          style={{
            border: imageBorder ? `solid ${imageBorder} 0.1rem` : 'none',
          }}
        >
          <img
            className={imageClassNames.join(' ')}
            alt="card"
            width={987}
            height={575}
            src={imageSrc}
          />
        </div>
      )}
    </div>
  );

  return (
    <Card
      className={classNameFinal.join(' ')}
      disabled={disabled}
      onHoverChanged={setHovering}
      light={light}
      backgroundImageClassName={backgroundImageClassName}
      ref={ref}
      {...rest}
    >
      {cardContent}
    </Card>
  );
});

ArticleCard.propTypes = {
  ariaLabel: PropTypes.string,
  backgroundImageClassName: PropTypes.string,
  bannerColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  day: PropTypes.string,
  disabled: PropTypes.bool,
  fillImageSrc: PropTypes.node,
  highlighted: PropTypes.bool,
  href: PropTypes.string,
  imageBorder: PropTypes.string,
  imageClassName: PropTypes.string,
  imageSrc: PropTypes.node,
  layout: PropTypes.oneOf(Object.keys(ARTICLE_CARD_LAYOUTS)),
  light: PropTypes.bool,
  month: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

ArticleCard.defaultProps = {
  ariaLabel: null,
  backgroundImageClassName: null,
  bannerColor: null,
  children: null,
  className: null,
  day: null,
  disabled: false,
  fillImageSrc: null,
  highlighted: false,
  href: null,
  imageBorder: null,
  imageClassName: null,
  imageSrc: null,
  layout: ARTICLE_CARD_LAYOUTS.auto,
  light: false,
  month: null,
  onClick: null,
  title: null,
};

export default ArticleCard;
