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
      href="/projets/[uid]"
      as={`/projets/${encodeURIComponent(project.uid)}`}
    >
      <button
        className={[
          style['project-card'],
          style[`project-card--tech-${project.data.slug}`],
        ].join(' ')}
        type="button"
        data-technology={project.data['related-technology'][0]?.slug}
      >
        <div className={style['project-card__padding']} />
        <img
          className={style['project-card__image']}
          src={project.data.image[0]?.url}
          loading="lazy"
          alt={`Image designant le project: ${project.data.title}`}
          aria-hidden="true"
        />
        <div className={style['project-card__wrapper']}>
          <p className={style['project-card__title']}>
            <span className="visually-hidden">Visiter le projets: </span>
            {project.data.title}
          </p>
        </div>
      </button>
    </Link>
  );
};

ProjectCardComponent.defaultProps = {
  project: {
    uid: '',
    data: {
      title: '',
      slug: '',
      image: [
        {
          url: '',
          id: '',
        },
      ],
      'related-technology': [
        {
          slug: '',
        },
      ],
    },
  },
  isLoading: false,
};

ProjectCardComponent.propTypes = {
  project: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      image: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        })
      ),
      'related-technology': PropTypes.arrayOf(
        PropTypes.shape({
          slug: PropTypes.string.isRequired,
        })
      ),
    }),
  }),
  isLoading: PropTypes.bool,
};

export default ProjectCardComponent;
