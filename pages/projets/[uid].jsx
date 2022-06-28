import React from 'react';
import { createClient } from '../../prismicio';
import ProjectDetailSection from '../../sections/project-detail/projectDetailSection';

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID('projects', params.uid);
  const technologyDetails = page.data.relatedTechnologies.map((techno) => {
    if (techno?.technology?.id) {
      return client.getByID(techno.technology.id);
    }
    return null;
  });

  const technoFetch = await Promise.all(technologyDetails);
  page.data.relatedTechnologies = technoFetch;

  return {
    props: { page },
  };
}

export async function getStaticPaths() {
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

const singleProject = ({ page }) => (
  <div className="container">
    <ProjectDetailSection data={page?.data || {}} />
  </div>
);

export default singleProject;
