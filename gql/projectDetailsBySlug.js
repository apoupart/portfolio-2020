import gql from 'graphql-tag';

export const PROJECT_DETAILS = gql`
  query projectList($slug: String) {
    projects(where: { slug: $slug }) {
      image {
        url
        id
      }
      id
      title
      description
      slug
      technologies {
        id
        name
        slug
      }
    }
  }
`;

export default PROJECT_DETAILS;
