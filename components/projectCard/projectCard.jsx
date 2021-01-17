import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import style from './projectCard.module.scss';

const ProjectCardComponent = ({ project, isLoading }) => {
  if (isLoading) {
    return (
      <div
        className={[
          style['project-card'],
          style[`project-card--is-loading`],
        ].join(' ')}
      >
        <div className={style['project-card__padding']} />
      </div>
    );
  }
  return (
    <Link
      href="/projets/[slug]"
      as={`/projets/${encodeURIComponent(project.slug)}`}
    >
      <button
        className={[
          style['project-card'],
          style[`project-card--tech-${project.slug}`],
        ].join(' ')}
        type="button"
        data-technology={project.technologies[0].slug}
      >
        <div className={style['project-card__padding']} />
        <img
          className={style['project-card__image']}
          src={project.image[0].url}
          loading="lazy"
          alt={`Image designant le project: ${project.title}`}
          aria-hidden="true"
        />
        <div className={style['project-card__wrapper']}>
          <p className={style['project-card__title']}>
            <span className="visually-hidden">Visiter le projets: </span>
            {project.title}
          </p>
        </div>
      </button>
    </Link>
  );
};

ProjectCardComponent.defaultProps = {
  project: {
    title: '',
    slug: '',
    image: [
      {
        url: '',
        id: '',
      },
    ],
    technologies: [
      {
        slug: '',
      },
    ],
  },
  isLoading: false,
};

ProjectCardComponent.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.shape([
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ]),
    technologies: PropTypes.shape([
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
    ]),
  }),
  isLoading: PropTypes.bool,
};

export default ProjectCardComponent;
