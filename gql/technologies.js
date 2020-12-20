import gql from "graphql-tag";

export const TECHNOLOGIES = gql`
  query projectList {
    technologies {
      id
      name
      slug
      icon_name
    }
  }
`;
