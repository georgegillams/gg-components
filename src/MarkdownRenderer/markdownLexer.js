import HelperFunctions from '../helpers/HelperFunctions';

const DEFAULT_SUPPORTED_FEATURES = [
  'code',
  'blockCode',
  'bold',
  'italic',
  'strikethrough',
  'quotation',
  'link',
  'footnote',
  'image',
  'video',
  'citation',
  'sectioning',
  'linebreak',
];

const MD_SECTION_REGEX = /(.*)\n#\ ([^\n]+)\n(.*)/gims;
const MD_SUBSECTION_REGEX = /(.*)\n##\ ([^\n]+)\n(.*)/gims;
const MD_SUBSUBSECTION_REGEX = /(.*)\n###\ ([^\n]+)\n(.*)/gims;
const MD_BLOCK_CODE_REGEX = /(.*)```\ ?([^\,\n]*)\,?\ ?([^\n]*)\n([.\s\S]*)\n```(.*)/gims;

const MD_IMAGE_REGEX = /([^]*)!\[([^\[\]]*)\]\(([^\(\)]*)\)([^]*)/gims;
const MD_LAZY_LOAD_IMAGE_REGEX = /([^]*)!\[([0-9]+)x([0-9]+)\]\[([^\[\]]*)\]\(([^\(\)]*)\)([^]*)/gi;
const MD_YOUTUBE_REGEX = /(.*)!yt\[([^\[\]]*)\]\(([^\(\)]*)\)(.*)/gims;

