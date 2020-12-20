import Link from 'next/link';
import PropTypes from 'prop-types';
import style from './projectCard.module.scss';

const ProjectCardComponent = ({ project }) => {
  return (
    <Link href={`/projets/${encodeURIComponent(project.slug)}`}>
      <div
        className={[
          style['project-card'],
          style[`project-card--tech-${project.slug}`],
        ].join(' ')}
        data-technology={project.technologies[0].slug}
      >
        <div className={style['project-card__padding']}></div>
        <img
          className={style['project-card__image']}
          src={project.image[0].url}
          loading="lazy"
          aria-hidden="true"
        />
        <div className={style['project-card__wrapper']}>
          <p className={style['project-card__title']}>{project.title}&gt;</p>
        </div>
      </div>
    </Link>
  );
};

ProjectCardComponent.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.array,
    technologies: PropTypes.array,
  }).isRequired,
};

export default ProjectCardComponent;
