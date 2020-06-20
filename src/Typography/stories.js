/* @flow strict */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { cssModules } from '../helpers/cssModules';

import STYLES from './stories.scss';

import {
  ArticleDate,
  Quote,
  Section,
  Paragraph,
  SubSection,
  AnimatedContent,
  TextLink,
  PageTitle,
  MarkdownRenderer,
} from './index';

const LONG_TEXT =
  'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.';

const getClassName = cssModules(STYLES);

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

storiesOf('Quote', module).add('default', () => (
  <Quote>Lorem ipse dolor sit amet.</Quote>
));

storiesOf('Section', module)
  .add('Default', () => <Section name="Test" />)
  .add('Long', () => <Section name={LONG_TEXT} />)
  .add('With anchor', () => <Section anchor name="Test" />)
  .add('No padding', () => <Section anchor noPadding name="Test" />)
  .add('With content and padding', () => (
    <Section anchor name="Test">
      Some content
    </Section>
  ))
  .add('With content', () => (
    <Section noPadding anchor name="Test">
      Some content
    </Section>
  ))
  .add('No padding no anchor', () => (
    <Section anchor={false} noPadding name="Test" />
  ))
  .add('Link', () => <Section anchor={false} noPadding name="Test" link />);

storiesOf('SubSection', module)
  .add('Default', () => <SubSection name="Test" />)
  .add('Long', () => <SubSection name={LONG_TEXT} />)
  .add('Without anchor', () => <SubSection name="Test" anchor={false} />)
  .add('No padding', () => <SubSection noPadding name="Test" />)
  .add('With content and padding', () => (
    <SubSection name="Test">Some content</SubSection>
  ))
  .add('With content', () => (
    <SubSection noPadding name="Test">
      Some content
    </SubSection>
  ));

