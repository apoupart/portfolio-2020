import gql from 'graphql-tag';

export const PROJECT_FILTERED_BY_TECH = gql`
  query projectList($slug: String) {
    projects(where: { technologies: { slug: $slug } }) {
      image {
        url
        id
      }
      id
      title
      slug
      link
      github
      technologies {
        id
        name
        slug
      }
    }
  }
`;

export default PROJECT_FILTERED_BY_TECH;
