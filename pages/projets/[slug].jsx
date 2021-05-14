import { useRouter } from 'next/router';
import React from 'react';
import ProjectDetailSection from '../../sections/project-detail/projectDetailSection';

export async function getStaticPaths({ locales }) {
  console.log('getstaticpath');
  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL}/projects`);
  const posts = await res.json();

  const paths = posts
    .map((post) => {
      const maps = locales.map((locale) => ({
        params: { id: post.id, slug: post.slug },
        locale,
      }));
      return maps;
    })
    .flat();

  console.log('getstaticpath', paths);

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  console.log('getstaticprops');
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