storiesOf('Paragraph', module)
  .add('Single', () => (
    <Paragraph>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Consectetur a erat nam at lectus urna duis convallis convallis. Commodo ullamcorper a lacus vestibulum sed. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Viverra justo nec ultrices dui sapien eget. Blandit aliquam etiam erat velit scelerisque. Consequat mauris nunc congue nisi vitae. Aenean pharetra magna ac placerat vestibulum lectus mauris. Viverra justo nec ultrices dui sapien eget. In nulla posuere sollicitudin aliquam. Viverra suspendisse potenti nullam ac tortor vitae purus. Eu consequat ac felis donec. Fringilla est ullamcorper eget nulla facilisi. Convallis convallis tellus id interdum. Enim tortor at auctor urna nunc id cursus metus.

Laoreet id donec ultrices tincidunt arcu non sodales neque. Mauris ultrices eros in cursus turpis massa tincidunt. Amet est placerat in egestas. Tincidunt eget nullam non nisi est sit. Senectus et netus et malesuada fames ac turpis egestas. Sapien faucibus et molestie ac. Enim tortor at auctor urna. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Sit amet venenatis urna cursus eget. Orci eu lobortis elementum nibh. Arcu vitae elementum curabitur vitae nunc sed velit. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Enim lobortis scelerisque fermentum dui faucibus. Id interdum velit laoreet id donec ultrices tincidunt arcu. Erat pellentesque adipiscing commodo elit. Platea dictumst quisque sagittis purus sit amet volutpat consequat.

Scelerisque in dictum non consectetur a erat. Tortor pretium viverra suspendisse potenti. Et pharetra pharetra massa massa ultricies. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. In fermentum posuere urna nec tincidunt praesent semper feugiat. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Velit laoreet id donec ultrices tincidunt arcu non sodales. Pellentesque habitant morbi tristique senectus et netus et. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Libero volutpat sed cras ornare arcu dui. Purus non enim praesent elementum facilisis leo vel. Rutrum quisque non tellus orci.

Mattis pellentesque id nibh tortor id aliquet lectus proin. Nisl tincidunt eget nullam non nisi est sit. Eu volutpat odio facilisis mauris sit amet massa vitae. Vestibulum morbi blandit cursus risus at ultrices. Fames ac turpis egestas maecenas pharetra convallis posuere. Etiam sit amet nisl purus in mollis nunc sed. Vitae suscipit tellus mauris a. Leo vel orci porta non. Felis donec et odio pellentesque diam volutpat commodo sed. Faucibus turpis in eu mi bibendum neque egestas. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Molestie at elementum eu facilisis sed odio morbi quis. Ut tortor pretium viverra suspendisse. Sit amet porttitor eget dolor morbi non arcu risus quis. Diam donec adipiscing tristique risus. Sapien pellentesque habitant morbi tristique senectus et netus et. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Consectetur purus ut faucibus pulvinar. Lectus mauris ultrices eros in.

Nisi scelerisque eu ultrices vitae auctor eu augue ut. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Morbi tristique senectus et netus et malesuada. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Scelerisque eu ultrices vitae auctor eu augue ut. Nisl purus in mollis nunc. Cras sed felis eget velit aliquet sagittis id. Dignissim convallis aenean et tortor. Eu nisl nunc mi ipsum faucibus. Suspendisse faucibus interdum posuere lorem ipsum dolor. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Nisi est sit amet facilisis magna etiam. Aliquam ultrices sagittis orci a scelerisque purus semper eget. In vitae turpis massa sed elementum tempus egestas sed. Imperdiet massa tincidunt nunc pulvinar sapien. Magna sit amet purus gravida quis blandit.`}</Paragraph>
  ))
  .add('Multiple', () => (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc
        pulvinar sapien et ligula ullamcorper. Consectetur a erat nam at lectus
        urna duis convallis convallis. Commodo ullamcorper a lacus vestibulum
        sed. Sed egestas egestas fringilla phasellus faucibus scelerisque
        eleifend donec. Viverra justo nec ultrices dui sapien eget. Blandit
        aliquam etiam erat velit scelerisque. Consequat mauris nunc congue nisi
        vitae. Aenean pharetra magna ac placerat vestibulum lectus mauris.
        Viverra justo nec ultrices dui sapien eget. In nulla posuere
        sollicitudin aliquam. Viverra suspendisse potenti nullam ac tortor vitae
        purus. Eu consequat ac felis donec. Fringilla est ullamcorper eget nulla
        facilisi. Convallis convallis tellus id interdum. Enim tortor at auctor
        urna nunc id cursus metus.
      </Paragraph>
      <Paragraph>
        {' '}
        {`Laoreet id donec ultrices tincidunt arcu non sodales neque. Mauris ultrices eros in cursus turpis massa tincidunt. Amet est placerat in egestas. Tincidunt eget nullam non nisi est sit. Senectus et netus et malesuada fames ac turpis egestas. Sapien faucibus et molestie ac. Enim tortor at auctor urna. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Sit amet venenatis urna cursus eget. Orci eu lobortis elementum nibh. Arcu vitae elementum curabitur vitae nunc sed velit. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Enim lobortis scelerisque fermentum dui faucibus. Id interdum velit laoreet id donec ultrices tincidunt arcu. Erat pellentesque adipiscing commodo elit. Platea dictumst quisque sagittis purus sit amet volutpat consequat.`}
      </Paragraph>
    </div>
  ));

storiesOf('TextLink', module)
  .add('Default', () => (
    <TextLink href="/lol" name="Test">
      Test
    </TextLink>
  ))
  .add('Dumb', () => (
    <TextLink hrefDumb href="/lol" name="Test">
      Test
    </TextLink>
  ))
  .add('External', () => (
    <div>
      This is an external link to{' '}
      <TextLink hrefExternal href="/lol" name="Test">
        Test
      </TextLink>{' '}
      content on another site.
    </div>
  ))
  .add('Light external', () => (
    <TextLink light hrefExternal href="/lol" name="Test">
      Test
    </TextLink>
  ))
  .add('Themed', () => (
    <div className={getClassName('stories__themed')}>
      <TextLink hrefExternal href="/lol" name="Test">
        Test
      </TextLink>
    </div>
  ));

storiesOf('ArticleDate', module).add('default', () => (
  <ArticleDate date={new Date(2019, 4, 5, 10, 11, 12)} />
));

storiesOf('AnimatedContent', module)
  .add('In view', () => (
    <AnimatedContent inView>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </AnimatedContent>
  ))
  .add('Out of view', () => (
    <AnimatedContent inView={false}>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </AnimatedContent>
  ))
  .add('Stateful', () => (
    <StatefulAnimatedContent>
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
      />
    </StatefulAnimatedContent>
  ));

storiesOf('PageTitle', module)
  .add('Title', () => (
    <PageTitle name="Test">
      <div
        style={{ width: '45rem', height: '15rem', backgroundColor: 'red' }}
      />
    </PageTitle>
  ))
  .add('With link', () => (
    <PageTitle link={{ to: '/test', text: 'Back' }} name="Test">
      <div
        style={{ width: '45rem', height: '15rem', backgroundColor: 'red' }}
      />
    </PageTitle>
  ))
  .add('With custom link component', () => (
    <PageTitle
      renderLink={(href, name, className) => (
        <div
          style={{ padding: '1rem 0', background: 'lightgreen' }}
          className={className}
        >
          <a href={href}>{name}</a>
        </div>
      )}
      link={{ to: '/test', text: 'Back' }}
      name="Test"
    >
      <div
        style={{ width: '45rem', height: '15rem', backgroundColor: 'red' }}
      />
    </PageTitle>
  ))
  .add('Title with custom headingProps', () => (
    <PageTitle headingProps={{ id: 'test-this' }} name="Test">
      <div
        style={{ width: '45rem', height: '15rem', backgroundColor: 'red' }}
      />
    </PageTitle>
  ))
  .add('With link and custom linkProps', () => (
    <PageTitle
      linkProps={{ id: 'test-this' }}
      link={{ to: '/test', text: 'Back' }}
      name="Test"
    >
      <div
        style={{ width: '45rem', height: '15rem', backgroundColor: 'red' }}
      />
    </PageTitle>
  ));

storiesOf('MarkdownRenderer', module)
  .add('Text only', () => <MarkdownRenderer content="This is a simple test" />)
  .add('Text with link', () => (
    <MarkdownRenderer content="This contains a [link](/test) to an internal page." />
  ))
  .add('Text with extenal link', () => (
    <MarkdownRenderer content="This contains a [link](https://www.google.com/) to an external page." />
  ))
  .add('Text with inline code', () => (
    <MarkdownRenderer content="This contains some `code`." />
  ))
  .add('Text with strikethrough', () => (
    <MarkdownRenderer content="This contains a ~striken~ section." />
  ))
  .add('Text with bold', () => (
    <MarkdownRenderer content="This contains a **bold** section." />
  ))
  .add('Text with italic', () => (
    <MarkdownRenderer content="This contains an _italic_ section." />
  ))
  .add('Text with code block', () => (
    <MarkdownRenderer
      content="This contains a block of code as follows:
``` js, github.com
code block
  code block
```"
    />
  ))
  .add('Text with a big link', () => (
    <MarkdownRenderer
      content="This contains a large link:
*[Massive link](https://www.google.com)"
    />
  ))
  .add('Youtube video', () => (
    <MarkdownRenderer content="!yt[ytv](https://www.youtube.com/watch?v=Nozh1zDj8_o)" />
  ))
  .add('Text with a quotation', () => (
    <MarkdownRenderer
      content="This contains a quotation as follows:
>This is a quote
"
    />
  ))
  .add('Sectioned text', () => (
    <MarkdownRenderer
      content="
# Section
This is some section content.
"
    />
  ))
  .add('Subsectioned text', () => (
    <MarkdownRenderer
      content="
## Subsection
This is some subsection content.
"
    />
  ))
  .add('Linebreak', () => (
    <MarkdownRenderer
      content={`
Text before linebreak...


...text after linebreak.
`}
    />
  ))
  .add('Sectioned text - long example', () => (
    <MarkdownRenderer
      content={`
# Section
This is some section content.
## SubSection
This is some text in a subsection

Let's throw in some \`code\` for good measure.
### SubSubSection
This is some text in a subsubsection
`}
    />
  ))
  .add('Link and italic', () => (
    <MarkdownRenderer content="This contains a [link](/test) and _italics_" />
  ))
  .add('Link and italic (limited to just link)', () => (
    <MarkdownRenderer
      supportedFeatures={['link']}
      content="This contains a [link](/test) and _italics_"
    />
  ))
  .add('Extreme', () => (
    <MarkdownRenderer
      content={`

# h1 Heading 8-)

paragraph 1

## h2 Heading

paragraph 2

### h3 Heading

paragraph 3

**This is bold text**

__This is italic text__

~Strikethrough~


## Quote


> This is a quote


## Blockquotes


> Blockquotes are currently unsupported

## Lists

Lists are currently unsupported

## Code

Inline \`code\`

Block code fences

\`\`\`
Sample text here...
\`\`\`
`}
    />
  ))
  .add('More extreme', () => (
    <MarkdownRenderer
      content={`
# h1 Heading 8-)

paragraph 1

## h2 Heading

paragraph 2

### h3 Heading

paragraph 3

## Horizontal Rules

___

---

***


## Typographic replacements

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---


## Emphasis

**This is bold text**

__This is bold text__

~Strikethrough~


## Quote


> This is a quote


## Blockquotes


> Blockquotes are currently unsupported


## Lists

Lists are currently unsupported


## Code

Inline \`code\`

Block code fences

\`\`\`
Sample text here...
\`\`\`

Language

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://google.com)

[link with title](http://google.com/ title text!)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg)

Like links, Images also have a footnote style syntax

`}
    />
  ));
