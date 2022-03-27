/* eslint-disable react/prop-types */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import PropTypes, { string, arrayOf } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { PROJECT_DETAILS } from '../../gql/projectDetailsBySlug';
import style from './projectDetailSection.module.scss';
import TechnologyTagComponent from '../../components/technologyTag/technologyTag';

const ProjectDetailSection = ({ data }) => (
  <>
    <Head>
      <title>Alexandre Poupart - Projet {data.title}</title>
    </Head>
    <section className={style['project-detail']}>
      <div className={style['project-detail__wrapper']}>
        <div className={style['project-detail__image-wrapper']}>
          {data.image && data.image[0] && (
            <img
              src={data.image[0].url}
              className={style['project-detail__image']}
              alt={`Quelqu'un navigant sur le projet ${data.title}`}
            />
          )}
        </div>
        <div className={style['project-detail__content']}>
          <h1 className={style['project-detail__title']}>{data.title}</h1>
          <ReactMarkdown className={style['project-detail__description']}>
            {data && data.description && data.description.lenght
              ? data?.description[0]?.text
              : ''}
          </ReactMarkdown>
          <ul className={style['project-detail__technology-list']}>
            {data?.technologies?.map((technology) => (
              <li
                key={technology.id}
                className={style['project-detail__technology-list-item']}
              >
                <TechnologyTagComponent technology={technology} />
              </li>
            ))}
          </ul>
          {/* {data.year && (
            <p className={style['project-detail__technology-opt-data']}>
              {data.year}
            </p>
          )}
          {data.link && (
            <p className={style['project-detail__technology-opt-data']}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <a
                href={`//${data.link}`}
                rel="noreferrer"
                target="_blank"
                title={`Site web du projet ${data.title}`}
              >
                {data.link}
              </a>
            </p>
          )}
          {data.github && (
            <p className={style['project-detail__technology-opt-data']}>
              <FontAwesomeIcon icon={faGithub} />
              <a
                href={`//${data.github}`}
                rel="noreferrer"
                target="_blank"
                title={`Accéder au projet: ${data.title} sur github`}
              >
                Voir sur Github
              </a>
            </p>
          )} */}
        </div>
      </div>
    </section>
  </>
);

ProjectDetailSection.defaultProps = {
  data: {
    title: '',
    description: [],
  },
};

ProjectDetailSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.arrayOf(
      PropTypes.shape({
        type: string,
        text: string,
        spans: arrayOf(PropTypes.string),
      })
    ),
  }),
};

export default ProjectDetailSection;
