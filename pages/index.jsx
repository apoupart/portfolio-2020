import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import AboutMeComponent from '../components/aboutMe/aboutMe';
import HeaderComponent from '../components/header/header';
import ProjectsSectionComponent from '../sections/projects/projectSection';
import { HEADING } from '../gql/headerContent';

const Home = () => {
  const { loading, error, data } = useQuery(HEADING);
  if (error) return <h1>Error with header component</h1>;
  if (loading) return <h1>Loading the heading...</h1>;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent bannerUrl={data.content.banner.url} />
      <AboutMeComponent catchPhrase={data.content.catch_phrase} />
      <ProjectsSectionComponent />

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
