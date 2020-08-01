/* eslint-disable no-useless-escape */
// const MD_BLOCK_CODE_REGEX = /(.*)```\ ?([^\,\n]*)\,?\ ?([^\n]*)\n([.\s\S]*)\n```(.*)/gims;
const MD_QUOTATION_REGEX = /\>\ (.*)/gims;
/* eslint-enable */

const convertLinesToParagraphs = list =>
  list.map(l => {
    if (l.type === 'line') {
      return { type: 'paragraph', children: [l.content] };
    }
    return l;
  });

const parseLinesForQuoteBlock = list => {
  const results = [];
  let currentResult = null;

  list.forEach(l => {
    if (l.type !== 'line') {
      results.push(l);
      return;
    }

    if (l.content.match(MD_QUOTATION_REGEX)) {
      if (!currentResult) {
        currentResult = { type: 'quotation', children: [] };
      }
      const splitUpLine = l.content.split(MD_QUOTATION_REGEX);
      currentResult.children.push(splitUpLine[1]);
    } else {
      if (currentResult) {
        results.push(currentResult);
        currentResult = null;
      }
      results.push(l);
    }
  });

  // push the current result if there is still one being constructed and we've reached the end of the list
  if (currentResult) {
    results.push(currentResult);
  }

  return results;
};

// Run list through parseLinesForCommentBlock (if that feature is supported)
// For each element, if it has children, call self!
const parseMultiLineElements = (list, supportedFeatures) => {
  let result = list;

  if (supportedFeatures.includes('quotation')) {
    result = parseLinesForQuoteBlock(result);
  }

  // handle children elements recursively:
  result = result.map(l => {
    if (l.children) {
      return {
        ...l,
        children: parseMultiLineElements(l.children, supportedFeatures),
      };
    }
    return l;
  });

  result = convertLinesToParagraphs(result);

  return result;
};

export default parseMultiLineElements;
export { parseMultiLineElements, parseLinesForQuoteBlock };
