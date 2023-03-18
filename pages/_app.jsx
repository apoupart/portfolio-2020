/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useMemo } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../assets/scss/reset.scss';

import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import NavigationBarComponent from '../components/navigationBar/navigationBar';
import ProjectContext from '../context/project-context';
import '../services/fontAwesomeLibrairy';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const MyApp = ({ Component, pageProps, router }) => {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnology, setTechnology] = useState('');
  const value = useMemo(
    () => ({
      projects,
      technologies,
      selectedTechnology,
      setProjects,
      setTechnology,
      setTechnologies,
    }),
    [projects, technologies, selectedTechnology]
  );

  return (
    <ParallaxProvider>
      <ProjectContext.Provider value={value}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <NavigationBarComponent isHome={router.route && router.route === '/'} />
        <Component {...pageProps} />
      </ProjectContext.Provider>
    </ParallaxProvider>
  );
};

export default MyApp;