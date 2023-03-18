import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import style from './projectCard.module.scss';
import { useOnScreen } from '../../hooks/useOnScreen';

const ProjectCardComponent = ({ project, isLoading }) => {
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);
  const [hasPassedOnScreen, setPassed] = useState(false);

  useEffect(() => {
    if (!hasPassedOnScreen && isOnScreen) {
      setPassed(true);
    }
  }, [isOnScreen]);

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
          style[`project-card--tech-${project.data.slug || 'MISSING-SLUG'}`],
          hasPassedOnScreen && style[`project-card--visible`],
        ].join(' ')}
        type="button"
        ref={elementRef}
        data-technology={project.data.relatedTechnologies[0]?.technology?.uid}
      >
        <div className={style['project-card__padding']} />
        <img
          className={style['project-card__image']}
          src={project.data.image?.url}
          loading="lazy"
          alt={
            project.data.image?.alt ||
            `Image designant le project: ${project.data.title}`
          }
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
      image: {
        url: '',
        alt: '',
      },
      relatedTechnologies: [
        {
          technology: {
            slug: '',
            uid: '',
          },
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
      slug: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }),
      relatedTechnologies: PropTypes.arrayOf(
        PropTypes.shape({
          technology: PropTypes.shape({
            uid: PropTypes.string,
            slug: PropTypes.string,
          }),
        })
      ),
    }),
  }),
  isLoading: PropTypes.bool,
};

export default ProjectCardComponent;