const MD_LINK_REGEX = /(.*)\[([^\[\]]*)\]\(([^\(\)]*)\)(.*)/gims;
const MD_LINK_BIG_REGEX = /(.*)\*\[([^\[\]]*)\]\(([^\(\)]*)\)(.*)/gims;
const MD_STRIKETHROUGH_REGEX = /(.*)~([^~]*)~(.*)/gims;
const MD_INLINE_CODE_REGEX = /(.*)`([^`]*)`(.*)/gims;
const MD_LINE_BREAK_REGEX = /(.*)\n\n+(.*)/gims;
const MD_BOLD_REGEX = /(.*)\*\*([^\*]*)\*\*(.*)/gims;
const MD_ITALIC_REGEX = /(.*)\_([^\*]*)\_(.*)/gims;
const MD_QUOTATION_REGEX = /(.*)\n\>([^\n]*)\n(.*)/gims;
const MD_CITATION_REGEX = /(.*)\[([0-9]*[0-9\,\ ]+)\](.*)/gims;

const MD_REFERENCES_REGEX = /([^]*)!printReferences\(\)([^]*)/gi;
const MD_FOOTNOTE_1_REGEX = /([^]*)!footnote\(([0-9]+)\)([^]*)/gi;
const MD_FOOTNOTE_2_REGEX = /([^]*)!footnote\[([0-9]+)\]\(([^\(\)]+)\)([^]*)/gi;

// This component works recursively. Each time it checks for a feature (such as a link, stikethrough etc)
// At each stage, if it finds one it renders the appropriate component, passing the surrounding text to
// another instance of BlogPreviewContent. if no such feature is found, the content is simply rendered.

const markdownLexer = (content, supportedFeatures) => {
  let supportedFeaturesToUse = supportedFeatures;
  if (!supportedFeaturesToUse) {
    supportedFeaturesToUse = DEFAULT_SUPPORTED_FEATURES;
  }
  return lexRecursive(content, 0, supportedFeaturesToUse);
};

const lexRecursive = (content, depth, supportedFeatures) => {
  // console.log(`content`, content);
  if (!content) {
    return content;
  }

  const mdFootNote1 = content.split(MD_FOOTNOTE_1_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'footnote') &&
    mdFootNote1.length > 2
  ) {
    const preFootnoteText = `${mdFootNote1.shift()}${mdFootNote1.shift()}`;
    const footnoteNumber = mdFootNote1.shift();
    const postFootnoteText = mdFootNote1.join('');
    return [
      lexRecursive(preFootnoteText, depth, supportedFeatures),
      { type: 'mdFootNote1', number: footnoteNumber },
      lexRecursive(postFootnoteText, depth, supportedFeatures),
    ];
  }

  // If it's a footnote, return a superscript number:
  const mdFootNote2 = content.split(MD_FOOTNOTE_2_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'footnote') &&
    mdFootNote2.length > 3
  ) {
    // console.log(`mdFootNote2`, mdFootNote2);
    const preFootnoteText = `${mdFootNote2.shift()}${mdFootNote2.shift()}`;
    const footnoteNumber = mdFootNote2.shift();
    const footnoteValue = mdFootNote2.shift();
    const postFootnoteText = mdFootNote2.join('');
    return [
      lexRecursive(preFootnoteText, depth, supportedFeatures),
      {
        type: 'mdFootNote2',
        number: footnoteNumber,
        value: lexRecursive(footnoteValue, depth + 1, supportedFeatures),
      },
      lexRecursive(postFootnoteText, depth, supportedFeatures),
    ];
  }

  // If it's a quotation, return a Quote component:
  const mdQuotation = content.split(MD_QUOTATION_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'quotation') &&
    mdQuotation.length > 2
  ) {
    // console.log(`mdQuotation`, mdQuotation);
    const preQuotationText = `${mdQuotation.shift()}${mdQuotation.shift()}`;
    const quotation = mdQuotation.shift();
    const postQuotationText = mdQuotation.join('');
    return [
      lexRecursive(preQuotationText, depth, supportedFeatures),
      {
        type: 'quotation',
        child: lexRecursive(quotation, depth + 1, supportedFeatures),
      },
      lexRecursive(postQuotationText, depth, supportedFeatures),
    ];
  }

  // If it's a regular image, return an Image component:
  const mdImage = content.split(MD_IMAGE_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'image') &&
    mdImage.length > 3
  ) {
    // console.log(`mdImage`, mdImage);
    const preImageText = `${mdImage.shift()}${mdImage.shift()}`;
    const imageAltText = mdImage.shift();
    const imageSrc = mdImage.shift();
    const postImageText = mdImage.join('');
    return [
      lexRecursive(preImageText, depth, supportedFeatures),
      { type: 'image', src: imageSrc },
      lexRecursive(postImageText, depth, supportedFeatures),
    ];
  }

  // If it's a lazy-loaded image, return an Image component:
  const mdLazyLoadedImage = content.split(MD_LAZY_LOAD_IMAGE_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'image') &&
    mdLazyLoadedImage.length > 5
  ) {
    const preImageText = `${mdLazyLoadedImage.shift()}${mdLazyLoadedImage.shift()}`;
    const aspectX = parseInt(mdLazyLoadedImage.shift(), 10);
    const aspectY = parseInt(mdLazyLoadedImage.shift(), 10);
    const imageAltText = mdLazyLoadedImage.shift();
    const imageSrc = mdLazyLoadedImage.shift();
    const postImageText = mdLazyLoadedImage.join('');
    return [
      lexRecursive(preImageText, depth, supportedFeatures),
      {
        type: 'lazyImage',
        src: imageSrc,
        alt: imageAltText,
        aspectX,
        aspectY,
      },
      lexRecursive(postImageText, depth, supportedFeatures),
    ];
  }

  // If it's a YouTube video, return a YoutubeEmbedVideo component:
  const mdYtVideo = content.split(MD_YOUTUBE_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'video') &&
    mdYtVideo.length > 3
  ) {
    const preLinkText = `${mdYtVideo.shift()}${mdYtVideo.shift()}`;
    const showSuggestions = mdYtVideo.shift() === 'true';
    const videoId = mdYtVideo.shift();
    const postLinkText = mdYtVideo.join('');
    return [
      lexRecursive(preLinkText, depth, supportedFeatures),
      {
        type: 'youtubeVideo',
        showSuggestions,
        videoId,
      },
      lexRecursive(postLinkText, depth, supportedFeatures),
    ];
  }

  // If it's a **BIG** hyperlink, return a <a>-wrapped Section component:
  const mdBigLink = content.split(MD_LINK_BIG_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'link') &&
    mdBigLink.length > 3
  ) {
    // console.log(`mdBigLink`, mdBigLink);
    const preLinkText = `${mdBigLink.shift()}${mdBigLink.shift()}`;
    const linkText = mdBigLink.shift();
    const linkRef = mdBigLink.shift();
    const postLinkText = mdBigLink.join('');
    const external = HelperFunctions.includes(linkRef, '.');
    return [
      lexRecursive(preLinkText, depth, supportedFeatures),
      {
        type: 'bigLink',
        title: linkText,
        ref: linkRef,
        external,
      },
      lexRecursive(postLinkText, depth, supportedFeatures),
    ];
  }

  // If it's a hyperlink, return a TextLink component:
  const mdLink = content.split(MD_LINK_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'link') &&
    mdLink.length > 3
  ) {
    const preLinkText = `${mdLink.shift()}${mdLink.shift()}`;
    const linkText = mdLink.shift();
    const linkRef = mdLink.shift();
    const postLinkText = mdLink.join('');
    const external = HelperFunctions.includes(linkRef, '.');
    return [
      lexRecursive(preLinkText, depth, supportedFeatures),
      {
        type: 'link',
        child: lexRecursive(linkText, depth + 1, supportedFeatures),
        ref: linkRef,
        external,
      },
      lexRecursive(postLinkText, depth, supportedFeatures),
    ];
  }

  // If it's a subsubsection, return a bold title component:
  const mdSection = content.split(MD_SECTION_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'sectioning') &&
    mdSection.length > 2
  ) {
    const preSectionText = `${mdSection.shift()}${mdSection.shift()}`;
    const sectionText = mdSection.shift();
    const inSectionText = mdSection.join('');
    const postSectionText = null;
    return [
      lexRecursive(preSectionText, depth + 1, supportedFeatures),
      {
        type: 'section',
        title: sectionText,
        child: lexRecursive(inSectionText, depth + 1, supportedFeatures),
      },
      lexRecursive(postSectionText, depth, supportedFeatures),
    ];
  }

  // If it's a subsubsection, return a bold title component:
  const mdSubSection = content.split(MD_SUBSECTION_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'sectioning') &&
    mdSubSection.length > 2
  ) {
    const preSSectionText = `${mdSubSection.shift()}${mdSubSection.shift()}`;
    const sSectionText = mdSubSection.shift();
    const inSSectionText = mdSubSection.join('');
    const postSSectionText = null;
    return [
      lexRecursive(preSSectionText, depth + 1, supportedFeatures),
      {
        type: 'subsection',
        title: sSectionText,
        child: lexRecursive(inSSectionText, depth + 1, supportedFeatures),
      },
      lexRecursive(postSSectionText, depth, supportedFeatures),
    ];
  }

  // If it's a subsubsection, return a bold title component:
  const mdSubSubSection = content.split(MD_SUBSUBSECTION_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'sectioning') &&
    mdSubSubSection.length > 2
  ) {
    const preSSSectionText = `${mdSubSubSection.shift()}${mdSubSubSection.shift()}`;
    const sSSectionText = mdSubSubSection.shift();
    const inSSSectionText = mdSubSubSection.join('');
    const postSSSectionText = null;
    return [
      lexRecursive(preSSSectionText, depth + 1, supportedFeatures),
      {
        type: 'subsubsection',
        title: sSSectionText,
        child: lexRecursive(inSSSectionText, depth + 1, supportedFeatures),
      },
      lexRecursive(postSSSectionText, depth, supportedFeatures),
    ];
  }

  // If it's italic, return a span with fontStyle: 'italic' component:
  const mdItalic = content.split(MD_ITALIC_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'italic') &&
    mdItalic.length > 2
  ) {
    const preItalicText = `${mdItalic.shift()}${mdItalic.shift()}`;
    const italicText = mdItalic.shift();
    const postItalicText = mdItalic.join('');
    return [
      lexRecursive(preItalicText, depth, supportedFeatures),
      {
        type: 'italic',
        child: lexRecursive(italicText, depth + 1, supportedFeatures),
      },
      lexRecursive(postItalicText, depth, supportedFeatures),
    ];
  }

  // If it's bold, return a span with fontWeight: 'bold' component:
  const mdBold = content.split(MD_BOLD_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'bold') &&
    mdBold.length > 2
  ) {
    const preBoldText = `${mdBold.shift()}${mdBold.shift()}`;
    const boldText = mdBold.shift();
    const postBoldText = mdBold.join('');
    return [
      lexRecursive(preBoldText, depth, supportedFeatures),
      {
        type: 'bold',
        child: lexRecursive(boldText, depth + 1, supportedFeatures),
      },
      lexRecursive(postBoldText, depth, supportedFeatures),
    ];
  }

  // TODO implement citation parsing
  //   // If it's a reference citation, return the Citation:
  //   const mdCitation = content.split(MD_CITATION_REGEX);
  //   if (
  //     HelperFunctions.includes(supportedFeatures, 'citation') &&
  //     mdCitation.length > 2
  //   ) {
  //     const preCitationText = `${mdCitation.shift()}${mdCitation.shift()}`;
  //     const referenceIdentifier = mdCitation.shift();
  //     const postCitationText = mdCitation.join('');
  //     return (
  //       <span className={classNameFinal.join(' ')} {...rest}>
  //         <RecursiveWrapper
  //           {...this.props}
  //           {...this.props}
  //           content={preCitationText}
  //         />
  //         {Cite && <Cite identifier={referenceIdentifier} />}
  //         <RecursiveWrapper
  //           {...this.props}
  //           {...this.props}
  //           content={postCitationText}
  //         />
  //       </span>
  //     );
  //   }
  //
  //   // If it's reference print-out, return a references section:
  //   const mdReferencesPrintout = content.split(MD_REFERENCES_REGEX);
  //   if (
  //     HelperFunctions.includes(supportedFeatures, 'citation') &&
  //     mdReferencesPrintout.length > 1
  //   ) {
  //     const preReferencesText = `${mdReferencesPrintout.shift()}${mdReferencesPrintout.shift()}`;
  //     const postReferencesText = mdReferencesPrintout.join('');
  //     return (
  //       <span className={classNameFinal.join(' ')} {...rest}>
  //         <RecursiveWrapper {...this.props} content={preReferencesText} />
  //         {Cite && (
  //           <Subsection
  //             className={elementClassNameFinal.join(' ')}
  //             noAnchor={noAnchor}
  //             light={light}
  //             name="References"
  //           >
  //             <References
  //               className={[
  //                 'pages__references',
  //                 elementClassNameFinal.join(' '),
  //               ].join(' ')}
  //               referenceStyle={REFERENCE_STYLES.harvard}
  //               references={references}
  //             />
  //           </Subsection>
  //         )}
  //         <RecursiveWrapper {...this.props} content={postReferencesText} />
  //       </span>
  //     );
  //   }

  // If it's a strikethrough, return a Strikethrough component:
  const mdStrikethrough = content.split(MD_STRIKETHROUGH_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'strikethrough') &&
    mdStrikethrough.length > 2
  ) {
    const preStrikeText = `${mdStrikethrough.shift()}${mdStrikethrough.shift()}`;
    const strikenText = mdStrikethrough.shift();
    const postStrikeText = mdStrikethrough.join('');
    return [
      lexRecursive(preStrikeText, depth, supportedFeatures),
      {
        type: 'strikethrough',
        child: lexRecursive(strikenText, depth + 1, supportedFeatures),
      },
      lexRecursive(postStrikeText, depth, supportedFeatures),
    ];
  }

  // If it's inline code, return a CodeInline component:
  const mdBlockCode = content.split(MD_BLOCK_CODE_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'blockCode') &&
    mdBlockCode.length > 4
  ) {
    const preCodeBlockText = `${mdBlockCode.shift()}${mdBlockCode.shift()}`;
    const language = mdBlockCode.shift();
    const githubLink = mdBlockCode.shift();
    const blockCode = mdBlockCode.shift();
    const postCodeBlockText = mdBlockCode.join('');
    return [
      lexRecursive(preCodeBlockText, depth, supportedFeatures),
      {
        type: 'codeblock',
        language,
        githubUrl: githubLink,
        text: blockCode,
      },
      lexRecursive(postCodeBlockText, depth, supportedFeatures),
    ];
  }

  // If it's inline code, return a CodeInline component:
  const mdInlineCode = content.split(MD_INLINE_CODE_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'code') &&
    mdInlineCode.length > 2
  ) {
    const preInlineCodeText = `${mdInlineCode.shift()}${mdInlineCode.shift()}`;
    const inlineCode = mdInlineCode.shift();
    const postInlineCodeText = mdInlineCode.join('');
    return [
      lexRecursive(preInlineCodeText, depth, supportedFeatures),
      {
        type: 'code',
        text: inlineCode,
      },
      lexRecursive(postInlineCodeText, depth, supportedFeatures),
    ];
  }

  const mdLineBreak = content.split(MD_LINE_BREAK_REGEX);
  if (
    HelperFunctions.includes(supportedFeatures, 'linebreak') &&
    mdLineBreak.length > 2
  ) {
    const preBreakContent = `${mdLineBreak.shift()}${mdLineBreak.shift()}`;
    const postBreakContent = mdLineBreak.join('');
    return [
      lexRecursive(preBreakContent, depth, supportedFeatures),
      {
        type: 'linebreak',
      },
      lexRecursive(postBreakContent, depth, supportedFeatures),
    ];
  }

  if (typeof content === 'string') {
    const mdStringTrimmed = content.split(/\n*(.*)\n*/gim);
    // console.log(`mdStringTrimmed`, mdStringTrimmed);
    if (mdStringTrimmed.length > 2) {
      mdStringTrimmed.shift();
      const trimmedString = mdStringTrimmed.shift();
      return trimmedString;
    }
  }

  // Otherwise we just return the block of text:
  return content;
};

export default markdownLexer;
export { markdownLexer, DEFAULT_SUPPORTED_FEATURES };
