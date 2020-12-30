import gql from 'graphql-tag';

export const PROJECT_LISTS = gql`
  query projectList {
    projects {
      image {
        url
        id
      }
      id
      title
      slug
      technologies {
        id
        name
      }
    }
  }
`;

export default PROJECT_LISTS;
