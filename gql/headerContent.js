import gql from "graphql-tag";

export const HEADING = gql`
  query headingContent {
    content {
      catch_phrase
      banner {
        url
      }
    }
  }
`;
