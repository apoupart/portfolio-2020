import gql from "graphql-tag";

export const PROJECT_LISTS = gql`
  query projectList {
    projects {
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
      }
    }
  }
`;
