#!/usr/bin/env node

import markdownLexer from './markdownLexer.js';

test('parses link', done => {
  const result = markdownLexer(
    'This is a test which contains a [link](https://www.google.com/) to Google.',
  );
  expect(result.error).toBe(undefined);
  expect(result).toEqual([
    'This is a test which contains a ',
    {
      external: true,
      ref: 'https://www.google.com/',
      child: 'link',
      type: 'link',
    },
    ' to Google.',
  ]);
  done();
});

test('parses big link', done => {
  const result = markdownLexer(
    'This is a test which contains a *[Big link](https://www.google.com/) to Google.',
  );
  expect(result.error).toBe(undefined);
  expect(result).toEqual([
    'This is a test which contains a ',
    {
      external: true,
      ref: 'https://www.google.com/',
      title: 'Big link',
      type: 'bigLink',
    },
    ' to Google.',
  ]);
  done();
});

test('parses inline code', done => {
  const result = markdownLexer(
    'This is a test which contains some `inline code`.',
  );
  expect(result.error).toBe(undefined);
  expect(result).toEqual([
    'This is a test which contains some ',
    {
      text: 'inline code',
      type: 'code',
    },
    '.',
  ]);
  done();
});

test('parses bold', done => {
  const result = markdownLexer(
    'This is a test which contains a **boldified** chunk of text.',
  );
  expect(result.error).toBe(undefined);
  expect(result).toEqual([
    'This is a test which contains a ',
    {
      child: 'boldified',
      type: 'bold',
    },
    ' chunk of text.',
  ]);
  done();
});

test('parses sectioned structure', done => {
  const result = markdownLexer(
    `Text outside any section
# My section

Text in section`,
  );
  expect(result.error).toBe(undefined);
  expect(result).toEqual([
    `Text outside any section`,
    {
      title: 'My section',
      type: 'section',
      child: `Text in section`,
    },
    null,
  ]);
  done();
});

test('parses sectioned structure 2', done => {
  const result = markdownLexer(
    `Text outside any section
# My section
Text in section
## My sub section
Text inside my subsection`,
  );
  expect(result.error).toBe(undefined);
  expect(result).toEqual([
    `Text outside any section`,
    {
      title: 'My section',
      type: 'section',
      child: [
        'Text in section',
        {
          title: 'My sub section',
          type: 'subsection',
          child: 'Text inside my subsection',
        },
        null,
      ],
    },
    null,
  ]);
  done();
});

test('parses sectioned structure 3', done => {
  const result = markdownLexer(
    `Text outside any section

# My section

Text in section

### My sub sub section

Text inside my subsubsection`,
  );
  expect(result.error).toBe(undefined);
  expect(result).toEqual([
    `Text outside any section`,
    {
      title: 'My section',
      type: 'section',
      child: [
        'Text in section',
        {
          title: 'My sub sub section',
          type: 'subsubsection',
          child: 'Text inside my subsubsection',
        },
        null,
      ],
    },
    null,
  ]);
  done();
});

//test('parses sectioned structure', done => {
//  const result = markdownLexer(
//    `Text outside any section
//# Section
//Text in section
//# SubSection
//Text in sub-section
//## SubSubSection
//Text in sub-sub-section`,
//  );
//  expect(result.error).toBe(undefined);
//  expect(result).toEqual([
//    `Text outside any section`,
//    {
//      title: 'Section',
//      type: 'section',
//      child: [
//        `Text in section`,
//        {
//          title: 'SubSection',
//          type: 'subsection',
//          child: [
//            `Text in sub-section`,
//            {
//              title: 'SubSubSection',
//              type: 'subsubsection',
//              child: `Text in sub-sub-section`,
//            },
//            null,
//          ],
//        },
//        null,
//      ],
//    },
//    null,
//  ]);
//  done();
//});
