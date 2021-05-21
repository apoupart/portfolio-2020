import gql from 'graphql-tag';

export const KNOWLEDGES_LIST = gql`
  query knowledge($locale: String) {
    knowledges(locale: $locale) {
      id
      title
      icon
      slug
      knowledgeList {
        name
        icon
      }
    }
  }
`;

export default KNOWLEDGES_LIST;
