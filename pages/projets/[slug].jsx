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
  return {
    paths: [
      { params: { slug: "plus-immobilier-2016" } },
      { params: { slug: "chalet-et-motel" } },
    ],
    fallback: false, // fallback is set to false because we already know the slugs ahead of time
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
