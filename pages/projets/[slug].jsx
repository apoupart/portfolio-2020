import React from 'react';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL}/projects`);
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id, slug: post.slug },
  }));
  return {
    paths,
    fallback: false, // fallback is set to false because we already know the slugs ahead of time
  };
}
export async function getStaticProps({ params }) {
  return {
    props: params,
  };
  //
}
const singleProject = () => {
  const router = useRouter();
  const { slug } = router.query; // Destructuring our router object

  return (
    <>
      <h2>
        is placed in
        {slug}
      </h2>
    </>
  );
};

export default singleProject;
