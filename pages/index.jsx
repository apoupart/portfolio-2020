/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Head from 'next/head';
import { createClient } from '../prismicio';
import ProjectContext from '../context/project-context';
import ContentRepeaterComponent from '../components/contentRepeater/contentRepeater';

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getSingle('home');
  const projectsList = await client.getAllByType('projects');
  const technologies = await client.getAllByType('technology');
  return {
    props: { page, projectsList, technologies },
  };
}

const Home = ({ page, projectsList, technologies }) => {
  const { setProjects, setTechnologies } = useContext(ProjectContext);
  setProjects(projectsList);
  setTechnologies(technologies);

  const favicon = (
    <>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );

  return (
    <div className="container">
      <Head>
        <title>Alexandre Poupart - Developpeur Front-End // Portfolio</title>
        {favicon}
      </Head>
      <ContentRepeaterComponent data={page?.data} />
      {/* 
      Legacy component with graphQL
      <HeaderBannerComponent bannerUrl={data.content.banner.url} />
      <AboutMeComponent catchPhrase={data.content.catch_phrase} />
      <ProjectsSectionComponent />
      <KnowledgeListComponent /> */}
    </div>
  );
};

export default Home;
