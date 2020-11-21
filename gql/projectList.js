import gql from "graphql-tag";

export const PROJECT_LISTS = gql`
query projectList {
    projects {
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
