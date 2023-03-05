/* eslint-disable import/prefer-default-export */
export const hasWindowAvailable = () => typeof window !== 'undefined' && window;

export const wysiwygToHtmlParser = (content, isSeparated = false) =>
  content.map((paragraph, index) => {
    const originalText = paragraph?.text || '';
    let newText = originalText;
    if (paragraph.spans) {
      paragraph.spans.forEach((element) => {
        const sliceValue = originalText.slice(element.start, element.end);
        newText = newText.replace(
          sliceValue,
          `<${element.type}>${sliceValue}</${element.type}>`
        );
      });
    }
    return (<p key="paragraph-${index + 1}">{addSpanToText(newText, isSeparated)}</p>);
  });

const addSpanToText = (content, isSeparated) => {
  if (!isSeparated) {
    return content;
  }

  const contentArray = content.split(' ');
  const contentMap = contentArray.map(text => (<><span>{text}</span> </>));

  return contentMap;
}
