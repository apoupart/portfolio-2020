import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
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
  return (
    <>
      <Head>
        <title>Alexandre Poupart - Projet {projectData.title}</title>
      </Head>
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
            {projectData.year && (
              <p className={style['project-detail__technology-opt-data']}>
                {projectData.year}
              </p>
            )}
            {projectData.link && (
              <p className={style['project-detail__technology-opt-data']}>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                <a
                  href={`//${projectData.link}`}
                  rel="noreferrer"
                  target="_blank"
                  title={`Site web du projet ${projectData.title}`}
                >
                  {projectData.link}
                </a>
              </p>
            )}
            {projectData.github && (
              <p className={style['project-detail__technology-opt-data']}>
                <FontAwesomeIcon icon={faGithub} />
                <a
                  href={`//${projectData.github}`}
                  rel="noreferrer"
                  target="_blank"
                  title={`Accéder au projet: ${projectData.title} sur github`}
                >
                  Voir sur Github
                </a>
              </p>
            )}
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
