export const hasWindowAvailable = () => typeof window !== 'undefined' && window;

export const wysiwygToHtmlParser = (content) =>
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
    return `<p key="paragraph-${index + 1}">${newText}</p>`;
  });


export const wysiwygToText = (content, isSeparated = false) =>
  content.map((paragraph, index) => {
    const originalText = paragraph?.text || '';
    let newText = originalText;
    if (paragraph.spans) {
      paragraph.spans.forEach((element) => {
        const sliceValue = originalText.slice(element.start, element.end);
        newText = newText.replace(
          sliceValue,
          `<${element.type}>${sliceValue} </${element.type}>`
        );
      });
    }
    return (<p key="paragraph-${index + 1}">{addSpanToText(newText, isSeparated)}</p>);
  });


export const addSpanToText = (content) => {
  const contentArray = content.split(' ');
  const contentMap = contentArray.map(text => (<><span>{text}</span> </>));

  return contentMap;
}
