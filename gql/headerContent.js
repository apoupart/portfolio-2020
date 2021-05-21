import gql from 'graphql-tag';

export const HEADING = gql`
  query headingContent($locale: String) {
    content(locale: $locale) {
      catch_phrase
      banner {
        url
      }
    }
  }
`;

export default HEADING;
