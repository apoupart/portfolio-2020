import { PROJECT_LISTS } from "../../gql/projectList";
import { useQuery } from "@apollo/react-hooks";

// const singleProject = () => {};

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
//   // Return a list of possible value for id
// }

// export async function getStaticProps({ params }) {
//   console.log("params", params);
//   //
// }
// export default singleProject;

import { useRouter } from "next/router";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/projects")
  const posts = await res.json()


  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id, slug: post.slug },
  }));
  console.log('---posts', paths);
  return {
    paths,
    fallback: true, // fallback is set to false because we already know the slugs ahead of time
  };
  //   const paths = getAllPostIds();
  //   return {
  //     paths,
  //     fallback: false,
  //   };
  // Return a list of possible value for id
}
export async function getStaticProps({ params }) {
  console.log("params", params);
  return {
      props: params
  }
  //
}
const singleProject = () => {
  const router = useRouter();
  const { slug } = router.query; // Destructuring our router object
  console.log("project", slug);

  return (
    <>
      <h2>is placed in {slug}</h2>
    </>
  );
};

export default singleProject;
