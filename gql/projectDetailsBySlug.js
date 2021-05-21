import gql from 'graphql-tag';

export const PROJECT_DETAILS = gql`
  query projectList($locale: String, $slug: String) {
    projects(locale: $locale, where: { slug: $slug }) {
      image {
        url
        id
      }
      id
      title
      description
      slug
      year
      link
      github
      technologies {
        id
        name
        slug
        icon_name
      }
    }
  }
`;

export default PROJECT_DETAILS;
