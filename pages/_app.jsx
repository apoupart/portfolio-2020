/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useMemo } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

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
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <NavigationBarComponent isHome={router.route && router.route === '/'} />
        <Component {...pageProps} />
        <>
          {/* Reset css */}
          <style>
            {`
              html,
              body,
              div,
              span,
              applet,
              object,
              iframe,
              h1,
              h2,
              h3,
              h4,
              h5,
              h6,
              p,
              blockquote,
              pre,
              a,
              abbr,
              acronym,
              address,
              big,
              cite,
              code,
              del,
              dfn,
              em,
              img,
              ins,
              kbd,
              q,
              s,
              samp,
              small,
              strike,
              strong,
              sub,
              sup,
              tt,
              var,
              b,
              u,
              i,
              center,
              dl,
              dt,
              dd,
              ol,
              ul,
              li,
              fieldset,
              form,
              label,
              legend,
              table,
              caption,
              tbody,
              tfoot,
              thead,
              tr,
              th,
              td,
              article,
              aside,
              canvas,
              details,
              embed,
              figure,
              figcaption,
              footer,
              header,
              hgroup,
              menu,
              nav,
              output,
              ruby,
              section,
              summary,
              time,
              mark,
              audio,
              video {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
                box-sizing: border-box;
              }
              /* HTML5 display-role reset for older browsers */
              article,
              aside,
              details,
              figcaption,
              figure,
              footer,
              header,
              hgroup,
              menu,
              nav,
              section {
                display: block;
              }
              body {
                line-height: 1;
              }
              ol,
              ul {
                list-style: none;
              }
              blockquote,
              q {
                quotes: none;
              }
              blockquote:before,
              blockquote:after,
              q:before,
              q:after {
                content: '';
                content: none;
              }
              table {
                border-collapse: collapse;
                border-spacing: 0;
              }
              html * {
                font-family: 'IBM Plex Mono', monospace;
              }
              strong {
                font-weight: bold;
              }
              .container {
                background-color: #282c34;
                color: #f2f2f2;
              }
              .visually-hidden {
                position: absolute;
                height: 0;
                width: 0;
                overflow: hidden;
                opacity: 0;
              }
            `}
          </style>
        </>
      </ProjectContext.Provider>
    </ParallaxProvider>
  );
};

// Wraps all components in the tree with the data provider
export default MyApp;
// export default MyApp;
