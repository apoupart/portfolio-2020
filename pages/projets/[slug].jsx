import React from 'react';
import { useRouter } from 'next/router';
import ProjectDetailSection from '../../sections/project-detail/projectDetailSection';

export async function getStaticPaths() {
  console.log('getStaticPaths');
  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL}/projects`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id, slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  console.log('getStaticProps', params);
  return {
    props: params,
  };
}
const singleProject = () => {
  const router = useRouter();
  const { slug } = router.query; // Destructuring our router object

  return (
    <div className="container">
      <ProjectDetailSection slug={slug} />
    </div>
  );
};

export default singleProject;
