import gql from 'graphql-tag';

export const TECHNOLOGIES = gql`
  query projectList($locale: String) {
    technologies(locale: $locale) {
      id
      name
      slug
      icon_name
    }
  }
`;

export default TECHNOLOGIES;
