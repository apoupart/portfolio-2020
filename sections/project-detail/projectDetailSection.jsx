import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { PROJECT_DETAILS } from '../../gql/projectDetailsBySlug';
import style from './projectDetailSection.module.scss';
import TechnologyTagComponent from '../../components/technologyTag/technologyTag';

const ProjectDetailSection = ({ slug }) => {
  const { loading, error, data } = useQuery(PROJECT_DETAILS, {
    variables: { slug: slug || undefined },
  });
  if (error) return <h1>-Error loading data on projectLists Component</h1>;
  if (loading) return <h1>Loading via projectLists...</h1>;

  if (!data || !data.projects || !data.projects.length) {
    return 'Missing info';
  }
  const projectData = data.projects[0];
  console.log('data', data, data.name, slug);
  return (
    <>
      <section className={style['project-detail']}>
        <div className={style['project-detail__wrapper']}>
          <div className={style['project-detail__image-wrapper']}>
            {projectData.image && projectData.image[0] && (
              <img
                src={projectData.image[0].url}
                className={style['project-detail__image']}
                alt={`Quelqu'un navigant sur le projet ${projectData.title}`}
              />
            )}
          </div>
          <div className={style['project-detail__content']}>
            <h1 className={style['project-detail__title']}>
              {projectData.title}
            </h1>
            <ReactMarkdown className={style['project-detail__description']}>
              {projectData.description}
            </ReactMarkdown>
            <ul className={style['project-detail__technology-list']}>
              {projectData.technologies.map((technology) => (
                <li
                  key={technology.id}
                  className={style['project-detail__technology-list-item']}
                >
                  <TechnologyTagComponent technology={technology} />
                </li>
              ))}
            </ul>
            {projectData.year && <p>{projectData.year}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

ProjectDetailSection.defaultProps = {
  slug: '',
};

ProjectDetailSection.propTypes = {
  slug: PropTypes.string,
};

export default ProjectDetailSection;
