#!/usr/bin/env node

import markdownLexer from './markdownLexer.js';

test('parses link', done => {
  const result = markdownLexer(
    'This is a test which contains a [link](https://www.google.com/) to Google.',
  );
  expect(result.error).toBe(undefined);
  expect(JSON.stringify(result)).toEqual(
    `["This is a test which contains a ",{"type":"link","child":"link","ref":"https://www.google.com/","external":true}," to Google."]`,
  );
  done();
});

test('parses big link', done => {
  const result = markdownLexer(
    'This is a test which contains a *[Big link](https://www.google.com/) to Google.',
  );
  expect(result.error).toBe(undefined);
  expect(JSON.stringify(result)).toEqual(
    `["This is a test which contains a ",{"type":"bigLink","title":"Big link","ref":"https://www.google.com/","external":true}," to Google."]`,
  );
  done();
});

test('parses inline code', done => {
  const result = markdownLexer(
    'This is a test which contains some `inline code`.',
  );
  expect(result.error).toBe(undefined);
  expect(JSON.stringify(result)).toEqual(
    `["This is a test which contains some ",{"type":"code","text":"inline code"},"."]`,
  );
  done();
});

test('parses bold', done => {
  const result = markdownLexer(
    'This is a test which contains a **boldified** chunk of text.',
  );
  expect(result.error).toBe(undefined);
  expect(JSON.stringify(result)).toEqual(
    `["This is a test which contains a ",{"type":"bold","child":"boldified"}," chunk of text."]`,
  );
  done();
});

test('parses sectioned structure', done => {
  const result = markdownLexer(
    `Text outside any section
# My section
Text in section`,
  );
  expect(result.error).toBe(undefined);
  expect(JSON.stringify(result)).toEqual(
    `["Text outside any section",{"type":"section","title":"My section","child":"Text in section"},null]`,
  );
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
  expect(JSON.stringify(result)).toEqual(
    `["Text outside any section",{"type":"section","title":"My section","child":["Text in section",{"type":"subsection","title":"My sub section","child":"Text inside my subsection"},null]},null]`,
  );
  done();
});

test('parses sectioned structure 3', done => {
  const result = markdownLexer(
    `Text outside any section
# My section
Text in section
### My sub sub section
Text inside my subsubsection.`,
  );
  expect(result.error).toBe(undefined);
  expect(JSON.stringify(result)).toEqual(
    `["Text outside any section",{"type":"section","title":"My section","child":["Text in section",{"type":"subsubsection","title":"My sub sub section","child":"Text inside my subsubsection."},null]},null]`,
  );
  done();
});

test('linebreaks', done => {
  const result = markdownLexer(
    `Text before linebreak

Text after linebreak.`,
  );
  expect(result.error).toBe(undefined);
  expect(JSON.stringify(result)).toEqual(
    `["Text before linebreak",{"type":"linebreak"},"Text after linebreak."]`,
  );
  done();
});

test('well extreme', done => {
  const result = markdownLexer(`
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
`);
  expect(result.error).toBe(undefined);
  expect(JSON.stringify(result)).toEqual(
    `[[["",{"type":"section","title":"h1 Heading 8-)","child":[["paragraph 1",{"type":"subsection","title":"h2 Heading","child":["paragraph 2",{"type":"subsubsection","title":"h3 Heading","child":[[[["paragraph 3",{"type":"linebreak"},""],{"type":"bold","child":"This is bold text"},["",{"type":"linebreak"},""]],{"type":"italic","child":""},"This is italic text"],{"type":"italic","child":""},[["",{"type":"linebreak"},""],{"type":"strikethrough","child":"Strikethrough"},["",{"type":"linebreak"},""]]]},null]},null],{"type":"subsection","title":"Quote","child":""},null]},null],{"type":"quotation","child":" This is a quote"},["",{"type":"subsection","title":"Blockquotes","child":""},null]],{"type":"quotation","child":" Blockquotes are currently unsupported"},[["",{"type":"subsection","title":"Lists","child":"Lists are currently unsupported"},null],{"type":"subsection","title":"Code","child":[["Inline ",{"type":"code","text":"code"},[["",{"type":"linebreak"},"Block code fences"],{"type":"linebreak"},""]],{"type":"codeblock","language":"","githubUrl":"","text":"Sample text here..."},""]},null]]`,
  );
  done();
});

// test('parses sectioned structure', done => {
//  const result = markdownLexer(
//    `Text outside any section
// # Section
// Text in section
// # Subsection
// Text in sub-section
// ## SubSubSection
// Text in sub-sub-section`,
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
//          title: 'Subsection',
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
// });
