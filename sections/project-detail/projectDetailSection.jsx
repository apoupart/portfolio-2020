/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import PropTypes, { string, arrayOf } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { PROJECT_DETAILS } from '../../gql/projectDetailsBySlug';
import style from './projectDetailSection.module.scss';
import TechnologyTagComponent from '../../components/technologyTag/technologyTag';
import { wysiwygToHtmlParser } from '../../services/utils';

const ProjectDetailSection = ({ data }) => {
  const content = wysiwygToHtmlParser(data?.description);
  console.log('data', data);
  return (
    <>
      <Head>
        <title>Alexandre Poupart - Projet {data.title}</title>
      </Head>
      <section className={style['project-detail']}>
        <div className={style['project-detail__wrapper']}>
          <div className={style['project-detail__image-wrapper']}>
            {data.image && data.image && (
              <img
                src={data.image.url}
                className={style['project-detail__image']}
                alt={`Quelqu'un navigant sur le projet ${data.title}`}
              />
            )}
          </div>
          <div className={style['project-detail__content']}>
            <h1 className={style['project-detail__title']}>{data.title}</h1>
            {content.map((element, key) => (
              <div
                key={`content-${key + 1}`}
                className={style['project-detail__description']}
                dangerouslySetInnerHTML={{ __html: element }}
              />
            ))}
            {/* <ReactMarkdown>
              {data && data.description && data.description.lenght
                ? data?.description[0]?.text
                : ''}
            </ReactMarkdown> */}
            <ul className={style['project-detail__technology-list']}>
              {data?.relatedTechnologies?.map((group) => (
                <li
                  key={group?.technology.id}
                  className={style['project-detail__technology-list-item']}
                >
                  <TechnologyTagComponent technology={group?.technology} />
                </li>
              ))}
            </ul>
            {data.years && (
              <p className={style['project-detail__technology-opt-data']}>
                {data.years}
              </p>
            )}
            {data.link && (
              <p className={style['project-detail__technology-opt-data']}>
                {/* <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
                {/* <a
                  href={`//${data.link}`}
                  rel="noreferrer"
                  target="_blank"
                  title={`Site web du projet ${data.title}`}
                >
                  {data.link}
                </a> */}
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
            )}
          </div>
        </div>
      </section>
    </>
  );
};

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
