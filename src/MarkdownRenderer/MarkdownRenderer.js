import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import YoutubeEmbedVideo from 'youtube-embed-video';

// import {
//   citation,
//   References,
//   REFERENCE_STYLES,
// } from 'react-component-academic-reference';
import { cssModules } from '../helpers/cssModules';
import { withTheme } from '../Theming';
import HelperFunctions from '../helpers/HelperFunctions';
import { Image } from '../Image';
import { CodeInline, Code } from '../Code';
import { Paragraph } from '../Paragraph';
import { TextLink } from '../TextLink';
import { Quote } from '../Quote';
import { Section } from '../Section';
import { Subsection } from '../Subsection';

import { markdownLexer } from './markdownLexer';
import { DEFAULT_SUPPORTED_FEATURES } from './constants';
import STYLES from './markdown-renderer.scss';

const getClassName = cssModules(STYLES);

const ThemedTextLink = withTheme(TextLink);

const MarkdownRenderer = props => {
  const {
    content,
    supportedFeatures,
    light,
    references,
    className,
    elementClassName,
  } = props;

  const [lexedContent, setLexedContent] = useState(null);

  useEffect(() => {
    const lexingResult = markdownLexer(content, supportedFeatures);
    setLexedContent(lexingResult);
  }, []);

  if (!lexedContent) {
    return null;
  }

  console.log(`lexedContent`, lexedContent);

  const classNames = [getClassName(`blog-viewer__outer`)];
  if (className) {
    classNames.push(className);
  }

  const elementClassNames = [getClassName(`blog-viewer__element`)];
  if (elementClassName) {
    classNames.push(elementClassName);
    elementClassNames.push(elementClassName);
  }

  /* eslint-disable no-use-before-define */
  return (
    <div className={classNames.join(' ')}>
      {elementForContent(lexedContent, 0, light, elementClassNames.join(' '))}
    </div>
  );
  /* eslint-enable */
};

const elementForContent = (content, depth, light, elementClassName) => {
  if (!content) {
    return null;
  }

  if (HelperFunctions.isArray(content)) {
    return content.map(c =>
      elementForContent(c, depth, light, elementClassName),
    );
  }

  let childElement = content.children;
  if (typeof childElement === 'object') {
    childElement = elementForContent(
      childElement,
      depth + 1,
      light,
      elementClassName,
    );
  }

  if (typeof content === 'string' || !content.type || content.type === 'text') {
    return content;
  }

  if (content.type === 'paragraph') {
    return (
      <>
        <Paragraph>{childElement}</Paragraph>
        <br />
      </>
    );
  }

  if (content.type === 'footnoteReference') {
    return <sup>{content.number}</sup>;
  }

  if (content.type === 'footnote') {
    return (
      <sup>
        {content.number}: {childElement}
      </sup>
    );
  }

  if (content.type === 'quotation') {
    if (childElement.length > 1) {
      childElement = childElement.map(c => (
        <>
          <Paragraph>{c}</Paragraph>
          <br />
        </>
      ));
    }
    return <Quote>{childElement}</Quote>;
  }

  if (content.type === 'link') {
    return (
      <ThemedTextLink hrefExternal={content.hrefExternal} href={content.href}>
        {childElement}
      </ThemedTextLink>
    );
  }

  if (content.type === 'code') {
    return <CodeInline className={elementClassName}>{content.text}</CodeInline>;
  }

  if (content.type === 'strikethrough') {
    return (
      <span
        style={{ textDecorationLine: 'line-through' }}
        className={elementClassName}
      >
        {childElement}
      </span>
    );
  }

  if (content.type === 'italic') {
    return (
      <span style={{ fontStyle: 'italic' }} className={elementClassName}>
        {childElement}
      </span>
    );
  }

  if (content.type === 'codeblock') {
    return (
      <Code language={content.language} githubUrl={content.githubUrl}>
        {content.text}
      </Code>
    );
  }

  if (content.type === 'youtube') {
    return (
      <YoutubeEmbedVideo
        showSuggestions={content.showSuggestions}
        videoId={content.videoID}
      />
    );
  }

  if (content.type === 'section') {
    return (
      <Section padding={false} name={content.name}>
        {childElement}
      </Section>
    );
  }

  if (content.type === 'subsection') {
    return (
      <Subsection padding={false} name={content.name}>
        {childElement}
      </Subsection>
    );
  }

  if (content.type === 'subsubsection') {
    return [
      <br />,
      <br />,
      <span style={{ fontWeight: 'bold' }} className={elementClassName}>
        {content.name}
      </span>,
      <br />,
      <br />,
      childElement,
      <br />,
    ];
  }

  if (content.type === 'bigLink') {
    return (
      <a
        href={content.ref}
        target={content.external && '_blank'}
        rel={content.external && 'noopener noreferrer'}
      >
        <Section padding={false} name={content.title} />
      </a>
    );
  }

  if (content.type === 'bold') {
    return (
      <span style={{ fontWeight: 'bold' }} className={elementClassName}>
        {childElement}
      </span>
    );
  }

  if (content.type === 'image') {
    return (
      <img
        className={elementClassName}
        src={content.src}
        alt={content.caption}
      />
    );
  }

  if (content.type === 'smartImage') {
    return (
      <Image
        className={elementClassName}
        lightSrc={content.lightSrc}
        darkSrc={content.darkSrc}
        aspectX={content.aspectX}
        aspectY={content.aspectY}
        alt={content.caption}
      />
    );
  }

  // Finally, default to returning the raw content
  return content;
};

MarkdownRenderer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  references: PropTypes.object,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  elementClassName: PropTypes.string,
  light: PropTypes.bool,
  supportedFeatures: PropTypes.arrayOf(PropTypes.string),
};

MarkdownRenderer.defaultProps = {
  references: null,
  className: null,
  elementClassName: null,
  light: false,
  supportedFeatures: DEFAULT_SUPPORTED_FEATURES,
};

export default MarkdownRenderer;
