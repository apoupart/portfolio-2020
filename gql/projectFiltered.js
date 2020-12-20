import gql from 'graphql-tag';

export const PROJECT_FILTERED = gql`
  query projectList($slug: String) {
    projects(where: { technologies: { slug: $slug } }) {
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

export default PROJECT_FILTERED;
