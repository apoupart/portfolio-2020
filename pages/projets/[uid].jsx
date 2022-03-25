import { Client } from '@prismicio/client';
import React from 'react';
import { createClient } from '../../prismicio';

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  console.log('params id', params);

  const page = await client.getByUID('projects', params.uid);
  console.log('page equal', page);

  return {
    props: { page },
  };
}

export async function getStaticPaths() {
  // const docs = await Client().query(
  //   // Prismic predicates tell the API which documents to retrieve from the repository.
  //   Prismic.Predicates.at('document.type', 'page'),
  //   { lang: '*' }
  // )
  // const client = createClient();

  // const docs = await client.getAllByType('projects');
  // return {
  //   paths: docs.results.map((doc) => {
  //     return { params: { uid: doc.uid } }
  //   }),
  //   fallback: false,
  // }
  const client = createClient();

  const documents = await client.getAllByType('projects');

  return {
    paths: documents.map((page) => ({
      params: {
        uid: page.uid,
      },
    })),
    fallback: false,
  };
}

const singleProject = ({ page }) => <h1>{page.uid}</h1>;

export default singleProject;
