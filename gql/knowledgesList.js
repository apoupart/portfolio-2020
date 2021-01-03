import gql from 'graphql-tag';

export const KNOWLEDGES_LIST = gql`
  query knowledge {
    knowledges {
      id
      title
      icon
      knowledgeList {
        name
        icon
      }
    }
  }
`;

export default KNOWLEDGES_LIST;
