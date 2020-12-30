import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import Head from 'next/head';
import { withApollo } from '../libs/apollo';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        <>
          {/* Reset css */}
          <style jsx global>
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
              html {
                font-family: 'IBM Plex Mono', monospace;
              }
              strong {
                font-weight: bold;
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
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withApollo({ ssr: true })(MyApp);
